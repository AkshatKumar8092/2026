/*
--------->    comments
*/

//this is a single line comment
// Below line will be printing Hello World!
console.log("Hello World!")



/*
    this is 
    a multiple
    line comment
*/
console.log("------------------------------------------------CP1x");


/*
--------->    Operators in JS
*/

// arethmetic operators
// + - * / 

let a = 5;
let b = 2;
let c = a+b;
console.log("a+b=", c);

let d = a-b;
console.log("a-b=", d);

let f = a*b;
console.log("a*b=", f);

let g = a/b;
console.log("a/b=", g);

let h = a%b;
console.log("a%b=", h);

let i = a**b;
console.log("a**b=", i);

console.log(a);
let j = a++;
console.log(j);
console.log(a);


console.log(a);
let k = ++a;
console.log(k);
console.log(a);
console.log("************************************************************************************************")
console.log(b++);
console.log(++b);


console.log("------------------------------------------------CP3x");
a+=4; // a = a+4
console.log(a);



console.log("------------------------------------------------CP4x");


// == equal to 
// === equal to with  and type as well
// != not equal to
// !== not equal to alone with type
console.log(a==b);
console.log(a===b);
console.log(a!=b);
console.log(a!==b);

console.log(a>b);
console.log(a<b);
console.log(a<=b);
console.log(a>=b);




// && logical and
// contition 1 and 2 both are true

// || logical or
// any one of the condition true then true

let condition1 = a>b;
let condition2 = a==6;
console.log("Logical Operation ************************************************************************************************")
console.log(condition1 && condition2);

console.log(condition1 || condition2);


console.log("------------------------------------------------CP5x");
let age1 = 19;
if(age1 >= 18){
    console.log("you can vote!");
}else{
    console.log("You cannot vote!");
}


let mode = "Blue";
let color;
if(mode=="Dark"){
    color= "Black";
}else{
    color= "White";
}
console.log(color);


let num = 5;
if(num%2 == 0){
    console.log("Even");
}else{
    console.log("Odd");
}


let ageOfPerson = 26;
if(ageOfPerson >= 18 && ageOfPerson <65){
    console.log("Adult")
}else if (ageOfPerson >65){
    console.log("Old Uncle");
}else{
    console.log("Baby");
}

let voterAge = 22;
voterAge>18?console.log("able to vote"):console.log("not able to vode come again");
let ans = voterAge>=18?"adult":"not a adult";
console.log(ans);



console.log("------------------------------------------------CP5x");

alert("Some message for alert then promt");
let number = prompt("Give the input");
console.log(number);

if(number%5 === 0){
    console.log("Number is divisible by 5");
}
else{
    console.log("not numtiple of 5")
}


let studentMarks = prompt("Enter the markers of student! ");
if(studentMarks<=100 && studentMarks>=80){
    console.log("A");
}
else if(studentMarks<=79 && studentMarks>=60){
    console.log("B");
}
else if(studentMarks<=59 && studentMarks>=40){
    console.log("C");
}
else if(studentMarks<=39 && studentMarks>=33){
    console.log("D");
}
else {
    console.log("F");
}