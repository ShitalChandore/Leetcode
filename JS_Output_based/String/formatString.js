let str = " hi there Whats Up       !  h1 ";
let formatted = str.toLowerCase().trim().replace(/\s+/g, " ");
console.log(formatted);
/*

If str is "Hello World" (with three spaces):
str.replace(/\s/g, "we") would turn it into HelloweweWorld
 (replacing every single space).
str.replace(/\s+/g, "we") turns it into HelloweWorld (replacing the entire block of 
spaces with one "we"). 
*/
