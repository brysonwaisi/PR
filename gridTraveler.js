// const gridTraveler = (m, n) => {
//   if (m == 1 && n == 1) return 1;
//   if (m == 0 || n == 0) return 0;
//   return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };

// console.log(gridTraveler(1, 1));
// console.log(gridTraveler(2, 3));
// console.log(gridTraveler(3, 2));
// console.log(gridTraveler(3, 3));
// console.log(gridTraveler(18, 18));

// first implementation results to O(2^n+m)
// O(n+m) space

// Memoization

const gridTravelerr = (m, n, memo = {}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m == 1 && n == 1) return 1;
  if (m == 0 || n == 0) return 0;

  memo[key] = gridTravelerr(m - 1, n, memo) + gridTravelerr(m, n - 1, memo);
  return memo[key];
};

console.log(gridTravelerr(1, 1));
console.log(gridTravelerr(2, 3));
console.log(gridTravelerr(3, 2));
console.log(gridTravelerr(3, 3));
console.log(gridTravelerr(18, 18));

// Time: O(m*n)
// Space: O(m+n)
