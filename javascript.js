let playing = false;
let score;
let counter;

//if we click on the start/reset
document.getElementById('startReset').onclick =
     //if we are playing
    function() {
    if (playing == true) {
        location.reload(); //reload the page
        document.getElementById('startReset').innerHTML = '<p>Start</p>';
    }else {
        //if we are not playing
        playing = true;
        document.getElementById('startReset').innerHTML = '<p>Reset</p>';
        score = 0;
        //set score to 0
        
        document.getElementById('timer').style.display = "block";
        //show countdown box
        //start reducing the time by 1 sec in loops
            //time left?
                //yes -> continue
                //no gameover
        //change button text to reset
        countdownTimer();
        
        
        
        //generate new Q&A
        
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
let countdownTimer = setInterval(function(){
    count--;
    counter.innerHTML = count;
    if(count == 0) {
        stopTimer();
        document.getElementById('timer').style.display = "none";
        document.getElementById("gameover").style.display = "block";
    }
}, 1000);

stopTimer = function() {
    clearInterval(countdownTimer);
}
