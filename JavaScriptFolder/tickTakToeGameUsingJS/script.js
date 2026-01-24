let boxex = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");


let newGameBtn = document.querySelector("#newGame");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

/*
alternate turns



*/




let turnO = false; // player X and player O 




const resetGame = () =>{
    turnO = false;
    enableBoxes();
    msgcontainer.classList.add("hide")
}




let oneDArr = ["Apple", "Banana", "Lichi"];
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];






boxex.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was Clicked");
        if (turnO) {
            //player o
            box.innerText = "X";
            turnO = false;
        }
        else {
            //player X
            box.innerText = "O";
            turnO = true;
        }
        box.disabled = true;



        chekcWinner();

    });
});


const chekcWinner = () => {
    for (let pattern of winPatterns) {


        // console.log(pattern[0],pattern[1],pattern[2]);


        // // console.log(boxex[pattern[0]],boxex[pattern[1]],boxex[pattern[2]]);


        // console.log(
        //     boxex[pattern[0].innerText],
        //     boxex[pattern[1].innerText],
        //     boxex[pattern[2].innerText]
        // );

        let pos1Val = boxex[pattern[0]].innerText;
        let pos2Val = boxex[pattern[1]].innerText;
        let pos3Val = boxex[pattern[2]].innerText;


        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // (turnO)?console.log("Winner is O"):console.log("Winner is X");
                console.log(`winner is ${pos1Val}`);


                
                showWinner(pos1Val);
            }
        }

    }

}


const showWinner =(winner) =>{
    msg.innerText = `Congrats, Winner is ${winner}`;
    msgcontainer.classList.remove("hide")
    disableBoxes();
};


const disableBoxes = () =>{
    for(let b of boxex){
        b.disabled= true;
    }
};

const enableBoxes = () =>{
    for(let b of boxex){
        b.disabled= false;
        b.innerText= "";
    }
};



newGameBtn.addEventListener("click", resetGame);

resetBtn.addEventListener("click", resetGame);