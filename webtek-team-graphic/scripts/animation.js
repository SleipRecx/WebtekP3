window.onload = function startAnimation() {
    var frames = document.getElementById("animation").children;
    var i = 0;
    setInterval(function () {
                if(i%2==0){
                    frames.firstChild.style.display == "block";
                    frames.lastChild.style.display == "none";
                } else {
                    frames.firstChild.style.display == "none";
                    frames.lastChild.style.display == "block";
                }
                i=i+1;
                }, 500);
}

<div id="animation">
<img src="images/scissor-k-hi.png" />
<img src="images/Scissors_icon_black.svg.png" />
</div><script>
var frames = document.getElementById("animation").children;
var i = 0;
setInterval(function () {
            if(i%2==0){
            frames.firstChild.style.display == "block";
            frames.lastChild.style.display == "none";
            } else {
            frames.firstChild.style.display == "none";
            frames.lastChild.style.display == "block";
            }
            i=i+1;
            }, 500)};
</script>