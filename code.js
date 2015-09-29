function scrollToTop (e) {
    window.scrollTo(0,0);
    e.preventDefault();
    return false;
}
function scrollBottom () {
    window.scrollTo(0,700);
    return false;
}

document.onscroll = function(){
    var scrollTop = window.pageYOffset;
    document.getElementById("scrollUp").style.visibility = scrollTop > 300 ? "visible" : "hidden";
    document.getElementById("scrollDown").style.visibility = scrollTop < 500 ? "visible" : "hidden";

};

