/**
 * Created by markusandresen on 03/11/15.
 */
window.addEventListener('load',loaded);
var body;
var changer;
var counter=2;
var stop = true;
var button;

// Gets loaded when html is renderd
function loaded(){
    body = document.getElementsByClassName("body")[0];
    changer = window.setInterval(changebackground,10000);
    button = document.getElementById("background-stop");
    button.addEventListener("click",start_stop);
}

// Changes background to the next image
function changebackground(){
    if(counter == 5){
        counter = 1;
    }
    body.className = "body image"+ counter.toString();
    counter+=1;
}

// Starts or stops the backgrund changer
function start_stop(){
    if(stop==true){
        window.clearInterval(changer);
        stop = false;
        button.innerHTML = "Resume background";
    }
    else{
        changer = window.setInterval(changebackground,5000);
        stop = true;
        button.innerHTML = "Pause background";
    }
}