/**
 * Created by markusandresen on 03/11/15.
 */
window.addEventListener('load',loaded);
var body;
var xx;
var x=0;

function loaded(){
    xx = window.setInterval(changebackground,10000);
    body = document.getElementsByClassName("body_index")[0];

}

function changebackground(){
    if(x==0){
        body.className = "body_index image2";
        x=1;
    }
    else if(x==1){
        body.className = "body_index image1";
        x=2;
    }
    else{
        body.className = "body_index image3";
        x=0;
    }



}