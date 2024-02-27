function findEncryptionStrength(keys, instructionCount, validityPeriod) {
  // Helper function to calculate the number of divisors for a given number
  function countDivisors(num) {
    let count = 0;
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    return count;
  }

  let maxDivisors = 0;
  let strength = 0;

  for (let i = 0; i < keys.length; i++) {
    const divisors = countDivisors(keys[i]);
    if (divisors > maxDivisors) {
      maxDivisors = divisors;
      strength = divisors * Math.pow(10, 5);
    }
  }

  const timeToCrack = strength / instructionCount;

  return [timeToCrack <= validityPeriod ? 1 : 0, strength];
}

// Example usage:
const keys = [2, 4, 4];
const instructionCount = 1000;
const validityPeriod = 60; // seconds

const result = findEncryptionStrength(keys, instructionCount, validityPeriod);
console.log(result);
