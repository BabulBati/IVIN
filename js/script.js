window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.padding = "2px 0px";
        document.getElementById("logo").style.fontSize = "16px";
      } else {
        document.getElementById("navbar").style.padding = "10px 0px";
        document.getElementById("logo").style.fontSize = "18px";
      }
}

var btnContainer = document.getElementById("navbarNav");
var btns = btnContainer.getElementsByClassName("nav-link");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    
    this.className += " active";
  });
}