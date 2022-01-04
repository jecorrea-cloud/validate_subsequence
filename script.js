// function isValidSubsequence(array, sequence) {
//   // Write your code here.
//   // O(n) time | O(1) space
//   let arrIdx = 0;
//   let seqIdx = 0;
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//     arrIdx++;
//   }
//   return seqIdx === sequence.length;
// }

function isValidSubsequence(array, sequence) {
  // Write your code here.
  // O(n) time | O(1) Space
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}
