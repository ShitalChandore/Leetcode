//Longest Subarray

let nums = [0, 1, 1, 0, 1];
let l = 0;
let r = 0;
let zeros = 0;
let max1sSubArray = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] == 1) {
    max1sSubArray += 1;
  } else if (zeros > 1) {
    zeros = 0;
    l = i;
  }
}
console.log(max1sSubArray);
