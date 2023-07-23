
document.getElementById("myButton").onclick = function(){

    
   /* if(document.getElementById("myCheckBox").checked == true){
        console.log("You are subscribed!");
    }
    else {
        console.log("You are not subscribed!")
    }
    */
   const myCheckBox = document.getElementById("myCheckBox");
   const visa = document.getElementById("visa");
   const mastercard = document.getElementById("mastercard");
   const paypal = document.getElementById("paypal");



   if (myCheckBox.checked){
    console.log("You are subscribed!");
    } 
    else if(myCheckBox.checked){
        console.log("You are not subscribed!");
    }

    if (visa.checked){
        console.log("You are paying with a visa")
    } else if (mastercard.checked){
        console.log("You are paying with a mastercard");
    } else if (paypal.checked) {
        console.log("You are paying with paypal");
    } else {
        console.log("You must select a payment type");
    }
}

