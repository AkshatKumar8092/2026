/*
increare the readablity that's why we will use the seperate file for JS
Modularity: since HTML is in .html, css in .css

browser cashing

*/

console.log("Better wot write in another file rather than writting the same thing in the HTML page");


console.log("Hello");

window.console.log("Hello from window.console.log");


// window.alert("helow")



/*
what is a DOM:
when a webpage is loaded the browser creates a document object model DOM of the page;




window object is created by the brwos 
inside that window obejct there is a document object that contaitns entire information about the HTML part for whihc the page is written

simple go to insepct>console
and hit window then you can see the documnt of that window, this will give the good idea about it


console.log means print an object as an element,
console.dir means print the properties and the methods of that special object
like console.dir(window.document);

dynamic changes, dynamic manulapition we use DOM

when the script is added in the Heead that's why windowDocument will be null beacuse till that time body is not loaded so that we are not getting body insed we got null
*/

console.log(document.head);




// DOM manupulation


let value = document.getElementById("heading");
console.dir(value);

let headingsClass = document.getElementsByClassName("headingP");
console.log(headingsClass);

document.get

let button = document.getElementById("btnId")
console.dir(button);

let paragrap = document.getElementsByTagName("P");
console.dir(paragrap)



let elemetns = document.querySelector("p");
console.dir(elemetns);


let allElements = document.querySelectorAll("P");
console.dir(allElements);



let elemetns1 = document.querySelector(".headingP");
console.dir(elemetns1);



let elemetns2 = document.querySelectorAll("#head2");
console.dir(elemetns2);

console.log("------------------------------------------------CP1x");


/*
DOM Manipulation: 
    tagName:  returns tag for the elemt nodes
    inner text: returns the text content of the element and all it's children
    innerHTML: return the plain text or HTML contents in the element
    textContent: returns textua; content even for hidden elements




    tree like structure same as graph termoloigies

    and domTree is also being 
*/


let firstElement = document.getElementById("heading")
console.dir(`tagName ${firstElement.tagName}`);


console.dir(`innerText ${firstElement.innerText}`);

console.dir(`innerHTML ${firstElement.innerHTML}`);


console.dir(`textContent ${firstElement.textContent}`);





console.dir(document.body.firstChild.lastChild);

