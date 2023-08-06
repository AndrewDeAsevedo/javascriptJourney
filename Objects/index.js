// object = A group of properties and methods
//properties  = what an object has
// methods = what an object can do
// use . to access properties/methods
// do not forget commas

const car = {
    model:"Mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log("You drive the car");
    },
    brake : function(){
        console.log("You step on the brakes")
    }
}

//displays car model
console.log(car.model);
console.log(car.color);
console.log(car.year);

//how to invoke the methods you made
car.drive();
car.brake();