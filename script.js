var sButton = document.getElementById("scrollButton");
window.onscroll=function(){
    scrollFunc();
}
function scrollFunc(){
    if (document.documentElement.scrollTop> 20){
        sButton.style.display="block";
    }else{
        sButton.style.display="none";
    }
}
function topScroll(){
    document.documentElement.scrollTop=0;
}