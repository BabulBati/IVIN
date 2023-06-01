window.onscroll = function() {scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("navbar").style.padding = "0px";
        document.getElementById("logo").style.fontSize = "16px";
      } else {
        document.getElementById("navbar").style.padding = "3px 0px";
        document.getElementById("logo").style.fontSize = "18px";
      }
      return false;
}

function submitpost(){
  document.getElementById("cform").reset();
  window.alert("Thank You for contacting us.");
}

