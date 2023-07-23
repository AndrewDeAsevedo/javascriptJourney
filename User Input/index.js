// Accepting user input

//Easy way with a window prompt

// let username = window.prompt("Whats your name?");
let username;

//difficult way, plus tweaking a bit of the HTML file
document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);

    //this line changes the label after input is given
    document.getElementById("myLabel").innerHTML = "Hello " + username;
}
