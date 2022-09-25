import * as fs from "fs";
import * as path from "path";

enum Direction {
  Up,
  Down,
  Forward,
}

class Instruction {
  direction: Direction;
  value: number;

  constructor(line: string) {
    const [d, v] = line.split(" ");
    this.value = parseInt(v);
    switch (d) {
      case "up":
        this.direction = Direction.Up;
        break;
      case "down":
        this.direction = Direction.Down;
        break;
      case "forward":
        this.direction = Direction.Forward;
        break;
      default:
        throw new Error(`unrecognized direction ${d}`);
    }
  }
}

const input = fs
  .readFileSync(path.join("res", "02.txt"), {
    encoding: "utf-8",
  })
  .split("\n")
  .map((l) => new Instruction(l));

function part1() {
  let [horizontal, depth] = [0, 0];
  for (const instruction of input) {
    switch (instruction.direction) {
      case Direction.Up:
        depth -= instruction.value;
        break;
      case Direction.Down:
        depth += instruction.value;
        break;
      case Direction.Forward:
        horizontal += instruction.value;
        break;
    }
  }
  console.log(`Day 2, part 1: ${horizontal * depth}`);
}

function part2() {
  let [horizontal, depth, aim] = [0, 0, 0];
  for (const instruction of input) {
    switch (instruction.direction) {
      case Direction.Up:
        aim -= instruction.value;
        break;
      case Direction.Down:
        aim += instruction.value;
        break;
      case Direction.Forward:
        horizontal += instruction.value;
        depth += aim * instruction.value;
        break;
    }
  }
  console.log(`Day 2, part 1: ${horizontal * depth}`);
}

part1();
part2();
