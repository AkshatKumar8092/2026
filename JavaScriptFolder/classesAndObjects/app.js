/*
Prototypes in JS:
    A JS object is an entity having state and behavior (properties  and method)
    every JS object ahve a special property claled prototype

    an obejct comes directly inside a object, ships via JS

    we can set prototype usin __proto__

    prototype already exists with some genral property and then once the new obejcts gets created and then that will be added into the user defined obejct



    NOTE: If obejct and prototype have same method, obejcts method will be used.

*/



// object creation type 1, direct object creation
const student = {
    fullname: "Akshat Kumar",
    marker: 95.3,

    printMarks: function () {
        console.log(`marks-> ${this.marker}`);
    }
}



let arr = ["apple", "mango"];
console.log(typeof (arr));







const emp = {
    calcTax1() {
        console.log("tax is 10%");
    },
    calcTax2: function () {
        console.log("tax is 10%, json added");
    }
}
const employee = {
    calcTax() {
        console.log("tax is 10%");
    },
}


const karanArjun = {
    salary: 100,
}

const karanArjun2 = {
    salary: 200,
}

const karanArjun3 = {
    salary: 300,
}

const karanArjun4 = {
    salary: 400,
}

const karanArjun5 = {
    salary: 500,
    calcTax() {
        console.log("Tax is 20%")
    }
}


karanArjun.__proto__ = employee;
karanArjun2.__proto__ = employee;
karanArjun3.__proto__ = employee;
karanArjun4.__proto__ = employee;
karanArjun5.__proto__ = employee;




/*
Class is JS:
    Class is a program-code template for creating obejct
    those obejctts will have some state (variales) & some vehaviour (function) inside it.


    class is the blue print of the object


class myClass {

    constructor() {

    }

    myMethod() {

    }
}



constructor method is :
    automaticlly invoked by new
    initilizes obejct


Inheritance: inheritance is passing down the properties and method from parent class to child class
it's not only for JS but for other programming languages as well


class Parent{
}

class Child extends Parent{
}


if the child and the parent have same mehtod, child's method will be used; Method overriding

*/




class toyotaCar{


    constructor(brand){
        console.log("creating new object", brand);
        this.brand = brand;
    }

    start(){
        console.log("Start");
    }

    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }

}

// let car1 = new toyotaCar("somethig");
// let car2 = new toyotaCar();
// let car3 = new toyotaCar();






// car2.setBrand("Nokia");
// car3.setBrand("Samsung");






class ParentClass{
    constructor(){
        this.species = "Homosapiens";
    }
    hello(){
        console.log("Hello");
    }
    eat(){
        console.log("Parent is eating!");
    }

    sleep() {
        console.log("Parent is sleeping");
    }

    work() {
        console.log("Does nothing");
    }
}


class Engineer extends ParentClass{
    work(){
        console.log("Working in IT DEPt");
    }


}

class Doctor extends ParentClass{
    work(){
        console.log("Treats the patient");
    }


}

class ChildClass extends ParentClass{
    // type 1
    // hello(){
    //     console.assertlog("Hello");
    // }


}


let c1 = new ChildClass();
c1.hello();



let e1 = new Engineer();
e1.eat();
e1.work(); //this will invoke the child class function not the parent method this is know as method overriding




let p1 = new ParentClass();
console.log(p1.species);


let e2 = new Engineer();
console.log(e2.species);


/**
 * Super keyword
 * the super keyword is used to call the constructor of it's parent class to access the parent's properties and methods;
 *      super(arhs)// calls parents constructors
 *  super.parentMethod(args);
 * 
 * if the child class has a constructer then first thing is to use the super keyword to invoke the parent class constructor;
 * before using this keyborad called the super contructor otherwise there will be error in the console;
 */


class upperClass{
    constructor(){
        console.log("Entered Parent constructor");
        this.species = "Homosapiens";
    }
    hello(){
        console.log("Hello");
    }


}

class lowerClasss extends upperClass{

    constructor(branch){
        console.log("Entered clid constructor");
        super()
        console.log("exit child");
        this.branch = branch;
    }
    bye(){
        console.log("THis is lower class");
    }
}



let chemEng = new lowerClasss("Chemical");






class upperClass1{
    constructor(name){
        console.log("Entered Parent constructor");
        this.name = name;
    }
    hello(){
        console.log("Hello from upper class");
    }


}

class lowerClasss1 extends upperClass1{

    constructor(branch){
        console.log("Entered clid constructor");
        super("Akshat");
        console.log("exit child");
        this.branch = branch;
    }
    bye(){
        super.hello(); // this will call the parent class's method
        console.log("THis is lower class");
    }
}


let obj1 = new  lowerClasss1("Computer Science");

obj1.bye();



let secretData = "Secret Information";

class clgUsers{
    constructor(name, email){
        console.log("This is constructor for Exc problems");
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log(`name of the student is ${this.name} and the eamil for that student is ${this.email}`);
        console.log(secretData);
    }
    

}



class clgAdmin extends clgUsers{

    constructor(name, email){
        super(name, email);

    }

    editData(newName, newEmail){
        // console.log("This is admin class and Admin can edit few things");
        secretData = "Some new Value";
    }


    
}



let student1 =new clgUsers("Akshat", "Akshat@gmail.com");
let student2 =new clgUsers("shubham", "shubham@gmail.com");
let student3 =new clgUsers("Devil", "Devil@gmail.com");


let teacher1 = new clgUsers("Dean", "dean@gmail.com");



let cu1 = new clgUsers("Akshat", "akshat@gmail.com");







let admin1 = new clgAdmin("admin", "Admin@Gmail.com");



/**
 * Error Handeling:
 *      there is a possiblitily that some code that we have written will not always work,
 * to avoide this un-necessory headace if you know that certain lines might throw some error, and if error comes in any line the below code written after the error line will never work,
 * to avoide this kind of situating we use try catch block ,keep the piece of code that you think is gonna be breaking ths code, keep that in the try, if some error comes write the handeling logic into the cathc block;
 * 
 */



let a = 5;
let b = 10;
console.log(`a=${a} and b=${b}`);
console.log(`a=${a} * b=${b} is ${a*b}`);
console.log(`a=${a} / b=${b} is ${a/b}`);
console.log(`a=${a} + b=${b} is ${a+b}`);
console.log(`a=${a} - b=${b} is ${a-b}`);

try{
    console.log(a+c);
} catch(err) {
    console.log(`the exact error is ${err}`);
}
console.log("This will not get executed becase c is not defined and from the error line nneothing will get exist, now it will work  becase the erro is getting handeld with try catch");