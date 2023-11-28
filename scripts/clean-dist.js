const fs = require("fs");
const path = require("path");
const { consoleColor } = require("./console-colors");

const distPath = path.join(__dirname, "..", "dist");

if (fs.existsSync(distPath)) {
  fs.rmdirSync(distPath, { recursive: true });
  consoleColor(`The directory ${distPath} has been deleted!`, "green");
} else {
  consoleColor(
    `The directory ${distPath} does not exist. Nothing to clean.`,
    "red"
  );
}
