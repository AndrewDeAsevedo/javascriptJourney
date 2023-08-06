// callback = a function passed as an argument 
//             to another function

sum(2,3, displayConsole)

function sum(x,y, callBack){
    let result = x + y;
    callBack(result);
}

function displayConsole(output){
    console.log(output);
}
function displayDom(output){
    document.getElementById("myLabel").innerHTML = output;    
}