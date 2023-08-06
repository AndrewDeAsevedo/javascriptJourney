// class = a blueprint for creating objects
//          define what properties and methods
//          they have and use a constructor for unique properoties

class player{
    score = 0;

    pause(){
        console.log("You paused the game");
    }
    exit(){
        console.log("You exited the game");
    }
}

const play1 = new player();