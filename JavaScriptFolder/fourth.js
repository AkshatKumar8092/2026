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


console.log("****************************----Arrays using loops excercis------>CP5x");


// find the average marks of the studen Marks arrays

let marksArrayEx1 = [ 2,35,76,23,98,66,88,76];
let sum1 = 0
let sum2 = 0
for(let markOfAStudent in marksArrayEx1){
    sum1+=parseInt(markOfAStudent);
}

// for in loops makes the iterables into stirng so parse int is requred to conver the marks form stirng to int

for(let markOfAStudent of marksArrayEx1){
    sum2+=markOfAStudent;
}


console.log(`total sum of marks array is ${sum1}`);
console.log(`Average of the marksArray is ${sum1/marksArrayEx1.length}`);



console.log(`total sum of marks array is ${sum2}`);
console.log(`Average of the marksArray is ${sum2/marksArrayEx1.length}`);




// reduce the 10% ofr the current price
let itemPrice = [250, 645, 300, 900, 50];

for(let i=0; i<itemPrice.length; i++){
    let currentPrice = itemPrice[i];
    let tenPecentOff = currentPrice*0.1;
    itemPrice[i] = itemPrice[i] -tenPecentOff;

    console.log(`current price of the item = ${currentPrice} and after the discount of 10% the updated price is ${itemPrice[i]}`) ;

}

console.log(itemPrice);



console.log("****************************----Arrays and it's method------>CP5x");


let foodItems = [2,4,5,6,3,7,9,10];
foodItems.push(20);
console.log(` array.push will add the eleemt into the end of the arrays ${foodItems}`);
console.log(foodItems);


foodItems.push(210,213,2413,432,5,246,34,634,63);
console.log(foodItems);



// pop detlees the last item;

let deletedItem = foodItems.pop();
console.log(`deleted item is ${deletedItem}`)
console.log(foodItems);

console.log(foodItems.toString());

console.log(typeof(foodItems.toString()));



let marvel = ["Thor", "spiderMan", "IronMan"];
let dc =["superman", "Batman"];
let indianHeros = ["krish", "Shaktiman"];

let hearosInBoth = marvel.concat(dc, indianHeros);
console.log(hearosInBoth);


marvel.unshift("Akshat");
console.log(marvel);
console.log("****************************----Arrays and it's method------>CP6x");

let deletedHerosFromMarvel = marvel.shift();
condition1.length("deleted", deletedHerosFromMarvel);