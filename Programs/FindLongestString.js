let str = ["js", "Longest", "hitheopopr"];
let longest = "";
for (let word of str) {
  if (word.length > longest.length) {
    longest = word;
  }
}
console.log(longest);
