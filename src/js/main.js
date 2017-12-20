$(document).ready(function() {

  $(function() { 
    $(window).scroll(function() {     
      if($(this).scrollTop() >300) {     
        $('#toTop').fadeIn();     
      } else {     
        $('#toTop').fadeOut();     
      }     
    });     
    $('#toTop').click(function() {     
      $('body,html').animate({scrollTop:0},800);     
    });     
  });

  $(".butter").click(function(){
    $(".header__menu--container").toggleClass("header__menu--open");
  });

  $(".header__submenu_arrow").click(function(){
    $(this).parents(".header__menu_item").toggleClass("header__submenu--open");
    $(this).parents(".header__menu_item").find(".header__submenu").toggleClass("header__submenu--opened");
  });

  $("#slider").slick({
    dots: true,
    arrows: false
  });
  
  new WOW().init();


  ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [56.288161, 43.916541],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/marker.png',
            // Размеры метки.
            iconImageSize: [75, 104],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-20, -105]
        });

    myMap.geoObjects
        .add(myPlacemark)
  });


});


