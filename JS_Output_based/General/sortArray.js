let arr = [10, 4, 6, 2, 8, 9, 1, 99];
for (let i = 0; i < arr.length - 1; i++) {
  for (let j = i; j < arr.length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      console.log(arr[j], arr[j + 1]);
    }
  }
}
console.log(arr);
