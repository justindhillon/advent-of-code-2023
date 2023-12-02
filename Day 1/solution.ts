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

function addNumbers (strs: string[]): number {
    let answer:number = 0;
    for (const str of strs) {
        const chars:string[] = str.split('');
        const nums:number[] = extractNumbers(chars);
        const number = String(nums[0]) + String(nums[nums.length - 1]) // 1 + 2 = 12
        answer += Number(number);
    }
    return answer;
}

const strs:string[] = turnFileIntoArray("./input");
const answer:number = addNumbers(strs);

console.log(answer);
