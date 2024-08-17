
function myName(){
console.log("H");
console.log("I");
console.log("M");
console.log("A");
console.log("l");
}

//myName()

function twoNumbers(number1,number2){
    //console.log(number1+number2);
//     let result = number1+number2
//     console.log("Himal");
//     return result
// 
return number1+ number2
}

const result = twoNumbers(3,5)

//console.log("Result=", result);

function loginUserMessage(userName = "sam"){
      if (!userName){
    // console.log(" plz enter a username");
     return
     }
    return `${userName} just logged in`
}

 //console.log(loginUserMessage("Himal"))
 //console.log(loginUserMessage("Himal "))
 

 function calculatecarprice(val1,val2,...num1){
    return num1
 }

//console.log(calculatecarprice(100,200,400));

const user={
    username:"Himal",
    Price:100,
}

function handleObject(anyobject){
 console.log(`Username is ${anyobject.username} and price is ${anyobject.Price}`);
  
}
//handleObject(user)
handleObject({
    username:"Himal",
    Price:100,
})

const Array = [299,300,344,400]

function returnSecondvalue(getArray){
   return getArray[0]
}
 //console.log(returnSecondvalue(Array));
 console.log(returnSecondvalue([299,300,344,400]));
 