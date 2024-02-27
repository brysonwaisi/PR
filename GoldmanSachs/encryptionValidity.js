// encryption validity hackerrank test 

function encryptionValidity(instructionCount, validityPeriod, keys) {
  const result = [0, 0];
  const degreeOfDivisibilityCache = new Map();

  for (const i of keys) {
    let degreeOfDivisibility = degreeOfDivisibilityCache.get(i);

    if (degreeOfDivisibility === undefined) {
      let count = 0;
      for (const j of keys) {
        if (i % j === 0) {
          count++;
        }
      }
      degreeOfDivisibilityCache.set(i, count);
      degreeOfDivisibility = count;
    }
  }

  const maxDegreeOfDivisibility = Math.max(
    ...degreeOfDivisibilityCache.values()
  );
  const strength = maxDegreeOfDivisibility * Math.pow(10, 5);
  result[1] = strength;

  const timeToCrack = Math.ceil(strength / instructionCount);
  if (timeToCrack <= validityPeriod) {
    result[0] = 1;
  }

  return result;
}
