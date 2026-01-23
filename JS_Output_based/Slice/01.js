/*arr == slicedArr (false): In JavaScript, arrays are compared by 
reference, not by value. 
Because slice() creates a new array in a different memory location,
the references are not equal.
arr === slicedArr (false): Strict equality also compares references 
for objects (including arrays). 
Since they are distinct objects, this returns false.
*/
let arr = [4, 5, 7];
let slicedArr = arr.slice();
console.log(arr == slicedArr);
console.log(arr === slicedArr);
console.log(arr, slicedArr);
