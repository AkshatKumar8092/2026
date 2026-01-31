/**
 * 
 * fetch API:
 * the fetch api provides an interface for fetching(sending or recievning) resource
 * 
 * it uses Requies and response objects
 * 
 * the fetch() mehtod is used to fetch a resource (data.)
 * 
 * 
 * let prom = fetch(url, [options]);
 * 
 * API: Applicaiton programming interface
 * 
 */


const URL = "https://meowfacts.herokuapp.com/";


let prom = fetch(URL, []);

console.log(prom)


const factPara = document.querySelector('#facts');
const btnc = document.querySelector("#btn");




const facts1 = async() =>{
    console.log("Getting Data ....")
    let response = await fetch(URL);
    console.log(response); //JSON format
    // console.log(); //JSON format


    let data = await response.json();
    // console.log(data);
    factPara.innerText = data.data[0];
}




// function getFacts(){
//     fetch(URL).then((res)=>{
//         return res.json();
//     }).then((data)=>{
//         console.log(data);
//         factPara.innerText = data.data[0];
//     })
// }

btnc.addEventListener("click", facts1);
// btnc.addEventListener("click", getFacts);
/**
 * 
 * Understading terms:
 * AJAX: is asynchronouse JS and XML
 * JSON :if a JS object notation
 * json() method: returns a second promise that resolves with the result of parsing the response body text as json
 *       (Input if JSON output if JS object)
 *
 * 


Request and respone
HTTP verbs
response status code:
    HTTP response headers also contains detials about the response such as content type, HTTP, 
 */

