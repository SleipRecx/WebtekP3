/**
 * Created by markusandresen on 11/11/15.
 */

// Runs loaded when document is ready
window.addEventListener("load", loaded);


function loaded(){
    // Sets height to window height
    var height = window.innerHeight;
    var wrapper = document.getElementsByClassName("wrapper")[0];
    //Sets minHeight to window height
    wrapper.style.minHeight = height+"px";
    wrapper.style.display = "block";

    // Changes wrapper min height when window is resized
    window.addEventListener('resize', function(){
        height = window.innerHeight;
        wrapper.style.minHeight= height+"px";
    });
}