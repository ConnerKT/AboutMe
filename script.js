// While true, ask name, if not break
// console.log("Starting while statement")
let username;
while (true) {
    username = prompt ("What is your name?");


    if (username === "") {
        alert("Name must be inputed!");
    }else {
    alert ("Hello " + username + "!");
        break;
    }
}

let x = 0;




function clickme(){
    "use strict";
    let origin = prompt("I grew up in Memphis!");
    let originlow = origin.toLowerCase();
    if (originlow === "y" || originlow === "yes" ){
        alert("Correct!");
        x++;
 
    }else {
        alert("Incorrect.. :(");
    }
    let age = prompt("I'm 19 years old!");
    let agelow = age.toLowerCase();
    if (agelow === "n" || agelow === "no" ){
        alert("Correct!");
        x++;
        
    }else {
        alert("Incorrect.. :(");
  
    }
    let experience = prompt("I started programming as a kid!");
    let experiencelow = experience.toLowerCase();
    if (experiencelow === "n" || experiencelow === "no" ){
        alert("Correct!");
        x++;
        
    }else {
        alert("Incorrect.. :(");
    }
    let goal = prompt("Was money one of my goals?");
    let goallow = goal.toLowerCase();
    if (goallow === "n" || goallow === "no"){
        alert("Correct!");
        x++;
      
    }else {
        alert("Incorrect.. :(");
    }
    let job = prompt("Did I work at a Tech firm?");
    let joblow = job.toLowerCase();
    if (joblow === "n" || joblow === "no" ){
        alert("Correct!");
        x++;
       
    }else {
        alert("Incorrect.. :(");
 
    }

    alert("Congrats" + " " + username + " " + "you made a" + " "+ x + " " + "out of 5!");

    let randomnumber=Math.floor(Math.random() * 101);
    let Tries = 7;
    let i;
    
    for (i = 0; i < Tries; i++){
        let guess=prompt("Welcome to my Guessing Game! I want you to guess a random number in 7 tries, if you get it right, you win! (1-100");
       
        if (guess == randomnumber){
            alert ("You got it, nice job!");
            break;
        }else if (guess < randomnumber) {
            alert("Your guess was lower than the number...");
        }else if (guess > randomnumber){
            alert("Your guess was higher than the number...");
        }
    }

    if (i == Tries){
        alert("You lost :(. The random number was " + randomnumber + ".");
    }
    

    let complist = ["facebook","apple","netflix","amazon","google"];
    let userans = [];
    for (let i = 0; i < 6; i++){
        userans.push(prompt("Guess one of the FAANG companies. (6 Guesses)"));
    }

    let correct = false;

    for (let i = 0; i < userans.length; i++){
        if (userans[i] == null ) 
            alert("Enter a company.")
            break;
        for (let j=0; j < complist.length; j++){
            if (userans[i] == complist[j]){
                correct = true;
                break;
            }else if (userans[i] != complist[j]){
                correct = false;
            }
        }
       
        
    if (correct) {
        alert(userans[1] + " was correct!");
    } else {
        alert(userans[i] + " was not correct");
    
    }
    
    
}

}