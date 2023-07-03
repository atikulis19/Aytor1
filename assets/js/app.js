
// Preloader Start
$(window).on('load',function(){
  $('#preloader').hide();
})
// Preloader End


$(function(){
  // Common Js Start
  $('button').on('click',function(){
    return false
  })
  // Common Js End  
  
  //Banner Slick Start Here
    $('.bannerSlider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        fade: true,
        dots: true,
        dotsClass: 'bannerSliderDots'
        
      });
    // Banner Slick End

    
      

    // Tooltip Bootstrap
      const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
      const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)) 
      
    // Arrivals Product Silder
      $('.arrivals_slider').slick({
        slidesToShow: 4,
        autoplay: false,
        autoplaySpeed: 2000,
        prevArrow: `<i class="fa-solid fa-chevron-left arrivalSliderArrow"></i>`,
        nextArrow: `<i class="fa-solid fa-chevron-right arrivalSliderArrow"></i>`,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      
      })

      // coundown Js
      $('#dealclock').countdown('2023/12/31', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div><span class="d-block">%D</span><span class="d-block">Day</span></div> '
          + '<span class="dateColon">:</span>'
          + '<div><span class="d-block">%H</span><span class="d-block">Hour</span></div> '
          + '<span class="dateColon">:</span>'
          + '<div><span class="d-block">%M</span><span class="d-block">Minute</span></div> '
          + '<span class="dateColon">:</span>'
          + '<div><span class="d-block">%S</span><span class="d-block">Sec</span></div>'
          ));
      });

       // Deals Slider
       $('.dealSliderItem').slick({
        slidesToShow: 2,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'dealsSliderDots',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });


      
      // Blog Slider
      $('.blogSlide').slick({
        slidesToShow: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        dotsClass: 'blogSliderDots',
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        
      })


      // Video Play Spacial Offer Section (VenoBox) Start
      new VenoBox({
        maxWidth: '80%',
      });
      // Video Play Spacial Offer Section (VenoBox) End




      // Newsletter Popup Start
      setTimeout(function(){
        document.querySelector('#newsletter').style.transform ='scale(1)'
      },2000)

      function newsPopUpClose(){
        document.querySelector('#newsletter').style.transform = 'scale(0)'
      }
      
      document.querySelector('.newsletterClose').addEventListener('click',newsPopUpClose)

      $("#newsletter").click(function(){
        
      });
    // Newsletter Popup End

      // Back TO Top Start
      $(window).on('scroll', function(){
        let scrollTopSize = $(this).scrollTop();
        
        if(scrollTopSize > 500){
          $('.backToTopBtn').show(500);
          
        }else{
          $('.backToTopBtn').hide(500);
        }
      })
      $('.backToTopBtn').on('click', function(){
          $('body,html').animate({
            scrollTop: 0
          },1000)
      })
    // Back TO Top End
      
})




 

