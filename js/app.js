//Select Elements For Logic From Html File
let buttons = document.querySelectorAll("#turn");
let para = document.querySelector(".winner");
let reset = document.querySelector(".reset");
let score1 = document.querySelector("#scorep");
let score2 = document.querySelector("#scorec");
//Array With All Elements Of The Game 
let ele = ["Stone","Paper","Scissor"];
//Variables For Tracking Player And Computer Score
let comp_score = 0;
let player_score = 0;

score1.textContent = `Player Score : ${player_score}`;
score2.textContent = `Computer Score : ${comp_score}`;

//Add Event Listener To Element For Resetting The Game 
reset.addEventListener("click",() => {
    //Emptying Paragraph And Changeing Score Back To 0
    para.textContent = "";
    player_score = 0;
    comp_score = 0;
    score1.textContent = `Player Score : ${player_score}`;
    score2.textContent = `Computer Score : ${comp_score}`;
})

//Adding Loop For Selecting All Buttons(Turns) One By One
buttons.forEach((btn) => {

    para.innerText = "No Turns Made :(";

    //Added Event Listener For Each Button
    btn.addEventListener("click",() => {

        //Define Function To Get Winner, Update Score And Display Conclusion
         function winner() {
            
            //Variable For Gettin A Random Number From 0 to 2 For Computer To Select A Random Turn From Ele Array
            let comp_turn = ele[Math.floor(Math.random() * 3)];

            //Statement To Check Every Possiblity Of Both Winning, Losing And Draw(If Both Choices Are Same)
                if(btn.textContent == ele[0] && comp_turn == ele[1]) {
                    para.innerText = `Computer Won The Match! ${comp_turn} beats ${btn.textContent}.`; 
                    comp_score += 1;
                }
                
                else if(btn.textContent == ele[1] && comp_turn == ele[2]) {
                    para.innerText = `Computer Won The Match! ${comp_turn} beats ${btn.textContent}.`;
                    comp_score += 1;
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

         //Update And Display Both Player And Computer Scores
         score1.textContent = `Player Score : ${player_score}`;
         score2.textContent = `Computer Score : ${comp_score}`;
    })
})