//multiple data type
var numbering = 22;
console.log(typeof numbering);
numbering = "sajid";
console.log(typeof numbering);
numbering = true;
console.log(typeof numbering);
numbering = 12.4554;
console.log(typeof numbering);
var numberig;
console.log(typeof numberig);


//number to string
let age = 22;
console.log(typeof age);
age = age + "";
console.log(typeof age);

age = "22";
console.log(age-10);
console.log(age+10);
console.log(age*2);
console.log(age/10);

//string to number;
let aging = "22";
let ageing = 22;
console.log(typeof (+aging));
console.log(typeof (ageing + ""));

let agnum = 22;
let agstr = "22";
agnum = String(agnum);
agstr = Number(agstr);
console.log(typeof agnum);
console.log(typeof agstr);


//concatination
let myfirstname = "Muhammad";
let mylastname = "Sajid";
let myfullname = myfirstname +" "+mylastname;
console.log(myfullname);
