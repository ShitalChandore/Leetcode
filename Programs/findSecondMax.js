let arr = [1, 3, 4, 0, 9, 99, 10];
let firstMax = -Infinity;
let secondLast = -Infinity;

for (let element of arr) {
  if (element > firstMax) {
    secondLast = firstMax;
    firstMax = element;
  } else if (element > secondLast && element !== firstMax) {
    secondLast = element;
  }
}

console.log(firstMax, secondLast);
