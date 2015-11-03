/**
 * Created by markusandresen on 02/11/15.
 */
var timeout	= 40;
var closetimer	= 0;
var ddmenuitem	= 0;

function openMenu(id) {
    cancelCloseTime();
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.visibility = 'visible';

}

function close() {
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}

function closeMenu() {
    closetimer = window.setTimeout(close, timeout);
}

function cancelCloseTime(){
    if(closetimer)
    {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}

function hover(){

}

document.onclick = close();
document.addEventListener("mousedown",close());
