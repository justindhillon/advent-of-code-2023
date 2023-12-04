/* Part 1 */
const fs = require('fs');
const input:string = fs.readFileSync("./input.txt", 'utf8');
const games:string[] = input.split("\n");

function isPossibleGame(words: string[]): boolean {
    for (let i = 0; i < words.length; i++) {
        if (isNaN(+words[i])) continue // If not a number, skip
        let word:string = words[i + 1].slice(0, -1); // Get the word after the number
        if (12 < Number(words[i]) && word === "red") return false // There are more than 12 red balls
        if (13 < Number(words[i]) && word === "green") return false // There are more than 13 green balls
        if (14 < Number(words[i]) && word === "blue") return false // There are more than 14 blue balls
    }
    return true;
}

let answer:number = 0;
for (let i = 0; i < games.length; i++) {
    const words:string[] = (games[i] + ';').split(' ');
    if (isPossibleGame(words)) answer += i + 1
}

console.log("Part 1:", answer);

/* Part 2 */
function powerOfGame(words: string[]): number {
    let red:number = 0;
    let blue:number = 0;
    let green:number = 0;
    for (let i = 0; i < words.length; i++) {
        let word:string = words[i].slice(0, -1);
        if (word === "red") {
            if (red < Number(words[i - 1])) red = Number(words[i - 1]);
            continue;
        }
        if (word === "blue") {
            if (blue < Number(words[i - 1])) blue = Number(words[i - 1]);
            continue;
        }
        if (word === "green") {
            if (green < Number(words[i - 1])) green = Number(words[i - 1]);
        }
    }

    return red * blue * green;
}

answer = 0;
for (let i = 0; i < games.length; i++) {
    const words:string[] = (games[i] + ';').split(' ');
    answer += powerOfGame(words);
}

console.log("Part 2:", answer);
