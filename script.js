




//hamburger icon
function SidebarFunction(x) {
    x.classList.toggle("change");
    // $(".sliding-menu").css({"font-weight":"900","background-color":"#eaeaea"});
    //sliding div
    $(".sliding-menu").slideToggle("slow");
    // $(".sliding-menu").css({"background-color": "#dfdfdf"});
  }
 //preloader text
 window.addEventListener('load',function(){
    document.querySelector('body').classList.add("loaded")  
  });
 //full page scrolling effect


//back to top button
//scroll down function
function topFunction(){
    document.body.scrollTop = 0; // For Safari
   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
     $('html, body').animate({scrollTop:0}, '4000');
 }
function displaySpecsheadlight(){
  $('.headlight').fadeIn("slow");
  $('.specs-container').show();
  $('#go-back-btn').show();
  $('.battery').hide();
  $('.gear').hide();
  $('#main_bike').hide();
  $('#headlight_img').fadeIn('slow');
  $('i').hide();

}
function displaySpecsBattery(){
  $('.battery').fadeIn("slow");
  $('.specs-container').show();
  $('#go-back-btn').show();
  $('.gear').hide();
  $('.headlight').hide();
  $('#main_bike').hide();
  $('#battery_img').fadeIn('slow');
  $('i').hide();
}
function displaySpecsGear(){
  $('.gear').fadeIn("slow");
  $('.specs-container').show();
  $('#go-back-btn').show();
  $('.battery').hide();
  $('.headlight').hide();
  $('#main_bike').hide();
  $('#gear_img').fadeIn('slow');
  $('i').hide();

}
function HideAll(){
  $('.battery').hide();
  $('.specs-container').hide();
  $('.gear').hide();
  $('.headlight').hide();
  $('#go-back-btn').hide();
  $('#main_bike').fadeIn('slow');
  $('i').show();
}


$(document).ready(function(e) {
  $('#main_bike').rwdImageMaps();
});

jQuery(document).ready(function($) {
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });
}); 