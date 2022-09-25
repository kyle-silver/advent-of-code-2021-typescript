import * as fs from "fs";
import * as path from "path";

const input = fs
  .readFileSync(path.join("res", "01.txt"), {
    encoding: "utf-8",
  })
  .split("\n")
  .map((s) => parseInt(s));

function part1() {
  let increases = 0;
  for (let i = 1; i < input.length; i += 1) {
    if (input[i] > input[i - 1]) {
      increases += 1;
    }
  }
  console.log(`Day 1, part 1: ${increases}`);
}

function part2() {
  let increases = 0;
  for (let i = 3; i < input.length; i += 1) {
    if (input[i] > input[i - 3]) {
      increases += 1;
    }
  }
  console.log(`Day 1, part 2: ${increases}`);
}

part1();
part2();
