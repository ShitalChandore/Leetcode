function findTopKFreqElement(arr, k) {
  if (arr.length === 0) return;
  let freqObj = {};
  let res = [];
  for (let element of arr) {
    freqObj[element] = (freqObj[element] ?? 0) + 1;
  }
  let sorted = Object.entries(freqObj).sort((a, b) => {
    return a[1] - b[1];
  });

  for (let i = sorted.length - 1; k > 0; i--) {
    k--;
    res.push(Number(sorted[i][0]));
  }
  return res;
}
let arr = [1, 2];
console.log(findTopKFreqElement(arr, 2));
