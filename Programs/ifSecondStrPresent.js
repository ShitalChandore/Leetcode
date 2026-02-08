let arr = ["vedant", "lala"];
function ifPresent(str1, str2) {
  for (let char of str2) {
    if (!str1.includes(char)) {
      return false;
    }
  }
  return true;
}
console.log(ifPresent(arr[0], arr[1]));
