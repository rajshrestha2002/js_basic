// typeconversions
//!implicity conversion
//! explicit conversion

//let a=12;
//let a="12";
//let a="12rs";
//let a="123.12";

//console.log(Boolean(a));

//string()
//number()
//console.log(Number(a));
//console.log(parseInt(a));
//console.log(parseFloat(a));

//implicit conversion : type cacarcing
//console.log("10"+10) // 1010
//console.log("10"-4) // 6 
//console.log("ab"-4) // Nan

//truthy & falsy value
//if (true) {
//if (false) {    
//let a=9;
//let a=10;
let a=-10;
if (a) { //truthy value
//if (a=9) {
//if (a>=10) {
console.log("hello world");
}

//falsy: false, null, undefined, 0,-0,NaN 
// all other except these are truthy value
//console.log(Boolean(null));
//console.log(Boolean(""));
//console.log(Boolean(" "));

let user={};
if (user){
    console.log('User not found.');
} else {
    console.log('User found');
}
    
//control flow
//controll statements
//if 
//if else
let age=18;
if (age>=18) {
   console.log("Can Vote.");
} else {
    console.log("Cannot Vote.");
}   
// else-if ladder
//if age>=60 ->major
//if age>18 and age<60 -> adult
//if age<18-> minor

if (age>=60) {
    console.log("Major");
} else if (age>=18) {
    console.log("Adult");
} else {
    console.log("Minor");
}
//let b=12;
//console.log(typeof b);
//b="";
//console.log(typeof b);
//console.log(typeof b==="string");
//console.log(typeof null);

//ternary op 
//condition ? exp_1:exp_2

//age=65;
//let res=age>=18 ? "can vote" : "cannot vote";
//console.log(res);
//res=age>=60 ? "Major" : age>=18 ? "Adult" : "Minor";
//console.log(res);

//loop
//do while
console.log("do-while");
//let i=11
//do{
  //  console.log(i);
    //i++; //i=i+1
    //i--;
//} while (i<=10);

console.log("while");

//let j=11;
//while(j<=10) {
  //  console.log(j);
//    j++;
//}
console.log("for");
for (let i=1; i<=10; i++) {
console.log(i);
}
