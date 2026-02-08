/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
  let longestSubArr = 0;
  let zeros = 0;
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] === 0) zeros++;
    while (zeros > 1) {
      if (nums[i] == 0) {
        zeros--;
      }
      i++;
    }

    longestSubArr = Math.max(longestSubArr, j - i);
  }
  return longestSubArr;
};
console.log(longestSubarray([1]));
