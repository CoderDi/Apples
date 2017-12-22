$(document).ready(function() {

  $(".open3d").click(function(){
    $("#iframe").attr("src", $(this).attr("data-src"));
    $(".popup").addClass("popup--show");
    setTimeout(function() { 
      $("#iframe").show();
    }, 300);
  });
  $(".popup__close").click(function(){
    $(".popup").removeClass("popup--show");
    $("#iframe").hide();
  });
  $(".popup-bg").click(function(){
    $(".popup").removeClass("popup--show");
    $("#iframe").hide();
  });
  

  $(".rooms__slider").slick({
    infinite: false,
    dots: true
  });
  $('.rooms__slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    var that = $(this);
    that.find('.rooms__slider_item--title').removeClass('animated slideInRight');
    setTimeout(function() { that.find('.rooms__slider_item--title').addClass('animated slideInRight'); }, 100);
  });
  $(".rooms__slider_nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    focusOnSelect: true
  });

  var now = new Date();
  var month = Array("Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь");
  $("#dateInDay").text(now.getDate());
  $("#dateInYear").text(now.getFullYear());
  $("#dateInMonth").text(month[now.getMonth()]);

  $(".booking__select_arrow").click(function(){
    $(this).parents(".booking__select").toggleClass("booking__select--open");
  });

  $(".select_item-e").click(function(){
    $(this).parents(".booking__label").find("input").val($(this).text());
    $(this).parents(".booking__select").removeClass("booking__select--open");
  });

  $(".select_item-d").click(function(){
    $(this).parents(".booking__select").find(".booking__select_text").text($(this).text());
    $(this).parents(".booking__select").removeClass("booking__select--open");
    $("#dateIn").val($("#dateInDay").text() + " " + $("#dateInMonth").text() + " " + $("#dateInYear").text());
  });

  $(".select_item-do").click(function(){
    $(this).parents(".booking__select").find(".booking__select_text").text($(this).text());
    $(this).parents(".booking__select").removeClass("booking__select--open");
    $("#dateOut").val($("#dateOutDay").text() + " " + $("#dateOutMonth").text() + " " + $("#dateOutYear").text());
  });






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
    arrows: false,
    infinite: false
  });

  $('#slider').on('beforeChange', function(slick, currentSlide){
    var that = $(this);
    that.find('.slick-current .slider__item_title').removeClass('animated slideInDown');
    setTimeout(function() { that.find('.slick-current .slider__item_title').addClass('animated slideInDown'); }, 100);
    that.find('.slick-current .slider__item_text').removeClass('animated slideInLeft');
    setTimeout(function() { that.find('.slick-current .slider__item_text').addClass('animated slideInLeft'); }, 100);
    that.find('.slick-current .slider__item_price').removeClass('animated slideInUp');
    setTimeout(function() { that.find('.slick-current .slider__item_price').addClass('animated slideInUp'); }, 100);
    
  });

  $(".rooms__card--more-link").click(function(){
    $(this).parents(".rooms__card").find(".rooms__card--more").toggleClass("rooms__card--more--open");
  });
  
  new WOW().init({
    offset: 50,
    mobile: false
  });

  $(function() {
    $("[type=tel]").mask("+7 (999) 999-99-99");
	});
  
  $('form input[type="checkbox"]').change(function () {

    if ($(this).is(":checked"))
    {
        $(this).parents("form").find("input[type='submit']").attr("disabled", false);
    }
    else
    {
        $(this).parents("form").find("input[type='submit']").attr("disabled", true);
    }
});
  

  if ($("#map").length > 0) {
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
  }

  $(".gallery__item_zoom").click(function(){
    $(this).parents(".gallery__item").find("a").click();
  });

  if ($(".popup-gallery").length > 0) {
    $('.popup-gallery1').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
    $('.popup-gallery2').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function(item) {
          return item.el.attr('title');
        }
      }
    });
  }

});


var tempScrollTop, currentScrollTop = 0;
$(window).scroll(function(){
  currentScrollTop = $(window).scrollTop();
  if (tempScrollTop < currentScrollTop ) {
    $(".stick").addClass("stick--active");
  }
  else if (tempScrollTop > currentScrollTop ) {
    $(".stick").removeClass("stick--active");
  }
  tempScrollTop = currentScrollTop;
});