let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2];
let res = [...new Set(arr1.filter((val) => arr2.includes(val)))];
console.log(res);
