$(document).ready(function() {
  $(".butter").click(function(){
    $(".header__menu--container").toggleClass("header__menu--open");
  });

  $(".header__submenu_arrow").click(function(){
    $(this).parents(".header__menu_item").toggleClass("header__submenu--open");
    $(this).parents(".header__menu_item").find(".header__submenu").toggleClass("header__submenu--opened");
  });

  
  new WOW().init();
});


