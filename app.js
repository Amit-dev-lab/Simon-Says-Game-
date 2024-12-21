let gameSequence = [];
let userSequence = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

let btns = ["red","yellow","green","purple"];

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game is started");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");

    setTimeout(function (){
        btn.classList.remove("flash");
    },250);
}


function levelUp(){
    userSequence = [];
    level++;
    h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random()*3);
  let randColor = btns[randIdx];
  let ranBtn = document.querySelector(`.${randColor}`);

  console.log(randColor);
  gameSequence.push(randColor);
  console.log(gameSequence);
    btnFlash(ranBtn);
}

function userFlash (btn){
    btn.classList.add("userflash");

    setTimeout(function (){
        btn.classList.remove("userflash");
    },250);
}


function checkAns (idx){
    if(userSequence[idx] === gameSequence[idx]){
        if(userSequence.length == gameSequence.length){
            setTimeout(levelUp,1000);
        }
    }else {
        h2.innerHTML = `Game over! Press any key to Start <br> <b>Your Score: ${level}<b>`;
        reset ();
        //for creating alert type window
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"
        },150);
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSequence.push(userColor);
  
    checkAns (userSequence.length-1);
}


let allbtns = document.querySelectorAll(".btn");
  for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSequence = [];
    userSequence = [];
    level = 0;
}