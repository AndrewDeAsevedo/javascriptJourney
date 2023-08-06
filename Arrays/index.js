let fruits = ["apples", "orange", "banana"];


//change the element
//fruits[0] = "cocounut";

fruits.push("lemon");    //add elements
fruits.pop();            //remove last element
fruits.unshift("mango"); // add element to beginning
fruits.shift();          // remove elements from beginning

let length = fruits.length;
let index = fruits.indexOf("banana");

console.log(index);