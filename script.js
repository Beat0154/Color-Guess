var colors = ["Blue", "Red", "Green", "Yellow"];
function startGame(){
    setInterval(timer, 1000);
    reset();
}
var checkmark = document.getElementById("checkmark");
var wrong = document.getElementById("wrong");
var correct = document.getElementById("correct");
var correctInt = 0
function checkColor(color, correctAnswer){
    if(color===correctAnswer){
        correctInt++;
        checkmark.classList.add("fadeAway");
    }else{
        wrong.classList.add("fadeAway");
    }
    setTimeout(function(){
        checkmark.classList.remove("fadeAway");
        wrong.classList.remove("fadeAway");
    },500);
    reset();
    correct.innerHTML = correctInt;
}

function reset(){
    var random1 = Math.floor(Math.random()*2);
    if(random1==0){
        var color1 = document.getElementById("color1");
        var color2 = document.getElementById("color2");
    }else{
        var color2 = document.getElementById("color1");
        var color1 = document.getElementById("color2");
    }
    document.getElementById("start").style.display = "none";
    var random = Math.floor(Math.random() * 4);
    var correctAnswer = colors[random];
    color1.innerHTML = correctAnswer;
    color2.style.color = correctAnswer;
    if(random+1==4){
        color2.innerHTML = colors[random-3];
    }else{
        color2.innerHTML = colors[random+1];
    }
    if(random-1==-1){
        color1.style.color = colors[random+3];
    }else{
        color1.style.color = colors[random-1];
    }
    color1.style.display = "block";
    color2.style.display = "block";
    addClick("Blue", correctAnswer);
    addClick("Red", correctAnswer);
    addClick("Green", correctAnswer);
    addClick("Yellow", correctAnswer);
}
function addClick(color, correctAnswer){
    var colorSpan = document.getElementById(color);
    let onclick = "checkColor('".concat(color,"','",correctAnswer,"')");
    colorSpan.setAttribute("onclick", onclick);
}

var countdown = 30;
function timer(){
    document.getElementById("time").innerHTML = countdown;
    if(countdown==0){
        clearInterval(timer);
        alert("Game Over. Score: " + correctInt);
        location.reload();
    }
    countdown--;
}