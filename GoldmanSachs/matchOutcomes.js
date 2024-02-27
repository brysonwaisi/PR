// Match Score hackerrank - Goldman Sachs OA

function getScoreDifference(numSeq) {
  let first_score = 0;
  let second_score = 0;
  let i = 0;
  let j = numSeq.length - 1;
  let is_reverse = false;
  let turn = 0;

  while (i <= j) {
    if (is_reverse) {
      if (turn % 2 === 0) {
        first_score += numSeq[j];
      } else {
        second_score += numSeq[j];
      }
      if (numSeq[j] % 2 === 0) {
        is_reverse = !is_reverse;
      }
      j--;
    } else {
      if (turn % 2 === 0) {
        first_score += numSeq[i];
      } else {
        second_score += numSeq[i];
      }
      if (numSeq[i] % 2 === 0) {
        is_reverse = !is_reverse;
      }
      i++;
    }
    turn++;
  }

  return first_score - second_score;
}
