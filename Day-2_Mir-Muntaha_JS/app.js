function checkNumber(number) {
  if (number > 0) return "Positive";
  else if (number < 0) return "Negative";
  else return "Zero";
}

console.log("Assignment 1: Check Number's Sign");
console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));

function calculateFactorial(number) {
  if (number < 0) return "Factorial is not defined for negative numbers.";
  let factorial = 1;
  for (let i = 2; i <= number; i++) factorial *= i;
  return factorial;
}

console.log("\nAssignment 2: Calculate Factorial");
console.log(calculateFactorial(5));

function findLargerNumber(num1, num2) {
  return Math.max(num1, num2);
}

console.log("\nAssignment 3: Find Larger Number");
console.log(findLargerNumber(10, 20));

function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[\W_]/g, '');
  const reversed = cleanStr.split('').reverse().join('');
  return cleanStr === reversed;
}

console.log("\nAssignment 4: Check Palindrome");
console.log(isPalindrome("level"));
console.log(isPalindrome("Hello"));

function printPrimesUpTo(number) {
  for (let i = 2; i <= number; i++) {
      let isPrime = true;
      for (let j = 2; j < i; j++) {
          if (i % j === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) console.log(i);
  }
}

console.log("\nAssignment 5: Print Prime Numbers");
printPrimesUpTo(20);

function simpleCalculator(num1, num2, operator) {
  switch (operator) {
      case '+': return num1 + num2;
      case '-': return num1 - num2;
      case '*': return num1 * num2;
      case '/': return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
      default: return "Invalid operator";
  }
}

console.log("\nAssignment 6: Simple Calculator");
console.log(simpleCalculator(10, 5, '+'));
console.log(simpleCalculator(10, 5, '*'));
console.log(simpleCalculator(10, 0, '/'));

function countVowels(str) {
  const vowels = str.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}

console.log("\nAssignment 7: Count Vowels");
console.log(countVowels("Hello World"));

function isPerfectNumber(number) {
  if (number <= 1) return false;
  let sum = 0;
  for (let i = 1; i < number; i++) if (number % i === 0) sum += i;
  return sum === number;
}

console.log("\nAssignment 8: Check Perfect Number");
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(10));

function printFibonacciSeries(number) {
  let prev = 0, current = 1, temp;
  console.log("\nAssignment 9: Print Fibonacci Series");
  console.log(prev);
  while (current <= number) {
      console.log(current);
      temp = current;
      current += prev;
      prev = temp;
  }
}

printFibonacciSeries(20);

function multiplicationTable(number) {
  console.log("\nAssignment 10: Print Multiplication Table");
  for (let i = 1; i <= 10; i++) console.log(`${number} * ${i} = ${number * i}`);
}

multiplicationTable(5);
