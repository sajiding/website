let nameing = "Muhammad Sajid";
let firstnaming = nameing + "Sajid";
console.log(firstnaming);
//indexing on string datatype
// for (let i = 0; i < nameing.length; i++) {
//     console.log(nameing[i]);
// }

//length of string
console.log(nameing.length);

//different method of string
//trim for remove the unneceesary space
let trimping = "                Sajisd";
trimping = trimping.trim();
console.log(trimping);
console.log(trimping.trim());
console.log(trimping.toLowerCase());
console.log(trimping.toUpperCase());
console.log(trimping.lastIndexOf());
console.log(trimping.slice(3,7));


let fried = "123456789";
for (let i = 0; i < fried.length; i++) {
    console.log(fried.slice(0,i+1));
}
