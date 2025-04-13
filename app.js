let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn")
let newBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")

let turnO = true;

const winPattern = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
];

boxes.forEach((box) =>{
    box.addEventListener("click" , ()=>{
      if(turnO){
        box.innerText = "O"
        turnO = false ;
      } else{
        box.innerText = "X"
        turnO = true ;
      }
      box.disabled = true;
      checkWinner();
      boxcolor (box);
    });
});

const boxcolor = (box) => {
    if (box.innerText === "O") {
        box.classList.add("color");
    } else if (box.innerText === "X") {
        box.classList.add("color2");
    }
};

const resetgame = ()=>{
    let turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
 
};

const disableboxes = ()=>{
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = ()=>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
        box.classList.remove("color");
        box.classList.remove("color2");
    }
};

const showwinner = (winner)=>{
    msg.innerText = (`congratulations winner is ${winner}`);
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = ()=>{
    for (let pattern of winPattern){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != ""  && pos2val !="" && pos3val != ""){
            if(pos1val == pos2val && pos2val == pos3val){ 
                showwinner(pos1val);
            }
        }
    }
};



newBtn.addEventListener("click" , resetgame);
resetBtn.addEventListener("click", resetgame);
