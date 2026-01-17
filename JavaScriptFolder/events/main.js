/*
Event in JS 
the change in the state of an object is known as an event 
events are fired to notify code of intresting changes that may affect code execution



mouse events(click,doubleClick, etc),
keyboard events keypress keyup key donw
form events, submit, etc
print event and many more


inline even handeling it's kind of a property of the html

inline vs js file the priority is for JS file not for the inline JS


Event object
it is a special object that has details about the event
all events handlers have access tot hte event object's properties and method


event listners

ndoe.addEventListener(event, callback)
node.removeElementListener(event, callback)

NOTE: the callbase reference should be same to remove

*/


let bt1 = document.querySelector("#btn1");

bt1.onclick=() =>{
    console.log("bt1 was clickex");
    let a = 25; 
    a++;
    console.log(a);
}




bt1.onclick=(eventObj) =>{
    console.log("smae event for the same button so only the last even will be captured into the event");
    console.log(eventObj.type);
    console.log(eventObj.target);
    console.log(eventObj.type);
    console.log(eventObj.clientX);
    console.log(eventObj.clientY);
    
}

let div = document.querySelector("#box");

div.onmouseover=(event)=>{
    console.log("some txt");
    console.log(event.type);
    console.log(event.target);
    console.log(event.type);
    console.log(event.clientX);
    console.log(event.clientY);
}


bt1.addEventListener("click", (evnt)=>{
    console.log("this is differnet1");
    // console.log(evnt);

});
bt1.addEventListener("click", (evnt)=>{
    console.log("this is differnet2");
    // console.log(evnt);

});
bt1.addEventListener("click", (evnt)=>{
    console.log("this is differnet3");
    // console.log(evnt);

});
bt1.addEventListener("click", (evnt)=>{
    console.log("this is differnet4");
    // console.log(evnt);

});
bt1.addEventListener("click", (evnt)=>{
    console.log("this is differnet5");
    // console.log(evnt);

});



bt1.removeEventListener("click", (evnt)=>{
    console.log("this is differnet4");
    // console.log(evnt);

})




let modeBtn = document.querySelector("#mode");

let mode = "light-mode";

let body = document.querySelector("body");

modeBtn.addEventListener("click", ()=>{
    if(mode === "light-mode"){
        mode = "dark-mode";
        body.classList.add("dark");
        body.classList.remove("light");
        
    }
    else{
        mode = "light-mode"
        body.classList.add("light");
        body.classList.add("dark");
    }
    console.log("Mode change", mode);
})