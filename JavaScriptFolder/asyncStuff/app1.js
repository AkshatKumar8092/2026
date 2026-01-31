

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("Data is ", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 1000);
};





// function getData1(dataId, getNextData1) {
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//                 console.log("Data is ", dataId);
//                 resolve("Success");
//                 // reject("some Error")
//                 if (getNextData1) {
//                     getNextData1();
//                 }
//             }, 2000);
//     })
// };


// getData(100);
// getData(200);
// getData(300);


/**
 * callBack Hell:
 * nested callbacks stacked below one onther forming a myramid structure
 * pyramid of doom
 * 
 * this style of programming becomes difficult to understand and manage
 * 
 * 
 * 
 * to overcome this problem there is a concept of promises.
 * 
 * 
 * PRMISES:
 *  promise is for eventual completion of task, it is an object in JS
 * it is a solution to callback hell
 * 
 * 
 * resolve and reject are callbacks provided by js
 * 
 * it has 3 state:
    * pending
    * fullfilled (resolved)
    * rejected
 * 
 * 
 * generally we will not create a promice, will only reieve the prmise
 * 
 * a JS promise object can be :
 * Pending: The result is undefined
 * resolved: the result is a value (fullFilled)                         Resolve(result)
 * Rejectd: the result is an error object                               Resolve(result)
 * 
 * promise has state pending, fullfilled and some result result for resolve and error for reject!
 * 
 * .then() and .catch()
 * 
 * promice.then((result)=>{})
 * primice.catch((error)=>{})
 * 
 * 
 */





getData(1, () => {
    console.log("Getting data 2");

    getData(2, () => {
        console.log("Getting data 3");
        getData(3, () => {
            console.log("Getting data 4");
            getData(4)
        });
    });
    
});

console.log("------------------------CP1X");


let prom = new Promise((resolve, reject)=>{
    console.log("I am a promise");
    // resolve("Success");
    // reject("Some Error");
})


const getPromise = () =>{
    return new Promise((res, error)=>{
        console.log("I am a promise");
        // res("success");
        error("success");
    })
}


let prome = getPromise();

prome.then(()=>{
    console.log("Promise FullFilled!");
})


prome.catch(()=>{
    console.log("Rejected")
})



/**
 * 
 * PROMISE CHAINING:
 *  it's a concept
 *       
 * 
 * 
 * 
 */