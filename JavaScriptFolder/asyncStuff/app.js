console.log("It works!");

/**
 * Callbacks
 * callback hell
 * promises 
 * promises chaining
 * async await
 * 
 * async await>>promises chaining>>callback hell
 * asunc await is better than promic chainnign and promic channing is better than callback hell
 * Async programming in JS:
 *      
 * 
 * 
 * SYNC:
 *      Synchronous means the code runs in a perticulare sequence of instructions given in the pogram
 *      each instructions wait for tthe previous instructions to complete it's execution
 *      
 * ASYNC:
 *      Due to synchronous programming, sometimes imp. instructions get bloced due to some pprevious instructions, which causes delay in the UI.
 *      ASYNC code executions allows to execute next instructons immediately and doesn't block the flow
 * 
 * 
 */


console.log("1");
console.log("2");
console.log("3");

// above is called sync progrmaming
// each line is known as instruction


// till now whatever we did by watching the tutorials, all of that is a sync programming

// now some instructions can take time, 




function hello() {
    console.log("Hello! ---------------IGNORE1");
}



console.log("One");
console.log("Two");

setTimeout(hello, 4000) //timeout in miliSecond 2seconds = 2000 miliseconds


setTimeout(() => {
    console.log("Hello from arrow Function---------------IGNORE2")
}, 2000) //timeout in miliSecond 2seconds = 2000 miliseconds


console.log("Three");
console.log("Four");



// callBack
// a callback is a function passed as an argument to another function.

console.log("------------------------------CP1X");

function additiON(a, b) {
    console.log(a + b)
}

function calc(a, b, sumCallBack) {
    sumCallBack(a, b);
}

calc(1, 2, additiON)

calc(2, 3, (a, b) => {
    console.log(a + b);
});




const hello1 = () => {
    console.log("Hellow from const arrow function ---------------IGNORE3");
}


setTimeout(hello1, 300)

console.log("------------------------------CP2X");


/**
 * callback hell:
 *      callback hell: nested callback stacked below one another forming a pyramid structure. (pyramid of Doom);
 *      this style of progrmaming becomes difficult to understand and manage
 * 
 * 
 * nesting
 *      if(true){
 *          if(True && True && True){
 *              if(True === "Something"){
 *  
 *              }
 *          }         
 *      }
 * 
 * 
 * 
 * if this nesting goes into too much deeper than this is know as callback hell
 */



// below is the example of nesting

for (let i = 0; i < 5; i++) {
    let str = "";
    for (let j = 0; j < 5; j++) {
        str += j;
    }
    console.log(i, str);
}





/**
 * 
 */


function getData(dataId) {
    setTimeout(() => {
        console.log("Data is ", dataId);
    }, 2000);
}





// below is the nested async programming

function getDataNested(dataId) {
    setTimeout(() => {
        console.log("Data1 got  ---------------IGNORE4");
        setTimeout(() => {
            console.log("data2 got ---------------IGNORE5");
            setTimeout(() => {
                console.log("data 3 got ---------------IGNORE6")
            }, 2000);
        }, 2000);
    }, 2000);
}


getDataNested(100);