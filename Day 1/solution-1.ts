const fs = require('fs');

function turnFileIntoArray (path: string): string[] {
    const data:string = fs.readFileSync(path, 'utf8');
    const array:string[] = data.split('\n');
    return array;
}

function extractNumbers (chars: string[]): number[] {
    let nums:number[] = []
    for (const char of chars) {
        if (!isNaN(Number(char))) {
            nums.push(Number(char));
        }
    }
    return nums;
}

function addFirstLast (strs: string[]): number[] {
    const numbers:number[] = [];
    for (const str of strs) {
        const chars:string[] = str.split('');
        const nums:number[] = extractNumbers(chars);
        numbers.push(Number(String(nums[0]) + String(nums[nums.length - 1])));
    }
    return numbers;
}

const strs:string[] = turnFileIntoArray("./input");
const nums:number[] = addFirstLast(strs);

let answer:number = 0;
for (const num of nums) {
    answer += num;
}

console.log(answer);
