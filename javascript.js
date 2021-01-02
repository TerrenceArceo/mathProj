let playing = false;
let score;
let counter;
let question;
let correctAnswer;
let action;
let lives;

//if we click on the start/reset
document.getElementById('startReset').onclick =
     //if we are playing
    function() {
    if (playing == true) {
        location.reload(); //reload the page
        
    }else {//if we are not playing
        playing = true;
        
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        
        document.getElementById('timer').style.display = "block";
        //show countdown box
        //start reducing the time by 1 sec in loops
            //time left?
                //yes -> continue
                //no gameover
        //change button text to reset
        document.getElementById('startReset').innerHTML = '<p>Reset</p>';
        countdownTimer();
        
        //show the hearts
        document.getElementById("life").style.display = 'block';
        lives = 3;
        addHearts();
        
        //generate new Q&A
        generateQandA();
    }
}

for(let i = 1; i < 5; i++) {
        document.getElementById("box"+i).onclick = function(){
        if (playing == true) {
            if(this.innerHTML == correctAnswer) {
                score++;

                document.getElementById("scorevalue").innerHTML = score;

                document.getElementById("correct").style.display = 'block';
                setTimeout(() => {
                    document.getElementById("correct").style.display = 'none';
                }, 1000);

                generateQandA();
            }else {
                document.getElementById("wrong").style.display = 'block';
                setTimeout(() => {
                        document.getElementById("wrong").style.display = 'none';
                    }, 1000);
                if (lives > 1) {
                    lives--;
                } else {
                    stopTimer();
                    document.getElementById('timer').style.display = "none";
                    document.getElementById("gameover").innerHTML = "GAME OVER <br />Your total score is " + score;
                    document.getElementById("gameover").style.display = "block";
                }
            }
        }
    }
}


//if we click on answer box
    //if we are playing
        //correct?
            //yes
                //increase score by 1
                //show correct box for 1 sec
                //generate new Q&A
            //no
                //show try again box for 1 sec

//functions
counter = document.getElementById("counter");
let count = 60;
let countdownTimer = () => {
    action = setInterval(() => {
        count--;
        counter.innerHTML = count;
        if(count == 0) {
            stopTimer();
            document.getElementById('timer').style.display = "none";
            document.getElementById("gameover").innerHTML = "GAME OVER <br />Your total score is " + score;
            document.getElementById("gameover").style.display = "block";
        }
}, 1000)};
// stop the timer
stopTimer = () => {
    clearInterval(action);
}


//generate the question and answer
generateQandA = () => {
    let x = 1 + Math.round(Math.random() * 9);
    let y = 1 + Math.round(Math.random() * 9);
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x  + " x " + y ;
    
    correctBox = 1 + Math.round(Math.random() * 3);
    document.getElementById("box" + correctBox).innerHTML =  correctAnswer;
    
    
    //generate other boxes with wrong answer
    let answers = [correctAnswer]
    for(let i = 1; i < 5; i++) {
        if(i !== correctBox) {
            let wrong;
            do{
              wrong = (1 + Math.floor(Math.random() * 9))*(1 + Math.floor(Math.random() * 9)) //wrong answer
            }while(answers.indexOf(wrong) > -1);
            document.getElementById("box"+i).innerHTML = wrong;
            answers.push(wrong);
        }
    }
}

addHearts = () => {
    for(let i = 0; i < lives; i++) { 
        $("#life").append('<img src="images/hearts.png">')
    }
}