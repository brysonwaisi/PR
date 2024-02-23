// Write a function canSum(targetSum, numbers) that takes in a target sum and an array of numbers as arguments
// The function should return a boolean indicating whether or not it is possible to generate the targetSum using numbers from the array.
// You may use an element of the array as many times as needed
// You may assume that all input numbers are nonnegative

// canSum(7, [5,3,4,7]) => True
// canSum(7, [2,4]) => False

// const canSum = (targetSum, numbers) => {
//   if (targetSum === 0) return true;
//   if (targetSum < 0) return false;

//   for (let num of numbers) {
//     const remainder = targetSum - num;
//     if (canSum(remainder, numbers) === true) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(canSum(7, [2, 3]));
// console.log(canSum(7, [5, 3, 4, 7]));
// console.log(canSum(7, [2, 4]));
// console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));


            // **Memoized**

function  canSum (targetSum, numbers, memo={}) {
    if (targetSum in memo) return memo[targetSum]
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
        memo[targetSum] = true
      return true;
    }
  }
  memo[targetSum] = false
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));
