/**
 * Created by Anders Hovstadius on 1/22/2015.
 */
function load() {
    var btn=document.getElementById("btn");
    btn.addEventListener("click",send,false);
}

function send(){
    var adr = document.getElementById("address");
    var email_address = adr.value;
    window.open('mailto:'+email_address+'?subject=subject&body='+reminder);
}

function mail() {
    var stuff = document.getElementById("content");
    var reminder = stuff.value;
}
