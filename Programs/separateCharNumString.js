let arr = ["shital", 10, 500, "lettsc", "c", 300];
let str = [];
let char = [];
let num = [];
for (let element of arr) {
  if (typeof element === "string" && element.length === 1) {
    char.push(element);
  } else if (typeof element === "number") {
    num.push(element);
  } else if (typeof element === "string") [str.push(element)];
}
console.log(char);
console.log(str);
console.log(num);
