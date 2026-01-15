
console.log("****************************----functions and methods------>CP0x");

console.log("abc".toUpperCase());


function nameOfTheFunction() {
    // do some work
    console.log("inside function block");
}

function nameOfTheFunction(value) {
    // do some work
    console.log("inside function block but tit follow polymorphism");
}

function nameOfTheFunctionButWithParams(value) {
    console.log(`isndie params funtion ${value}`);
}

nameOfTheFunction(); // function call/ function invocation
nameOfTheFunctionButWithParams("Hello World!")
nameOfTheFunction("Value");


// avoid redudancy->repetation should be as less as possible

console.log("****************************----functions and methods and return values------>CP1x");


function findSumOf2Numbers(num1, num2) {
    var sum = num1 + num2;
    console.log(`sum of ${num1} and ${num2} is ${sum} and same sum value will be returnd to the called place`);
    return sum;
    console.log("This will not reaach, un-reachable statement");
}


let returnVlaue = findSumOf2Numbers(10, 221232);
console.log(`returned value are ${returnVlaue}`);

// funciton param are the local variables of the function and the scope of the variable in that block is only avliable till that bock






function additionOfNumber(num1, num2) {
    return num1 + num2;
}

function multiplicationFunction(num1, num2) {
    return num1 * num2;
}


// arrow function



const arrowSum = (a, b) => {
    return a + b;
}

const sumFunctionWithArrowFucntion = (num1, num2) => {
    return num1 + num2;
}



console.log(arrowSum(102, 2))


const arrowMull = (x, y) => {
    return x * y;
}


console.log(arrowMull(10, 6));

console.log("something");


const helloArrow = () =>
    console.log("Hello Wrold")





helloArrow()




console.log("****************************----functions practice on function------>CP2x");


function returnVowelsFromStirng(value) {
    let vc = 0
    for (let i = 0; i < value.length; i++) {
        if (value[i] === 'A' || value[i] === 'E' || value[i] === 'I' || value[i] === 'O' || value[i] === 'U' || value[i] === 'a' || value[i] === 'e' || value[i] === 'i' || value[i] === 'i' || value[i] === 'u') {
            vc++;
        }
    }
    return vc
}


const vowelCountUsingArrow = (value) => {
    let vc = 0
    for (let i = 0; i < value.length; i++) {
        if (value[i] === 'A' || value[i] === 'E' || value[i] === 'I' || value[i] === 'O' || value[i] === 'U' || value[i] === 'a' || value[i] === 'e' || value[i] === 'i' || value[i] === 'i' || value[i] === 'u') {
            vc++;
        }
    }
    return vc
}

let numberOfVowelss = returnVowelsFromStirng("Akshat");
console.log("Using normal functions:", numberOfVowelss);


let numberOfVowelss1 = vowelCountUsingArrow("Akshat");
console.log("Using arrow functions:", numberOfVowelss1);



function countVowels(value) {
    let cnt = 0;
    for (let x of value) {
        if (x === 'A' || x === 'E' || x === 'I' || x === 'O' || x === 'U' || x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'o')
            cnt += 1;
    }
    console.log(cnt);
}

countVowels("ApnaCollage")




console.log("****************************----functions for-each method------>CP3x");

// what is method
// for each is a method

// function is a thing which can be used with anyhting 
// method is a function but it's associated with the datastructured; bind together forever
// but on the other hand method is the thing that is for sure100 % associated with any of the dataType 
// for each is associate with arrays only for each can't be used with anything else, this is the reason for each is a method

// function cna be passed as a parameter in the function paramater

function myFunc(abc){
    return abc;
}

function abc(){
    console.log("Hello");
}


// a callback funciton is a function that is passed as an argument to another function



let arr = [1,2,3,4,5];
arr.forEach(function printValue(val){ //each value at each index, one at a time from the foreach loop
    console.log(val);
})

console.log("****************************----functions for-each method------>CP4x");



let arr1 = ["pune","delhi","mumbai"];
arr1.forEach((val) =>{ //each value at each index, one at a time from the foreach loop
    console.log(val.toUpperCase());
});



let arr2 = ["pune","delhi","mumbai"];
arr2.forEach((val, idx, arr2) =>{ //3 params index and the array itself but are optionals
    console.log(val.toUpperCase(), idx, arr2);
});




// higher order function/methods
        // for each is a higher order function
        // users the another function as a as paramaeter or returns a fucntion as a return vlaue as their output



let int = [1,2,3,4,5,6,6,7,8,9,10];

let calcSq = (element)=>{
    console.log(`square of ${element} is ${element**2}`);
}
int.forEach(calcSq);



// map method
// create a new array with the results of some operations. the value its callback returns are used to form a new array

