const useremail ="h@hitesh.ai" // if var is empty it assume false, if array is there is also assume true

if (useremail){
    console.log("got user email");
    
} else {
    console.log("don't have user email");

}

// falsy value
//false,0,-0, BigInt On, "", null,undefined,NaN

//turhy values
// "0",'flase'," ",[],{},function(){}


// 

const emptyObj ={}
 if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
 }
  // Nullish Coalesting Operator (??): null Undefined

//   let val1;
//   val1 = 5 ?? 10
//   val1 = null ?? 10 // null for the sefty check
   //val1 = undefined ?? 15
 val1 = null ?? 10 ?? 20

  console.log(val1);

  // ternery opertator 

 // condition ? true : false

  const iceteaprice = 100
  iceteaprice <= 80 ? console.log("less than 80") : console.log("more than 80");
  
  
  