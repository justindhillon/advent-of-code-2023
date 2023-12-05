const fs = require('fs');
const data:string = fs.readFileSync('./input.txt', 'utf8');
const rows:string[] = data.split('\n');

/* Part 1 */
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

console.log("Part 1:", answer);

/* Part 2 */
answer = 0;
for (let row = 0; row < rows.length; row++) {
    for (let column = 0; column < rows[row].length; column++) {
        if (rows[row][column] != '*') continue // If not '*', skip

        // Get chars to check
        const charsToCheck:string[][] = [];
        const left:number = Math.max(0, column - 3);
        const right:number = Math.min(rows[row].length, column + 4);
        if (row != 0) {
            // Add Top
            const chars:string = rows[row - 1].slice(left, right);
            charsToCheck.push(chars.split(''));
        }
        // Add Middle
        const chars:string = rows[row].slice(left, right);
        charsToCheck.push(chars.split(''));
        if (row + 1 != rows[row].length) {
            // Add Bottom
            const chars:string = rows[row + 1].slice(left, right);
            charsToCheck.push(chars.split(''));
        }

        // Get the two numbers around the '*'
        let numberOfNumbers:number = 0;
        let num:number = 1;
        for (const line of charsToCheck) {
            for (let char = 0; char < line.length; char++) {
                if (isNaN(Number(line[char]))) continue // If not a number, skip
            
                // Get the start and end position of the number
                const start:number = char;
                let end:number = char;
                while (true) {
                    char++;
                    if (isNaN(Number(line[char]))){
                        // If not a number
                        end = char - 1;
                        break;
                    }
                }

                let str:string = '';
                if (2 <= start && start <= 4 || 2 <= end && end <= 4) {
                    for (let i = start; i < end + 1; i++) {
                        str += line[i];
                    }
                    num *= Number(str);
                    numberOfNumbers++;
                }
            }
        }

        // If there are two numbers, add the multipication (num) to ansewer
        if (2 == numberOfNumbers) {
            answer += num;
        }
    }
}

console.log("Part 2:", answer);
