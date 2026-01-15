
console.log("****************************----functions and methods------>CP0x");

console.log("abc".toUpperCase());


function nameOfTheFunction(){
    // do some work
    console.log("inside function block");
}

function nameOfTheFunction(value){
    // do some work
    console.log("inside function block but tit follow polymorphism");
}

function nameOfTheFunctionButWithParams(value){
    console.log(`isndie params funtion ${value}`);
}

nameOfTheFunction(); // function call/ function invocation
nameOfTheFunctionButWithParams("Hello World!")
nameOfTheFunction("Value");


// avoid redudancy->repetation should be as less as possible

console.log("****************************----functions and methods and return values------>CP1x");


function findSumOf2Numbers(num1, num2){
    var sum = num1+num2;
    console.log(`sum of ${num1} and ${num2} is ${sum} and same sum value will be returnd to the called place`);
    return sum;
    console.log("This will not reaach, un-reachable statement");
}


let returnVlaue = findSumOf2Numbers(10,221232);
console.log(`returned value are ${returnVlaue}`);

// funciton param are the local variables of the function and the scope of the variable in that block is only avliable till that bock






function additionOfNumber(num1, num2){
    return num1+num2;
}

function multiplicationFunction(num1, num2){
    return num1*num2;
}


// arrow function



const arrowSum= (a,b)=>{
    return a+b;
}

const sumFunctionWithArrowFucntion = (num1, num2)=>{
    return num1 + num2;
}



console.log(arrowSum(102,2))


const arrowMull = (x,y) =>{
    return x*y;
}


console.log(arrowMull(10,6));

console.log("something");


const helloArrow = ()=>
    console.log("Hello Wrold")





helloArrow()




console.log("****************************----functions practice on function------>CP2x");


function returnVowelsFromStirng(value){
    let vc = 0
    for(let i= 0;i <value.length; i++){
        if(value[i] ==='A' ||value[i] ==='E' ||value[i] ==='I' ||value[i] ==='O' ||value[i] ==='U' || value[i] ==='a' ||value[i] ==='e' ||value[i] ==='i' ||value[i] ==='i' ||value[i] ==='u' ){
            vc++;
        }
    }
    return vc
}


const  vowelCountUsingArrow= (value)=>{
    let vc = 0
    for(let i= 0;i <value.length; i++){
        if(value[i] ==='A' ||value[i] ==='E' ||value[i] ==='I' ||value[i] ==='O' ||value[i] ==='U' || value[i] ==='a' ||value[i] ==='e' ||value[i] ==='i' ||value[i] ==='i' ||value[i] ==='u' ){
            vc++;
        }
    }
    return vc
}

let numberOfVowelss = returnVowelsFromStirng("Akshat");
console.log("Using normal functions:", numberOfVowelss);


let numberOfVowelss1 = vowelCountUsingArrow("Akshat");
console.log("Using arrow functions:", numberOfVowelss1);
