console.log("****************************----Arrays------>CP0x");

// arrays is a collection of items stored in linear manner
let hero1 = "hulk";
let hero2 = "ironMan";
let hero3 = "Captain Amrica";
let hero4 = "Krish";
let hero5 = "Wanda";
let hero6 = "Thanos";



let marks = {
    std1: 40,
    std2: 99,
    std3: 76
}


let heros = ["hulk", "ironMan", "Captain Amrica", "Krish BollyWood"];
console.log(`this is the array ${heros}`);

console.log(heros);

console.log(heros.length); //-> property 


console.log(`type of arrays is ${typeof(heros)} something similar to key value pair heros[Index] key value only`);


let marksArray = [32,34,34,43,5];

let info = [123,43,1.213, false, true, "Stirng", 'c']; //->possible but never used




console.log("****************************----Arrays and indices------>CP3x");

let marksArr2 = [312,312,43,312,431,4,131412,41,31,43];
console.log(` this is the value of markersArr2 at index 2 is ${marksArr2[2]}`);

console.log(` if index out of bound then the vlaue becoms ${marksArr2[233]}`);

marksArr2[0] = "AkshatKumar";

console.log(`this is not the udpated array ${marksArr2}`)
console.log(`same thing will not happen in stinrg because stinrgs are immutabe in nature in JS \n whereas arrays are mutable in nature taht's why we can change the value of the index`);





console.log("****************************----Arrays using loops------>CP4x");


for(let i= 0 ; i<marksArr2.length; i++){
    console.log(`The index is ${i} and the value at that index in the marksArr2 is ${marksArr2[i]}`);
}


for(let i of marksArr2){
    // mostly prefered
    console.log(`Works for-of ${i}`);
}


for(let i in marksArr2){
    console.log(`Works using for-in ${i}`);
}



