const fs = require('fs');
const data:string = fs.readFileSync('./input.txt', 'utf8');
const rows:string[] = data.split('\n');

let answer:number = 0;
for (let row = 0; row < rows.length; row++) {
    for (let column = 0; column < rows[row].length; column++) {
        if (isNaN(Number(rows[row][column]))) continue // If not a number, skip
        
        // Get the start and end position of the number
        const start:number = column;
        let end:number = column;
        while (true) {
            column++;
            if (isNaN(Number(rows[row][column]))){
                // If not a number
                end = column;
                break;
            }
        }

        // Check if symbole surrounds number
        let stringToCheck:string = '';
        if (row != 0) stringToCheck += rows[row-1].substring(start - 1, end + 1);                   // Add top
        stringToCheck += rows[row].substring(start - 1, end + 1);                                   // Add middle
        if (row != rows[row].length - 1) stringToCheck += rows[row+1].substring(start - 1, end + 1) // Add bottom

        const chars = stringToCheck.split('');
        for (const char of chars) {
            if (isNaN(Number(char)) && char != '.') {
                // If surrounded by symbole, add to answer
                answer += Number(rows[row].substring(start, end));
                break;
            }
        }
    }
}

console.log("Part: 1", answer);
