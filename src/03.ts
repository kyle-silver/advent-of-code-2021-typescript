import * as fs from "fs";
import * as path from "path";

const input = fs
    .readFileSync(path.join("res", "03.txt"), {
        encoding: "utf-8",
    })
    .split("\n");

type Bit = "0" | "1";
type ByteCounter = { "0": number; "1": number };

function part1() {
    // @ts-ignore
    const lines: Array<Array<Bit>> = input.map((arr) => arr.split(""));
    let counts: Array<ByteCounter> = new Array(lines[0].length).fill(undefined).map((_) => ({ "0": 0, "1": 1 }));
    for (const bits of lines) {
        bits.forEach((value, i) => (counts[i][value] += 1));
    }
    const bytes = counts.map((byte_counter) => (byte_counter["0"] > byte_counter["1"] ? 0 : 1)).reverse();
    let [gamma_rate, epsilon_rate] = [0, 0];
    for (let i = 0; i < bytes.length; i++) {
        if (bytes[i] != 0) {
            gamma_rate += Math.pow(2, i);
        } else {
            epsilon_rate += Math.pow(2, i);
        }
    }
    console.log(gamma_rate * epsilon_rate);
}

part1();
