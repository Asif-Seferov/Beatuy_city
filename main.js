var modal = document.querySelector("#modal");
var close = document.getElementById("close");
var btnClose = document.getElementById("btnClose");
var btn = document.getElementById("btn");
btn.onclick = function(){
    modal.style.display = "block";
}
close.onclick = function(){
    modal.style.display = "none";
}
btnClose.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
};

//menu sidebar
var open = document.getElementById("open");
var sideBar = document.getElementById("sideBar")
var closeSideBar = document.getElementById("closeSideBar");
open.onclick = function(){
    sideBar.style.width = "100%";
}
closeSideBar.onclick = function(){
    sideBar.style.width = "0";
}