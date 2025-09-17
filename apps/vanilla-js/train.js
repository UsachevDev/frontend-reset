const numbers = [1, 5, 12, 18, 7, 24, 3, 15, 10, 11];

function even(arr) {
    let res = [];
    for (let num of arr) {
        if (num % 2 == 0) {
            res.push(num);
        }
    }

    return res;
}

function greaterThanInput(arr) {
    let userInput = prompt("Введите число:");
    let limit = Number(userInput);
    return arr.filter(num => num > limit);
}

function sumArr1(arr) {
    sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

const greater10 = arr => arr.filter(num => num > 10);
const sumArr = arr => arr.reduce((sum, num) => sum + num, 0);

// console.log(even(numbers))
// document.writeln(even(numbers));
// document.writeln('<br>')

// console.log(greater10(numbers))
// document.writeln(greater10(numbers));
// document.writeln('<br>')

// console.log(sumArr(numbers))
// document.writeln(sumArr1(numbers));
// document.writeln('<br>')

// document.writeln(greaterThanInput(numbers));
// document.writeln('<br>')


const text = "JavaScript is awesome!";
const countWords = str => str.split(" ").length;
const reverseWords = str => {
    const words = str.split(" ");
    let res = '';
    for (let i = words.length - 1; i >= 0; i--) {
        res += words[i] + " ";
    }
    return res.trim();
}

const longestWord = str => {
    const words = str.split(" ");
    let longest = "";
    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }

    return longest;
}

const longestWordReduce = str => str.split(" ").reduce((longest, current) => 
    current.length > longest.length ? current : longest, "")

console.log(countWords("JavaScript is awesome!"));
// 3

console.log(reverseWords("JavaScript is awesome!"));
// "awesome! is JavaScript"

console.log(longestWordReduce("JavaScript is awesome!"));
console.log(longestWord("JavaScript is awesome!"));
// "JavaScript"

// console.log(replaceWord("JavaScript is awesome!", "awesome!", "great"));
// // "JavaScript is great"

const countLetters = str => {
    const result = {};
    for (let letter of str) {
        if (letter in result) {
            result[letter] += 1;
        }
        else {
            result[letter] = 1;
        }
    }
    return result;
}

console.log(countLetters("hello world"));