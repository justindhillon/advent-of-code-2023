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

console.log(answer);
