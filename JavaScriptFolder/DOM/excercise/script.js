let variable = document.getElementById("h2Heading");


variable.innerText = variable.innerText + " Hello World! ";
variable.innerHTML = variable.innerHTML + "<H1> AnonymousAkshat</H1>"






let divVar = document.getElementsByClassName("boxDiv");
let random = []
for (let i = 0; i < divVar.length; i++) {
    random[i] = "innder Text -----------------------------------------------"+divVar[i].innerText+"-----------------------------------------------" + Math.random() * 1000;
}
for (let i = 0; i < divVar.length; i++) {
    divVar[i].innerText = "Good Moring user, " + random[i];
}


alert("something")

let divs = document.querySelectorAll(".boxDiv");

let idx = 1;
for(div of divs){
    div.innerText = div.innerText+`Something random in the text with ${idx}`;
    idx++;
}