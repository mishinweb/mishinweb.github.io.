//hamburger
$(document).ready(() => {

  const hamburger = $(".hamburger-menu-link")
  const hamburgerMenu = $('#hamburger-menu')

  hamburger.on("click", () => {

    if (hamburger.hasClass('hamburger_active')) {
      hamburger.removeClass('hamburger_active')
    } else {
      hamburger.addClass('hamburger_active')
    }
    if (hamburgerMenu.hasClass("hamburger-menu_active")) {
      hamburgerMenu.removeClass("hamburger-menu_active")
    } else {
      hamburgerMenu.addClass("hamburger-menu_active")
    }
  })
})
//Modal
$(document).ready(() => {

  $("[data-fancybox]").fancybox({
  });
})
//onepage_scroll
$(document).ready(() => {

  $(".maincontent").onepage_scroll({
    sectionContainer: "section", // sectionContainer accepts any kind of selector in case you don't want to use section
    easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
    // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
    animationTime: 1000, // AnimationTime let you define how long each section takes to animate
    pagination: true, // You can either show or hide the pagination. Toggle true for show, false for hide.
    updateURL: false, // Toggle this true if you want the URL to be updated automatically when the user scroll to each page.
    beforeMove: function(index) {}, // This option accepts a callback function. The function will be called before the page moves.
    afterMove: function(index) {}, // This option accepts a callback function. The function will be called after the page moves.
    loop: false, // You can have the page loop back to the top/bottom when the user navigates at up/down on the first/last page.
    keyboard: true, // You can activate the keyboard controls
    responsiveFallback: false, // You can fallback to normal page scroll by defining the width of the browser in which
    // you want the responsive fallback to be triggered. For example, set this to 600 and whenever
    // the browser's width is less than 600, the fallback will kick in.
    direction: "vertical" // You can now define the direction of the One Page Scroll animation. Options available are "vertical" and "horizontal". The default value is "vertical".
  });
})
//slider
$(document).ready(() => {
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    navText: ["", ""],
    navContainer: $(".burger-slider__controls")
  })
  $(".burger-slider__btn_next").on("click", e => {
    e.preventDefault()

    $(".burgers-slider").trigger('next.owl.carousel')
  })
  $(".burger-slider__btn_prev").on("click", e => {
    e.preventDefault()

    $(".burgers-slider").trigger('prev.owl.carousel')
  })
});
//team_accordeon
$(function() {
  $('.team-accordeon__name').on('click', e => {
    e.preventDefault()

    var $this = $(e.currentTarget),
      list = $this.closest('.team-accordeon'),
      item = $this.closest('.team-accordeon__item'),
      items = $('.team-accordeon__item', list);

    if (!item.hasClass('active')) {
      items.removeClass('active')
      item.addClass('active')
    } else {
      item.removeClass('active')
    }

  })
})
//menu_accordeon
$(function() {
  $('.menu-acco__link').on('click', e => {
    e.preventDefault()

    var $this = $(e.currentTarget),
      list = $this.closest('.menu-acco'),
      item = $this.closest('.menu-acco__item'),
      items = $('.menu-acco__item', list);

    if (!item.hasClass('active')) {
      items.removeClass('active')
      item.addClass('active')
    } else {
      item.removeClass('active')
    }

  })
})
//map
ymaps.ready(init);
	var myMap
	var myPlacemark

	function init() {
  myMap = new ymaps.Map("map", {
    center: [59.93916998692174, 30.309015096732622],
    zoom: 11,
    controls: []
  });
  myMap.behaviors.disable('scrollZoom');

  myPlacemarkOne = new ymaps.Placemark([59.94554327989287, 30.38935262114668], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-26, -52]
  })

  myPlacemarkTwo = new ymaps.Placemark([59.91142323563909, 30.50024587065841], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-26, -52]
  })

  myPlacemarkThree = new ymaps.Placemark([59.88693161784606, 30.319658102103713], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-26, -52]
  })

  myPlacemarkFour = new ymaps.Placemark([59.97033574821672, 30.315194906302924], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/icons/map-marker.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-26, -52]
  })

  myMap.geoObjects
    .add(myPlacemarkOne)
    .add(myPlacemarkTwo)
    .add(myPlacemarkThree)
    .add(myPlacemarkFour)
}
//scroll
$(document).ready(function() {
  $('[data-scroll-to]').on('click touchstart', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const sectionIndex = parseInt($this.attr('data-scroll-to')) + 1;

    $(".maincontent").moveTo(sectionIndex);
  });
});
//form
$(document).ready(function() {
  $( "form" ).submit(function(e) {
    var data = $( this ).serializeArray();
    var done = $("#done");
    var url = $( this ).attr('action');
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function(msg){
          var message = JSON.parse(msg)
          console.log( message);
          if (message.status=="false"){
              alert(message.mes)
          }
          if (message.status=="true"){
            $.fancybox.open ({
              href: done,
              type: "inline",
              maxWidth: 250,
              fitToView: false,
              afterClose: function() {
                $(this).trigger("reset")
              }
            })
          }
        }
    });
});

	$(".status-popup__close").on("click", function(e) {
	  e.preventDefault(),
	    $.fancybox.close()
	})
});
