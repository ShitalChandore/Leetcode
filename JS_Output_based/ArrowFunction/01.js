// function abc() {
//   this.a = 20;
//   let b = () => {
//     console.log(this.a);
//   };
//   b();
// }
// abc();

// let obj = {
//   a: 1,
//   b: () => {
//     console.log(this.a);
//   },
// };
// obj.b();

// let obj = {
//   a: 1,
//   b: () => {
//     console.log(obj.a);
//   },
// };
// obj.b();

function abc() {
  let a = 20;
  let b = () => {
    console.log(this.a);
  };
  b();
}
abc();
