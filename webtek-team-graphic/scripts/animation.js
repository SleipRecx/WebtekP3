window.addEventListener('load',run);

function run(){
    var tracker = "one";
    var pic1 = document.getElementById("pic1")
    setInterval(function () {
        if(tracker == "one"){
            pic1.src = "images/Scissors_icon_black.svg.png";
            tracker = "two"
        }
        else{
            pic1.src = "images/scissor-k-hi.png";
            tracker = "one";
        }
    }, 500);
}
