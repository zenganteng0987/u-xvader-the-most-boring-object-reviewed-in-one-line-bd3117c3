import { mkdirSync, writeFileSync } from "node:fs";

// One-line review of a doorstop: its whole job is lying on the floor.
const entry = "It has one job, does it lying down, and gets kicked for it every single day.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
