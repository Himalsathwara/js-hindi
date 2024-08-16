// singleton


// object literals

const mySym = Symbol("key 1")

const JsUser = {
    name: "Himal",
    "full name": "Himal sathwara",
    [mySym]:  "mykey1", 
     age: 18,
    email: "Himalgoogle.com",
    isLoggedIn: false,
    lastLoginDays:["monday", "saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email ="Himal.com"
// Object.freeze(JsUser)
// JsUser.email = "HH.com"
// console.log(JsUser)

JsUser.greetings = function(){
   console.log("Hello Js User");

}

console.log(JsUser.greetings());
