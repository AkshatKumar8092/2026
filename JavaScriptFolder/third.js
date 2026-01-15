console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");
console.log("Hello World!");

console.log("****************************_--------->CP0x");
// or

for(let i=0; i<=10; i++){
    console.log("Hello World! using ForLoop", i);
}

console.log("forLoop Ended!");

let j = 0;
while(j<10){
    console.log("Hello World! using WhileLoop", j);
    j++;
}

console.log("whileLoop Ended!");

let k = 0;
do{
    console.log("Hello World! using doWhileLoop", k);
    k++;
}while(k<10);

console.log("doWhileLoop Ended!");


console.log("****************************_--------->CP1x");

// pring sum of first 5 number

let number = 5;
let ans = 0;
for(let i= 1; i<=number; i++){
    ans+=i;
}
console.log("Answer is ", ans);

let ans2 = 0;
let cnt= 1;
while(cnt<=number){
    ans2+=cnt;
    cnt++;
}
console.log("ans2 is ", ans2);

console.log("****************************_--------->CP2x");



// for of loop
// for while, do-while are genaral loop



// special types of loop
// for-of --> used for arrays and strings;
// for-in --> used for objects (devs. defined datatype, projoClass as java);


let s = "JavaScript";
let size = 0;
for(let val of s){ //iterator -> charaters will go one by one
    console.log(val);
    size++;
}
console.log("size = ", size);





console.log("****************************_--------->CP4x");

let student= {
    name: "Akshat",
    qalification: "B-Tech",
    currentLocation: "Banglore",
    homeTown: "Bokaro",
    age: 25,
    knowsDriving: true,
}

for(let i in student){ // -->reutrn the keys of the object
    // console.log(i);
    console.log("map is: ", i, student[i]);

}


console.log("****************************_--------->CP5x");

console.log("print even from 1 to 100");
for(let i = 0; i<100; i++){
    if(i%2!==0){
        console.log("Even Found", i);
    }
}



console.log("****************************_--------->CP6x-----Game");

let randomNumber = 55;
let userGuess;

let run = false;
if(run){
    userGuess = prompt("Enter a number form 1 - 100");
}
while(randomNumber !== userGuess && run){
    // if(userGuess !== randomNumber){
    //     alert("onely enter a numaric number, you have enterd a ", typeof(userGuess));
    //     userGuess = prompt("Enter a number form 1 - 100");
    // }
    if(userGuess === "exit"){
        alert("Thanks For Playing");
        break;
    }
    if(userGuess == randomNumber){
        alert("Thanks For Playing");
        break;
    }
    else if(randomNumber>userGuess){
        alert("random Number is Grator than ", userGuess);
        userGuess = prompt("Enter a number form 1 - 100");
    }
    else if(randomNumber< userGuess){
        alert("random Number is less than ", userGuess)
        userGuess = prompt("Enter a number form 1 - 100");
    }
    else{
        alert("Give Up dude, atleast give a numaric number!")
        console.log("Give Up");
        userGuess = prompt("Enter a number form 1 - 100");
    }
    
}



console.log("****************************_---STRINGS and it's build in mehtods------>CP7x");

let str = "SomeStirng";
console.log(str);

let str2 = 'someThingInSingleQuotes';
console.log(str2);


console.log(str2.length, "Len of the str2");

// string is somehwat of a Object, it contains some method to perfom the operations/compuions in a string


for(let i =0; i<str.length; i++){
    console.log("index = ",i, "is ",str[i]);
}



// template literals
let scecialStirng = `this is a template literal`;
console.log(typeof(scecialStirng))


let obj = {
    item: "Pen",
    price: 10
};

console.group("The cost of ", obj.item, "is ", obj.price, "Rs");



// entire thing for the template literal will be trated as a big stirng 
let output = `The cost of ${obj.item} is ${obj.price}Rs`;
console.log(output);


let ss = `this is a template literal and any expression cna be written in {} ${1+2+3+4+5}`;
console.log(ss);



console.log("****************************_---STRINGS and escapeSequence------>CP8x");


let var1 = `this is a stirng with -> \n now it's a next line`;
console.log(var1);



let var2 = `this is a stirng with -> \t now it's a tab line`;
console.log(var2);
console.log(`the len of ${var2} is ${var2.length} and the escape charater is count as 1 in the count`)



// functions and methods
// kch bhi kaam hme kar k dena


let var3 = "Akshat Kumar | @anonymous_akshat";
let upperCaseString = var3.toUpperCase();
console.log(`this is the upper case for the ip string ${var3} and the upper case is ${upperCaseString}`);




let var4 = "Akshat Kumar | @anonymous_akshat";
let lowerCaseString = var4.toLowerCase();
console.log(`this is the lower case for the ip string ${var4} and the lower case is ${upperCaseString}`);


// string are immetuable in JS
// abc to ABC means new string



let var5 = "     Akshat Kumar | @anonymous_akshat.     ";
let trimmedStirng = var5.toLowerCase();
console.log(`this is the ip stirng ${var5} and the trimmed case is ${trimmedStirng}`);


let var6 = "Akshat Kumar | Shubham Kumar";
let slicedValue = var6.slice(0, 6); //start to end-1 
console.log(slicedValue)

let slicedValue2 = var6.slice(3); //start to end-1 
console.log(slicedValue2)

let string1 = "Akshat";
let string2 = "Kumar";

console.log("****************************_---STRINGS and Stirng Methods------>CP9x");

let finalStirng= string1.concat(string2);
console.log(finalStirng);




let StringValue = "ABCAAAAA";
let finalStirngAns = StringValue.replace("A", "123")
console.log(finalStirngAns)

// replace only with the first occurance


let StringValue1 = "ABCAAAAA";
let finalStirngAns1 = StringValue1.replaceAll("A", "123")
console.log(finalStirngAns1)



let sss = "I Love Js";
console.log(sss.charAt(3));



let sss1 = "I Love Js";
sss1[0] = "T";
console.log(`This will not work since strings are immutable in nature in js ${sss1}\nBut below will wrok because replace gives the new stirng, existing string will not get modified in the memory,\n a new instance will be creaated witht the updated value`);


let answerForReplate = sss1.replace("I", "S");
console.log(`not the answerForReplate will be a new stirng in the memory as ${answerForReplate} \n but the old stirng sss1 ${sss1} will not get changed in the memory`);





console.log("****************************_---Third Exc 1------>CP10x");


let userName;

let run1 = false;
if(run1){
    userName = prompt("Enter a number form 1 - 100");
    console.log(`Usig Tempalte Literal : your IG user name will become *** @${userName.toLowerCase()}${userName.length}`)
    // without using template literals
    let nameInLowerCase = userName.toLowerCase();
    let nameLength = userName.length;
    let nameWithAt = "@".concat(nameInLowerCase);
    let finalAns = nameWithAt+nameLength;
    console.log(`Without string literal your IG user name will become *** ${finalAns}`);
}



console.log("End of Vide 2")