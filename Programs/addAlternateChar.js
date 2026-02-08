// let str = "Shital";
// let num = 12345678;
// num = num + "";
// let res = "";
// let length = str.length > num.length ? str.length : num.length;
// for (let i = 0; i < length; i++) {
//   if (str[i]) res += str[i];
//   if (num[i]) res += num[i];
// }
// console.log(res);

// let str = "  s h i         t a l ss f";
// let clearnerStr = str.trim().replace(/\s+/g, " ");
// console.log(clearnerStr);

function mergeAlternate(str1, str2) {
  let cleanStr2 = String(str2);
  let length = Math.max(str1.length, cleanStr2.length);
  let res = "";
  for (let i = 0; i < length; i++) {
    res += (str1[i] ?? "") + (cleanStr2[i] ?? "");
  }
  console.log(res);
}
mergeAlternate("shital", 12345676);
