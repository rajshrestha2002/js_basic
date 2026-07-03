//Objects
//let user_name="John";
//let user_email="";
//console.log(user_name);
//console.log(user_email);

//object constructive

const obj=new Object();

//object literal {}
const user = {
    name:"John",
    email: "john@gmail.com",
    address: {
        city:"kathmandu",
        country:"npl",
    }
}
//console.log(user.name);

//accessing/reading object properties.
//?dot notation
//console.log(user.name);
const user_name=user.name;
//console.log(user.name);
//console.log(user_name);
//console.log(user.age);

//let name="";

//?bracket notation[]
//console.log(user["email"]);

let key="email";
//console.log(user[key]); // user["email"]
key="name";
//console.log(user[key]);

//adding new properties
user.id="1";
//const new_key="age";
//const new_val=28;
//user[new_key]=new_val;

//console.log(user["id"]);

//modify object properties
user.age=27;
//console.log(user["age"]);

//destructuring
//let name=user.name;
//let email=user.email;
//let id=user.id;
//console.log(name,email,id);

//let u={} //syntax

//let {name,email,age,id}=user;
//console.log(user);

//let user2={
//      name:"Alice",
//      email:"alice@gmail.com",
//      id:"2",
//      age:25,
//}
//destruct user2
//let {name:user2_name, email:user2_email, age:user2_age, id:user2_id} = user2;
//console.log(user2_name, user2_email);

// rest cp..
let { age,id,name,email,...rest } = user;
//console.log(rest);

//spread op...
let o1={
    a:"a", 
    b:"b"
}

//let o2=o1;
//let o2={o1};
//let o2={...o1};
//let o2={...o1,c:"c"};
//o2.a="a2";
//console.log(o1,o2);
console.log(user.address.city);
// //bracket
console.log(user["address"] ["city"]);

const user1={
    name:"john",
    email:"john@gmail.com",
    address:{
        city:"kathmandu",
        country:"npl",
    }
}
const user2={
    name:"john",
    email:"john@gmail.com",
}
//optional chaining [?.]
console.log(user1.address.city);
//console.log(user2.address.city);
//<p> {user2.address?.city} </p>

if (user2.address){
    console.log(user2.address.city);
}
//console.log(undefined.city);
//!null.safty ??
console.log(user2.address?.city??"city not found");