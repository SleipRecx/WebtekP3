var timeout	= 40;
var closetimer	= 0;
var ddmenuitem	= 0;

// makes submenues visible
function openMenu(id) {
    cancelCloseTime();
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.visibility = 'visible';

}

// makes submenues hidden
function close() {
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

// calls the close function after timout time
function closeMenu() {
    closetimer = window.setTimeout(close, timeout);
}

// cancels the close function delay
function cancelCloseTime(){
    if(closetimer)
    {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

// closes submeny on document.click and mousedown
document.onclick = close();
document.addEventListener("mousedown",close());
