var line = document.getElementById("line");
var scroll = scrollY;

window.addEventListener("scroll", function(){
    if(scrollY > 1060){
        line.style.visibility = "visible";
        line.style.transition = "1000ms ease-in-out";
    } else{
        line.style.visibility = "hidden";
    }
})