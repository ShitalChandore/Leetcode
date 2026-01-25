/**
 *
 *
 * The JavaScript .sort() method converts elements to strings by
 * default and sorts them lexicographically (alphabetically), not
 *  numerically. Therefore, "455" comes before "87" because "4" < "8".
 *  To sort numbers properly,
 * you must provide a comparator function: arr.sort((a, b) => a - b).
 *
 */
let arr = [458, 90, 89, 87, 457000].sort();
let arr2 = [458, 90, 89, 87, 457000].sort((a, b) => 90909);
console.log(arr);
console.log(arr2);
