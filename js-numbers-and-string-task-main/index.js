// ----------------------------------js task numbers and strings given by deepan----------------------------------
// ----------1) Given a decimal number, display its rounded value using JavaScript’s Math methods.-----------------
// let num = 4.6789;
// console.log("Original:", num);
// console.log("Rounded (nearest):", Math.round(num));
// console.log("Rounded (2 decimal places):", num.toFixed(2));
// -----------2) Generate a random integer between two specified values (inclusive) using JavaScript.-----------------
// let min = 10;
// let max = 20;
// let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(`Random number between ${min} and ${max}: ${randomNum}`);
// -----------3) Calculate the sum of the digits of a given integer using JavaScript.-----------------
// let num = -1234;
// let digits = Math.abs(num).toString();
// let sum = 0;
// for (let digit of digits) {
//   sum += Number(digit);
// }
// console.log("Sum of digits:", sum);
// ----------4) Format a number as currency in Indian Rupees (INR) using JavaScript.-----------------
// let amount = 1234567.89;
// let formattedAmount = amount.toLocaleString('en-IN', {
// style: 'currency',
// currency: 'INR'
// });
// console.log("Formatted amount:", formattedAmount);
// ----------5) Calculate the compound interest for a given principal amount, rate of interest, and time period using JavaScript.-----------------
// let P = 5000; 
// let r = 5;    
// let t = 2;    
// let A = P * Math.pow((1 + r / 100), t);
// let CI = A - P;
// console.log("Compound Interest:", CI.toFixed(2));
// console.log("Total Amount:", A.toFixed(2));
// ----------6) Convert a given string to uppercase and reverse the string using JavaScript.-----------------
// let word = "developer";
// let upperCaseWord = word.toUpperCase();
// let reversedWord = word.split("").reverse().join("");
// console.log("Uppercase:", upperCaseWord);
// console.log("Reversed:", reversedWord);

// ----------7) Check if a given string is a palindrome (reads the same forwards and backwards) using JavaScript.-----------------
// let str = "Race car";
// let cleanedStr = str.toLowerCase().replace(/\s+/g, "");
// let reversedStr = cleanedStr.split("").reverse().join("");
// let isPalindrome = cleanedStr === reversedStr;
// console.log("Is Palindrome:", isPalindrome);
// ----------8) Count the occurrences of a specific word in a given sentence using JavaScript.-----------------
// let sentence = "JavaScript is fun. I love JavaScript programming.";
// let word = "JavaScript";
// let regex = new RegExp(`\\b${word}\\b`, "gi");
// let matches = sentence.match(regex);
// let count = matches ? matches.length : 0;
// console.log(`'${word}' appears ${count} times.`);
// -----------9) Replace all occurrences of a specific word in a sentence with another word using JavaScript.-----------------
// let sentence = "welcome to javascript programming";
// let capitalizedSentence = sentence
// .split(" ")
// .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// .join(" ");
// console.log(capitalizedSentence);

// ----------10) Remove duplicate characters from a given string using JavaScript.-----------------
// let text = "programming";
// let uniqueText = "";
// for (let char of text) {
// if (!uniqueText.includes(char)) {
// uniqueText += char;
// }}
// console.log("After removing duplicates:", uniqueText);
