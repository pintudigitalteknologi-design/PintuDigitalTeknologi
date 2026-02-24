import fs from "fs";
import path from "path";

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const publicSrc = path.join(process.cwd(), "public");
const publicDest = path.join(process.cwd(), ".next/standalone/public");

const staticSrc = path.join(process.cwd(), ".next/static");
const staticDest = path.join(process.cwd(), ".next/standalone/.next/static");

console.log("Copying public folder to standalone...");
if (fs.existsSync(publicSrc)) {
  copyRecursiveSync(publicSrc, publicDest);
  console.log("✅ Public folder copied successfully.");
} else {
  console.log("⚠️ Public folder not found.");
}

console.log("Copying static folder to standalone...");
if (fs.existsSync(staticSrc)) {
  copyRecursiveSync(staticSrc, staticDest);
  console.log("✅ Static folder copied successfully.");
} else {
  console.log("⚠️ Static folder not found.");
}
