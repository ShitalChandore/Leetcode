// "use strict";
// let str = "shital";
// console.log(str.charAt(10));

// difference between undeclared and undefined

// a = 100;
// console.log(a);

//whar are the different ways to declare a object

// function abc() {}
// console.log(typeof abc);

let abc = 100;
if (
  function xyz() {
    return 10;
  }
) {
  console.log(typeof xyz);
  abc = abc + typeof xyz;
}
console.log(abc);
