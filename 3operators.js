//*operators
//*arithmetic op
//?,+, -, *, / , %, **[power]

//console.log(10+2);
a="Hello "+"world";
//console.log(a);
//console.log("Hello "+"world");

//*assignment
//? =, +=, -+
let x=10;
x+=5 //x=x+5;
let y=10;
x+=y //x=x+5
//console.log(x); //25

//*comparison
//? ==, ===, <, >, <=, >=, !=, !==
//?output->boolean

let b=10;
let c="10";
//console.log(b==c);
//console.log(b===c);

//*logical
//! AND [&&], OR[||], NOT [!]
let d=true;
let e=false;
//console.log(d && e);
//console.log(d || e);

// a     b      &&      ||
// true  true   true    true
// true  false  false   true
// false true   false   true
// false false  false   false

//console.log (!d);
//console.log (!e);

const isMarr=true;
//console.log(!isMarr && "");

//unary operator
// increment ++
let f=10;
//console.log(f++); // 10, 11 post
//console.log(++f); // 11, 12 pre

// decrement --
f=10;
//console.log(f--); // 10, 9 post
console.log(--f); // 9, 8 pre