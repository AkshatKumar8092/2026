function asyncFunc1(){
    return new Promise((resolve, error)=>{
        setTimeout(()=>{
            console.log("Data1");
            resolve("Success");
        }, 4000);
    })
}



function asyncFunc2(){
    return new Promise((resolve, error)=>{
        setTimeout(()=>{
            console.log("Data2");
            resolve("Success");
        }, 4000);
    })
}






console.log("fetching Data 1");
asyncFunc1().then((res)=>{
    console.log("Result is ", res)
    console.log("Fetching data 2");
    asyncFunc2().then(()=>{
        console.log("got data 2");
    })
})






// let p2 = asyncFunc2();


// console.log("fetching Data 2")
// p2.then((res)=>{
//     console.log("Result is ", res)
// })