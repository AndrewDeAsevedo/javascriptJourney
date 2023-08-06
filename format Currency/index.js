//toLocaleString()= returns a string with a language 
//                  sensitive representation of the number

let myNum = .1;

//myNum = myNum.toLocaleString("en-US"); //US English
//myNum = myNum.toLocaleString("hi-IN"); //Hindi
//myNum = myNum.toLocaleString("de-DE") //standard German

//myNum = myNum.toLocaleString("en-US", {style: "currency", currency: "USD"});

myNum = myNum.toLocaleString(undefined, {style: "percent"});

console.log(myNum);