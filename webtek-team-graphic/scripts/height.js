/**
 * Created by markusandresen on 11/11/15.
 */
window.addEventListener("load", loaded);

function loaded(){
    var height = window.innerHeight;
    var wrapper = document.getElementsByClassName("wrapper")[0];
    console.log(wrapper.style.minHeight);
    wrapper.style.minHeight = height+"px";
}