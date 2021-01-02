let playing = false;
let score;
let counter;
let question;

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
        
        //generate new Q&A
        generateQandA();
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
            document.getElementById("gameover").style.display = "block";
        }
}, 1000)};

stopTimer = () => {
    clearInterval(action);
}

//generate the question and answer
let x;
let y;
let correctAnswer;
let generateQandA = () => {
    x = 1 + Math.floor(Math.random() * 9);
    y = 1 + Math.floor(Math.random() * 9);
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = "<p>" + x  + " x " + y + "</p>";
    randomBox();
    
}

//generate random box
randomBox = () => {
    box = 1 + Math.floor(Math.random() * 4);
    document.getElementById("box" + box).innerHTML = "<p>" + correctAnswer + "</p>";
}





