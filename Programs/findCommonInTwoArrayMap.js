let arr1 = [1, 2, 2, 1];
let arr2 = [2, 2, 3];

let map = new Map();
for (let val of arr2) {
  map.set(val, (map.get(val) || 0) + 1);
}

let res = [];
for (let val of arr1) {
  if (map.get(val) > 0) {
    res.push(val);
    map.set(val, map.get(val) - 1); // decrement count
  }
}

console.log(res); // [2, 2]
