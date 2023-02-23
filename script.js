// While true, ask name, if not break
// console.log("Starting while statement")
let username;
while (true) {
let username = prompt ("What is your name?");


    if (username === "") {
        alert("Name must be inputed!");
    }else {
    alert ("Hello " + username + "!");
        break;
    }
}

let x = 0;


// console.log("Finishing while")

function clickme(){
    "use strict";
    let origin = prompt("I grew up in Memphis!");
    let originlow = origin.toLowerCase();
    if (originlow === "y" || originlow === "yes" ){
        alert("Correct!");
        x++;
        //console.log(x)
        // console.log("correct!")
    }else {
        alert("Incorrect.. :(");
    }
    let age = prompt("I'm 19 years old!");
    let agelow = age.toLowerCase();
    if (agelow === "n" || agelow === "no" ){
        alert("Correct!");
        x++;
        //console.log(x)
        // console.log("correct!")
    }else {
        alert("Incorrect.. :(");
    // console.log(agelow)
    }
    let experience = prompt("I started programming as a kid!");
    let experiencelow = experience.toLowerCase();
    if (experiencelow === "n" || experiencelow === "no" ){
        alert("Correct!");
        x++;
        //console.log(x)
        // console.log("correct!")
    }else {
        alert("Incorrect.. :(");
    }
    let goal = prompt("Was money one of my goals?");
    let goallow = goal.toLowerCase();
    if (goallow === "n" || goallow === "no"){
        alert("Correct!");
        x++;
        //console.log(x)
        // console.log("correct!")
    }else {
        alert("Incorrect.. :(");
    }
    let job = prompt("Did I work at a Tech firm?");
    let joblow = job.toLowerCase();
    if (joblow === "n" || joblow === "no" ){
        alert("Correct!");
        x++;
        //console.log(x)
        // console.log("correct!")
    }else {
        alert("Incorrect.. :(");
 
    }
    //console.log(x)
    //Its not the following for this alert function not working:
    //X variable, Function is being called, Function doesn't need to be recalled, The number goes up in console, the syntax is correct
    // username was the issue, not declared outside of while loop, so it didn't exist
    alert("Congrats" + " " + username + " " + "you made a" + " "+ x + " " + "out of 5!");

    let randomnumber=math.floor(math.random() * 101);

    
    for (tries in Range(4)){
        let guessing_game=prompt("Welcome to my Guessing Game! I want you to guess a random number in 4 tries, if you get it right, you win!");

        if (guessing_game > randomnumber)
            alert ("You are lower than the number...");
    }




}

