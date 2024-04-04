$(function () {

  $(".header__stars").rateYo({
    rating: 4.5,
    readOnly: true,
    spacing: "6px",
  });

  var mixer = mixitup('.blog__list');

  $('.blog__sort-btn').on('click', function () {
    $('.blog__sort-btn').removeClass('blog__sort-btn_active')
    $(this).addClass('blog__sort-btn_active')
  });


  
  $('.reviews__slider').slick({
    arrows: false,
    slidesToShow: 2,
    dots: true,
    appendDots: $('.reviews__dot'),
    draggable: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          draggable: true
        }
      }
  ]});
  
  $('.slider-prev').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickPrev')
  });

  $('.slider-next').on('click', function (e) {
    e.preventDefault()
    $('.reviews__slider').slick('slickNext')
  });


  
  $('.questions__acc-link').on('click', function (e) {
    e.preventDefault()
    if ($(this).hasClass('questions__acc-link_active')) {
      $(this).removeClass('questions__acc-link_active')
      $(this).children('.questions__answer').slideUp()
    } else {
      $('.questions__acc-link').removeClass('questions__acc-link_active')
      $('.questions__answer').slideUp()
      $(this).addClass('questions__acc-link_active')
      $(this).children('.questions__answer').slideDown()
    }
  })



  $(".header__nav a, .cta__button, .footer__logo, .footer__bottom-item a").on("click", function (e) {
    e.preventDefault()
    var id = $(this).attr('href'),
      top = $(id).offset().top
    $('body,html').animate({ scrollTop: top }, 800)
  });



  setInterval(() => {
    if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top_open') === false) {
      $('.burger').addClass('burger_follow')
    } else {
      $('.burger').removeClass('burger_follow')
    }
  }, 0);

  $('.burger, .overlay, .header__top a').on('click', function (e) {
    e.preventDefault()
    $('.header__top').toggleClass('header__top_open')
    $('.overlay').toggleClass('overlay_show')
  });

})