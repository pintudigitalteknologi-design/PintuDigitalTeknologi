import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

// Memastikan RESEND_API_KEY tersedia
const resend = new Resend(process.env.RESEND_API_KEY);

// ============================================================
// Simple in-memory rate limiter (per IP, 3 requests per minute)
// ============================================================
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const MAX_REQUESTS = 5; // Increased slightly for production

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now - entry.lastReset > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, lastReset: now });
    return false;
  }

  entry.count++;
  if (entry.count > MAX_REQUESTS) {
    return true;
  }

  return false;
}

// ============================================================
// Input sanitisation — strip HTML / script tags
// ============================================================
function sanitize(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

// ============================================================
// Validate email format
// ============================================================
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// ============================================================
// Validate phone number (Indonesian format)
// ============================================================
function isValidPhone(phone: string): boolean {
  // Accepts: 08xxxxxxxxxx, +628xxxxxxxxxx, 628xxxxxxxxxx
  const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{7,11}$/;
  return phoneRegex.test(phone.replace(/[\s\-]/g, ""));
}

// ============================================================
// Valid project types whitelist
// ============================================================
const VALID_PROJECT_TYPES = [
  "Website",
  "Aplikasi Mobile",
  "AI / ML / Deep Learning",
  "UI UX & Desain",
  "Video Production",
  "Data Engineering",
];

// ============================================================
// POST handler
// ============================================================
export async function POST(req: NextRequest) {
  try {
    // --- Rate limiting ---
    const forwarded = req.headers.get("x-forwarded-for");
    const realIp = req.headers.get("x-real-ip");
    // Fallback order: x-real-ip -> x-forwarded-for -> unknown
    const ip =
      realIp ||
      (forwarded ? forwarded.split(",")[0].trim() : null) ||
      "unknown";

    // If ip is 'unknown', we bypass rate limiting to prevent all valid users from being blocked on a VPS behind a proxy not setting headers
    if (ip !== "unknown" && isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Terlalu banyak request. Coba lagi dalam 1 menit." },
        { status: 429 },
      );
    }

    // --- Parse & validate body ---
    const body = await req.json();
    const { name, email, phone, company, projectType, message } = body;

    if (!name || !email || !phone || !projectType || !message) {
      return NextResponse.json(
        { error: "Nama, email, no. HP, jenis project, dan pesan wajib diisi." },
        { status: 400 },
      );
    }

    if (typeof name !== "string" || name.length > 100) {
      return NextResponse.json(
        { error: "Nama tidak valid (maks 100 karakter)." },
        { status: 400 },
      );
    }

    if (
      typeof email !== "string" ||
      !isValidEmail(email) ||
      email.length > 320
    ) {
      return NextResponse.json(
        { error: "Format email tidak valid." },
        { status: 400 },
      );
    }

    if (
      typeof message !== "string" ||
      message.length < 10 ||
      message.length > 2000
    ) {
      return NextResponse.json(
        { error: "Pesan harus antara 10 - 2000 karakter." },
        { status: 400 },
      );
    }

    if (company && (typeof company !== "string" || company.length > 100)) {
      return NextResponse.json(
        { error: "Nama perusahaan tidak valid (maks 100 karakter)." },
        { status: 400 },
      );
    }

    if (typeof phone !== "string" || !isValidPhone(phone)) {
      return NextResponse.json(
        { error: "Format nomor HP/WhatsApp tidak valid." },
        { status: 400 },
      );
    }

    if (
      typeof projectType !== "string" ||
      !VALID_PROJECT_TYPES.includes(projectType)
    ) {
      return NextResponse.json(
        { error: "Jenis project tidak valid." },
        { status: 400 },
      );
    }

    // --- Honeypot check (if a hidden field was filled, it's a bot) ---
    if (body._honeypot) {
      // Silently accept but don't send
      return NextResponse.json({ success: true });
    }

    // --- Sanitise inputs ---
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safePhone = sanitize(phone);
    const safeCompany = company ? sanitize(company) : "-";
    const safeProjectType = sanitize(projectType);
    const safeMessage = sanitize(message);

    // --- Check Env Variables ---
    if (!process.env.RESEND_API_KEY) {
      console.error("Missing RESEND_API_KEY environment variable.");
      return NextResponse.json(
        {
          error:
            "Server Configuration Error: API Key Resend tidak ditemukan. Hubungi Admin.",
        },
        { status: 500 },
      );
    }

    // --- Compose email ---
    const htmlContent = `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f8fafc; border-radius: 16px; overflow: hidden;">
        <!-- Header -->
        <div style="background: linear-gradient(135deg, #072331, #0d3a54); padding: 32px; text-align: center;">
          <h1 style="color: #8BCDF0; margin: 0; font-size: 24px; font-weight: 700;">
            📬 Pesan Baru dari Website
          </h1>
          <p style="color: #94a3b8; margin: 8px 0 0; font-size: 14px;">
            Pintu Digital Teknologi — Contact Form
          </p>
        </div>

        <!-- Body -->
        <div style="padding: 32px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; width: 120px; vertical-align: top;">
                Nama
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                ${safeName}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">
                Email
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                <a href="mailto:${safeEmail}" style="color: #3b82f6; text-decoration: none;">${safeEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">
                Perusahaan
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                ${safeCompany}
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">
                No. HP / WA
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                <a href="https://wa.me/${safePhone.replace(/[^0-9+]/g, "").replace(/^0/, "62")}" style="color: #25D366; text-decoration: none;">${safePhone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">
                Jenis Project
              </td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                <span style="display: inline-block; background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 16px; font-size: 13px; font-weight: 600;">${safeProjectType}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; vertical-align: top;">
                Pesan
              </td>
              <td style="padding: 12px 0; color: #1e293b; font-size: 15px; line-height: 1.6;">
                ${safeMessage.replace(/\n/g, "<br/>")}
              </td>
            </tr>
          </table>
        </div>

        <!-- Footer -->
        <div style="background-color: #f1f5f9; padding: 16px 32px; text-align: center; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 11px; margin: 0;">
            Email ini dikirim melalui form kontak di website pintudigitalteknologi.com menggunakan Resend API
          </p>
        </div>
      </div>
    `;

    // --- Send Email via Resend ---
    const { data, error: sendError } = await resend.emails.send({
      from: "Pintu Digital Teknologi <no-reply@pintudigital.tech>",
      to: ["pintudigitalteknologi@gmail.com"],
      replyTo: safeEmail,
      subject: `💬 [${safeProjectType}] Pesan dari ${safeName} — Pintu Digital Teknologi`,
      html: htmlContent,
    });

    if (sendError) {
      console.error("Resend API Error:", sendError);
      return NextResponse.json(
        { error: "Gagal mengirim pesan melalui penyedia email." },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error: any) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Terjadi kesalahan internal. Silakan coba lagi nanti." },
      { status: 500 },
    );
  }
}
