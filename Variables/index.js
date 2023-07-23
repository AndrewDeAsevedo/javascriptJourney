/*
three types of variable, var, let and const
*/

let age;
age = 21; //numbers
//let age = 21;
age = age + 1;
//age += 1;

let firstName ="Bro"; //strings
let student = true; //booleans

console.log("these are my stats cuz", age, firstName, student);


if (student == true){
    age += 1;
    student = false;
}
document.getElementById("p1").innerHTML = "Hello, these are my stats:" +" "+ age +" "+ firstName+" " + student;
 