//Template literals = delimited with (`)
//                    instead of double or single quotes
//                    allows embedded variables and expressions

let userName = "Bro";
let items = 3;
let total = 75;

//console.log("Hello ", userName, ", you have ", items, " in your cart. Your total is $", total );
//with ` we can isntead write
console.log(`Hello ${userName}, you have ${items} in your cart. Your total is $${total}`);
