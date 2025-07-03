// Greet a user by name
function greet(name) {
  return "Hello, " + name + "!";
}

// Check if a number is even
function isEven(num) {
  return num % 2 === 0;
}

// Get the square of a number
function square(num) {
  return num * num;
}

// Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Get factorial
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}