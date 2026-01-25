let arr1 = [10, 4, 2, 6, 8, 5, 0];
let arr2 = [101, 4, 21, 68, 8, 0, 0, 4];
let length = arr1.length > arr2.length ? arr1.length : arr2.length;
let res = [];

for (let i = 0; i < length; i++) {
  if (arr2.indexOf(arr1[i]) !== -1) {
    res.push(arr1[i]);
  }
}
console.log(res);
