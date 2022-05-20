var gameOptions = ["Rock", "Paper", "Scissors"];
var rivalOption = gameOptions[Math.floor(Math.random()*gameOptions.length)];

var userOption = prompt("Rock, paper or scissors?");
document.write("<img src='img/rps.png'>");
document.write("<p>My option was "+rivalOption+"</p>");

if(userOption == "Paper" && rivalOption == "Paper" || userOption == "Rock" && rivalOption == "Rock" || userOption == "Scissors" && rivalOption == "Scissors"){
   document.write("<p>Then, it's a draw!</p>");
}

else if (userOption == "Paper" && rivalOption == "Rock" || userOption == "Rock" && rivalOption == "Scissors" || userOption == "Scissors" && rivalOption == "Paper"){
   document.write("<p>Then, you win!</p>");
}
         
else if (userOption == "Paper" && rivalOption == "Scissors" || userOption == "Rock" && rivalOption == "Paper" || userOption == "Scissors" && rivalOption == "Rock"){
   document.write("<p>Then, you lose!</p>");
}

else{
    document.write("<p>Please, write a right option!</p>");
}


