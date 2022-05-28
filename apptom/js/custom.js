var siteOwlCarousel = function() {
    $('.clients-carousel').owlCarousel({
      center: true,
      items: 3,
      loop: true,
      margin: 10,
      autoplay: true,
      smartSpeed: 1000,
      nav: false,
      dots: false,
      autoWidth: true,
      responsive: {
        0 : {
          items: 2
        },
        576 : {
          items: 3
        },
        768 : {
          items: 4
        },
        992 : {
          items: 4
        },
        1200 : {
          items: 4
        }
      }
    });
  };
  siteOwlCarousel();