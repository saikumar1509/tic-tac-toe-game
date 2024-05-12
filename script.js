let boxes=document.querySelectorAll(".box");
let resetButton=document.querySelector("#resetbutton");
let newGame=document.querySelector("#new-game");
let winnerMessage=document.querySelector(".winner-message");
let message=document.querySelector("#msg");

let isX=true;
let winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        console.log("bx is clicked");
        if(isX){
            box.innerText="X";
            isX=false;

        }
        else{
            box.innerText="O";
            isX="true";
        }
        box.disabled=true;
        checkWinner();
    });
});

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const showWinner=(winner)=>{
    message.innerText=`The matched is finished and the winner is ${winner}`;
    winnerMessage.classList.remove("hide");
    disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log(`winner ${pos1}`);
                showWinner(pos1);
            }
        }
    }
};

const resetGame=()=>{
    isX=true;
    enableBoxes();
    winnerMessage.classList.add("hide");
}

resetButton.addEventListener("click",resetGame);
newGame.addEventListener("click",resetGame);