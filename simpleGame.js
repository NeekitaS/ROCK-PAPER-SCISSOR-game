
let userScore = 0;
let compScore = 0;

let body = document.querySelector("body");

const choices  = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userS = document.querySelector("#user-score");
const compS = document.querySelector("#comp-score");
const genCompChoice = () =>
    {
        const options = ["rock" , "paper" , "scissor"];
        const randIdx = Math.floor(Math.random()*3);
        return options[randIdx];

    }

const drawGame = (userChoice) =>
        {
            console.log("game was draw");
            msg.innerText = `game was draw!! both chooses ${userChoice} play again.`; 
            msg.style.backgroundColor = " rgb(21, 18, 18)";

        }
const showWinner = (userWin, userChoice, compChoice) =>
{
    if(userWin)
        {
            userScore++;
            userS.innerText = userScore;
           // console.log("you win");
            msg.innerText = `you win!! your ${userChoice} beats ${compChoice}`; 

            msg.style.backgroundColor = "Green";
       
        }
    else
    {
        compScore++;
        compS.innerText = compScore;
       // console.log("you lose");
        msg.innerText =  `you lose!! ${compChoice} beats your ${userChoice}`; 
        msg.style.backgroundColor = "Red";
       
    }


}

const playGame = (userChoice) =>
    {
        console.log("user choice = ",userChoice);
        //generate computer choice 
       const compChoice = genCompChoice();
       console.log("computer choice = ",compChoice);
       if(userChoice === compChoice)
        {
            drawGame(userChoice);

        }
        else 
        {
            let userWin = true;
            if(userChoice === "rock")
                {
                    // comp scissor or paper 
                    userWin = compChoice === "paper"? false : true;
                    
                }
                else if (userChoice === "paper")
                    {
                        // comp rock scissor
                        userWin = compChoice === "scissor"? false : true;

                    }
                else
                {
                    // comp rock paper 
                    userWin = compChoice === "rock"? false: true;
                }
            showWinner(userWin, userChoice, compChoice);

        }

    };

choices.forEach((choice) =>
{
    // console.log(choice);
    choice.addEventListener("click",() =>
    {
        const userChoice= choice.getAttribute("id");
        playGame(userChoice);

    })
})


