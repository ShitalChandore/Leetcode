const arr = [10, 12, 8, 6, 4];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i + 1]);

  if (arr[i] + arr[i + 1] == 30) {
    console.log(i, i + 1);
  }
}
