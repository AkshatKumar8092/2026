/**
 * Asyncy and await
 * async function always returns a promise.
 * 
 * 
 * await pauses the execution of it's sorrounding async function until the promise is setteled.
 * 
 * wait until the execution of async function used inside the async function
 */


async function hellow(){
    console.log("Hello");
}



async function getWeatherData(){
    await api();
    await api();
}


function api(){
    return new Promise((res, erro)=>{
        setTimeout(()=>{
            console.log("Weather Data");
            res(200);
        }, 2000);
    });
}


// await api()

/**
 * IIFE: Immediately invoked functioin expression
 * it is a funciton if called as soon as it is defined
 */