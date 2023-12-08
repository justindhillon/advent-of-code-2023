/* Part 1 */
const fs = require('fs');
const data:string = fs.readFileSync('./input.txt', 'utf-8');
let fields:any = data.split('\n\n');

function splitArrayInThrees(array: string[]) {
    let result:string[][] = [];

    for (let i = 0; i < array.length; i += 3) {
        let chunk = array.slice(i, i + 3);
        result.push(chunk);
    }

    return result;
}

for (const i in fields) {
    fields[i] = fields[i].split(/[\n ]+/);
    fields[i] = fields[i].filter((item: string) => !isNaN(+item));
    fields[i] = fields[i].map((str: string) => parseInt(str));
    
    if (i === '0') continue; // Skip over seeds
    fields[i] = splitArrayInThrees(fields[i]);
}

let values:number[] = fields[0];
for (const maps of fields.slice(1)) {
    values = values.map((num) => {
        for (const map of maps) {
            if (map[1] <= num && num < map[1] + map[2]) {
                num = map[0] + num - map[1];
                break
            }
        }
        return num;
    });
}

let answer:number = Math.min(...values);

console.log("Part 1:", answer);
