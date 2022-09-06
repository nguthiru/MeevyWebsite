var body = document.querySelector('body')
window.onscroll = ()=>{

  var scrollWheel = document.getElementById("mouse-wheel");

  scrollWheel.style.animation = "animate-wheel 2s linear";
  scrollWheel.style.animation = "";
}