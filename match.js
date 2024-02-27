
function solve(num) {
    let first_score = 0;
    let second_score = 0;
    let i = 0; // pointer in start
    let j = num.length - 1; // pointer in the end
    let is_reverse = false; // to check which pointer will move
    let turn = 0; // who will pick next

    while (i <= j) {
        if (is_reverse) {
            if (turn % 2 === 0) {
                first_score += num[j];
            } else {
                second_score += num[j];
            }
            if (num[j] % 2 === 0) {
                is_reverse = !is_reverse;
            }
            j--;
        } else {
            if (turn % 2 === 0) {
                first_score += num[i];
            } else {
                second_score += num[i];
            }
            if (num[i] % 2 === 0) {
                is_reverse = !is_reverse;
            }
            i++;
        }
        turn++;
    }

    return first_score - second_score;
}

// Example usage:
const inputArray = [1, 2, 3, 4, 5, 6];
const result = solve(inputArray);
console.log(result);