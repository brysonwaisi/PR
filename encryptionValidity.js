// JavaScript program to check encription validity

// Function to calculate encryption validity
function encryptionValidity(instructCount, validPeriod, keys) {
  const mp = new Map();
  let maxi = 0;

  // Count the frequency of each key
  for (const key of keys) {
    if (mp.has(key)) {
      mp.set(key, mp.get(key) + 1);
    } else {
      mp.set(key, 1);
    }
  }

  // Iterate through each key
  for (let i = 0; i < keys.length; i++) {
    const num = keys[i];
    let count = 0;

    // Iterate through each possible
    // divisor of num
    for (let j = 1; j <= Math.sqrt(num); j++) {
      // If j is a divisor of num and
      // present in 'keys', count it
      if (num % j === 0) {
        if (mp.has(j)) {
          count += mp.get(j);
        }

        // If j is not equal to num/j
        // and present in 'keys' count
        // num/j as well as divisors
        // exist in pairs
        if (j !== num / j && mp.has(num / j)) {
          count += mp.get(num / j);
        }
      }
    }
    maxi = Math.max(count, maxi);
  }

  const varValue = instructCount * validPeriod;

  if (varValue >= maxi * 100000) {
    return [1, maxi * 100000];
  }

  return [0, maxi * 100000];
}

// Driver code
const instructCount1 = 1000;
const validPeriod1 = 10000;
const keys1 = [2, 4, 8, 2];
// Function Call
const res1 = encryptionValidity(instructCount1, validPeriod1, keys1);
console.log(res1[0], res1[1]);

const instructCount2 = 100;
const validPeriod2 = 1000;
const keys2 = [2, 4];
// Function Call
const res2 = encryptionValidity(instructCount2, validPeriod2, keys2);
console.log(res2[0], res2[1]);
