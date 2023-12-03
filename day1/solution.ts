const fs = require('fs');

let data = fs.readFileSync('input.txt', 'utf8');
let strs:string[] = data.split('\n');
let regex = /\d/g; // Gets all digets

let answer = 0;
for (const str of strs) {
    const nums:string[] = str.match(regex);
    const add:string = nums[0] + nums[nums.length - 1]
    answer += Number(add);
}

console.log("Part 1:", answer);

/* Part 2 */

let part2 = data.replaceAll("one", "o1ne").replaceAll("two", "t2wo").replaceAll("three", "t3hree")
.replaceAll("four", "f4our").replaceAll("five", "f5ive").replaceAll("six", "s6ix")
.replaceAll("seven", "s7even").replaceAll("eight", "e8ight").replaceAll("nine", "n9ine");

strs = part2.split('\n');
regex = /\d/g; // Gets all digets

answer = 0;
for (const str of strs) {
    const nums:string[] = str.match(regex);
    const add:string = nums[0] + nums[nums.length - 1]
    answer += Number(add);
}

console.log("Part 2:", answer);
