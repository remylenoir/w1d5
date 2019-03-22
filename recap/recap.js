// Recap & Challenges

// 1. Function to console a string
function myFunction(str) {
  console.log(str);
}
myFunction("Hello"); // Hello

// 2. Function that takes in a number and returns the number times two
function multNumber(number) {
  return number * 2;
}
console.log(multNumber(2)); // 4

// 3. Function that takes two numbers.
// One base number ** exponent number
function expoNum(num1, num2) {
  return num1 ** num2;
}
console.log(expoNum(3, 4)); // 81

// 4. Function that takes an array and logs every element
function logArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
logArray(["A", "B", "C"]);

// forEach() alternative
function logArray(array) {
  array.forEach(function(el) {
    console.log(el);
  });
}
logArray(["1", "2", "3"]);

// Arrow function alterative
function logArray(array) {
  array.forEach(el => {
    console.log(el);
  });
}
logArray(["x", "y", "z"]);

// 5. Function that takes in an array of characters and returns a string of those characters
function arrTostring(arr) {
  let newString = "";
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newString += arr[i].toUpperCase();
    } else {
      newString += arr[i].toLowerCase();
    }
    return newString;
  }
}
console.log(arrTostring(["B", "E", "R", "l", "i", "N"]));

// 6. Function that takes one array of strings and returns of the sum of the strings' lenghts combined with the array length
function sumLengths(array) {
  let combinedStrings = array.join("");
  return array.length + combinedStrings.length;
}
console.log(sumLengths(["Berlin", "Barcelona", "Madrid"])); // 24
