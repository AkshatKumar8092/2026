let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");


const userScoreP = document.querySelector("#user-score");
const compScoreP = document.querySelector("#comp-score");

const drawGame=()=>{
    //console.log("Game is draw!");
}


const showWinner= (userWin, userChoice, computerChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText= userScore;
        //console.log("user win!");
        msg.innerText = `You Win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        //console.log("Computer Wins");
        compScore++;
        compScoreP.innerText= compScore;
        msg.innerText = `Computer Win! Computer's choice is ${computerChoice} wins this ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playGame = (userChoice) =>{
    // //console.log(userChoice, " is the user choice");

    const computerChoice = generateComputerChoice();


    if(userChoice === computerChoice){
        drawGame();
        msg.innerText = "Game was Draw!";
        msg.style.backgroundColor = "blue";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // sissors or papper
            if(computerChoice=== "paper"){
                userWin = false;
            }
            else{
                userWin = true;
            }
        }else if(userChoice === "paper"){
            // rock, sissors
            userWin = computerChoice === "sissors"?false:true;
        }
        else{
            //rock, paper
            userWin = computerChoice === "rock"?false: true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }

    // generate the compueter chocice
}

const generateComputerChoice = () =>{
    let options = ["rock", "paper", "sissors"];
    // rock, paper, sissors-> will be gnerated;
    let computerIndex = Math.floor(Math.random()*3);
    //console.log("computer choice is ",options[computerIndex]);
    return options[computerIndex];

}


choices.forEach((choice)=>{
    // //console.log(choice)
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        //console.log("user choice was ", userChoice);
        playGame(userChoice);
    });
});