let buttons = document.querySelectorAll("#turn");
let para = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let score1 = document.querySelector("#scorep");
let score2 = document.querySelector("#scorec");
let ele = ["Stone","Paper","Scissor"];
let comp_score = 0;
let player_score = 0;

reset.addEventListener("click",() => {
    para.textContent = "";
    player_score = 0;
    comp_score = 0;
    score1.textContent = `Player Score : ${player_score}`;
    score2.textContent = `Computer Score : ${comp_score}`;
})

score1.textContent = `Player Score : ${player_score}`;
score2.textContent = `Computer Score : ${comp_score}`;

buttons.forEach((btn) => {

    btn.addEventListener("click",() => {


         function winner() {
            
            let comp_turn = ele[Math.floor(Math.random() * 3)];

                if(btn.textContent == ele[0] && comp_turn == ele[1]) {
                    para.innerText = `Computer Won The Match! ${comp_turn} beats ${btn.textContent}.`; 
                    comp_score += 1;
                }
                
                else if(btn.textContent == ele[1] && comp_turn == ele[2]) {
                    para.innerText = `Computer Won The Match! ${comp_turn} beats ${btn.textContent}.`;
                    comp_score =+ 1;
                }

                else if(btn.textContent == ele[2] && comp_turn == ele[0]) {
                    para.innerText = `Computer Won The Match! ${comp_turn} beats ${btn.textContent}.`;
                    comp_score += 1;
                }

                else if(btn.textContent == ele[0] && comp_turn == ele[2]) {
                    para.innerText = `Player Won The Match! ${btn.textContent} beats ${comp_turn}.`;
                    player_score += 1;
                }

                else if(btn.textContent == ele[1] && comp_turn == ele[0]) {
                    para.innerText = `Player Won The Match! ${btn.textContent} beats ${comp_turn}.`;
                    player_score += 1;
                }
                
                else if(btn.textContent == ele[2] && comp_turn == ele[1]) {
                    para.innerText = `Player Won The Match! ${btn.textContent} beats ${comp_turn}.`;
                    player_score += 1;
                }

                else {
                    para.innerText = "The Match Is Draw Both Are Equel.";
                }
            }
         winner();
         score1.textContent = `Player Score : ${player_score}`;
         score2.textContent = `Computer Score : ${comp_score}`;
    })
})