const fs = require('fs');
const data:string = fs.readFileSync('./input.txt', 'utf-8');

const rows:string[] = data.split("\n");

let answer:number = 0;
for (const row of rows) {
    const columns:string[] = row.split(/\s+/);
    const winningNumbers:string[] = columns.splice(2, 10);
    const numbersToCheck:string[] = columns.splice(3, columns.length);
    
    let score:number = 0.5;
    for (const winningNumber of winningNumbers) {
        if (numbersToCheck.includes(winningNumber)) {
            score *= 2;
        }
    }
    answer += Math.floor(score);
}

console.log("Part 1:", answer);
