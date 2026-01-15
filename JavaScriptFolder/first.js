// alert("Hello World! Akshat Kumar");


fullName = "Akshat Kumar";
console.log(fullName);
console.log(typeof(fullName));

age = 24;
console.log(age);

price = 123.123;
console.log(price)

x = null;
console.log(x)

y= undefined;
console.log(y);


radius = 42;
console.log(radius);

tValue = true;
console.log(tValue);

fValue = false;
console.log(fValue);



// changing the value of the same variable 
// JS is dynamic language 
    // No need to mention the type of the varialbe, JS internally finds out the what type of data is getting stored

fullName = 22;
console.log(fullName);
console.log(typeof(fullName));

FullName = "Akshat";
console.log(fullName === FullName);



// full name = "Tony Stark"; -> error cause space in the variable name;

x_ = 10;
x$ = 10;
x123 = 10;

// 123asd = 10; -> not possible case starts with numric

// Reserved Keywords
// for = 120;
// console.log(xfor);





Console = "Akshat";
console.log(Console);



let myName = "AkshatKumar";
console.log(myName);


let totalPrice = 1000;
console.log(totalPrice);


// var -> not userd any more because, after ES6 in year 2015.
//              You can re-declayer  the variable once again, even the type for the variable
        // scope is full code of JS

var someVariable = "AkshatKumar"
var someVariable= 1223;
console.log(someVariable);



// LET -> variable can not be re-delayer
            // scope is only the block {}
let someValue = 23;
// let someValue = "adasd";





console.log("------------------------------------------------------------ checkpoint1")
// const -> define the constants

const xyz = 100;
// xyz = 20;

const piValue = 3.14;


console.log(xyz)


console.log("------------------------------------------------------------ checkpoint2")



let a;
console.log(a);

// const someThingValue;
// const declayer need some value compusoary
// console.log(someThingValue);

console.log("------------------------------------------------------------ checkpoint3")

{
    let abcd = 10;
}
// console.log(abcd)







console.log("------------------------------------------------------------ checkpoint4x")


// dataType-> Premetives : int float, sprign,bool, undefined, null, bigInt, symbol
//              NonPremetiveDataType: objects-> colletions of vlaues

let var1= 100;
console.log(typeof(var1));


let var2= BigInt("123");
let var3 = Symbol("7");

console.log(var2);
console.log(var3);


console.log("------------------------------------------------------------ checkpoint5x")
const student = {
    fullName: "Akshat Kumar",
    age: 20,
    cgpa: 8.2,
    isPass: true
};





console.log(student);
console.log(typeof(student));

console.log(student["fullName"]);

console.log(student["isPass"]);

console.log(student.age);


student["age"] = student["age"] + 1;


console.log(student.age)


student["fullName"] = "Shubham Kumar";


console.log(student.fullName)


// let can be updated with new value
// const variable can't be cahnged once the value/variable is defined
// but the thing is const of a object's keys can be change, entire object is not gonna change


console.log("------------------------------------------------------------ checkpoint5x video 1 over and ex1");


const product = {
    image: "SomeImage",
    productName: "Pen on Amazon",
    price: 100,
    dealOfTheDay: true,
    discount: 5,
    descriptionProduct: "lorem255",
    rating: 4.5
};

console.log(product);



const instaProvile ={
    pic: "LocationOfPicFromS3",
    currentPostCount: 195,
    currentFollowers: 31232113,
    currentFollowing: 13,
    userName:"anonymous_akshat",
    profileName: "Akshat Kumar",
    threadsLink: "ThreadsProfileUrl",
    bio: "Lorem123",
}

console.log(instaProvile);