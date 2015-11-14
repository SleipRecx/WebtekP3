/**
 * Created by markusandresen on 11/11/15.
 */
window.addEventListener("load", loaded);

function loaded(){
    var height = window.innerHeight;
    var wrapper = document.getElementsByClassName("wrapper")[0];
    wrapper.style.minHeight = height+"px";
    wrapper.style.display = "block";

    window.addEventListener('resize', function(){
        height = window.innerHeight;
        wrapper.style.minHeight= height+"px";
    });
}