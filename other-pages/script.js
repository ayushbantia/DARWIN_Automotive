//hamburger icon
function SidebarFunction(x) {
    x.classList.toggle("change");
     //sliding div
     $(".sliding-menu").slideToggle("slow");

  }
 //preloader text
 window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
 //full page scrolling effect
