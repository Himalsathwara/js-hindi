const user ={
    username:"Himal",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
     }
}

// user.welcomeMessage()
// user.username ="sam"
// user.welcomeMessage()

// console.log(this);

// 
// const chai = function (){
//     let username ="Himal"
//     console.log(this.username);
// }

const chai =  () => {
    let username ="Himal"
    console.log(this);
}
//chai()

// const chai = function(){

// }

// const addtwo = (num1,num2) => {
//   return num1+num2
// }
const addTwo = (num1, num2) => (num1+ num2)

console.log(addTwo(3,4))

