/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

  N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples:

zeros(6) // 1 # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
zeros(12) // 2 # 12! = 479001600 --> 2 trailing zeros
zeros(0) // 0
zeros(5) // 1
zeros(6) // 1
zeros(30) // 7
*/

// Find how many times 5 appears
function zeros(n) {
  let numOfZeros = 0;
  while (n > 0) {
    numOfZeros += ~~(n / 5);
    n /= 5;
  }
  return numOfZeros;
}

// Alternates

function zeros(n) {
  var zs = 0;
  while (n > 0) {
    n = Math.floor(n / 5);
    zs += n;
  }
  return zs;
}

function zeros(n) {
  return n / 5 < 1 ? 0 : Math.floor(n / 5) + zeros(n / 5);
}