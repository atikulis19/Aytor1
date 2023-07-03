// Preloader JS Start
$(window).on('load',function(){
    $('#preloader').hide();
  })
// Preloader JS End


$(function(){
    // Common Js Start
    $('button').on('click',function(e){
      e.preventDefault();
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
   
    // Cart Js Start
 // Banner Slick End


    // Cart Js Start
    // function increment(){
    //   let cartFiled = document.querySelector('.qualityInput')
    //   cartFiled.value++
    // }
    // $('.qualityBtnincrement').on('click', increment)

    // function decrement(){
    //   let cartFiled = document.querySelector('.qualityInput')
      
      
    //   if(cartFiled.value <= 1){
    //     cartFiled.value = 1;
    //   }else{
    //     cartFiled.value--
    //   }

    //   cartFiled.value <= 1 ? cartFiled.value = 1 : cartFiled.value--
    // }
    // $('.qualityBtndecrement').on('click', decrement)
    
    // Cart Js End

    // Cart Js Start
    $(".qualityCart").on("click", function (e) {
      let targetElement = $(e.target).data("behaviour");
  
      if (targetElement == "increment") {
          let cartFieldValue = $(this).children("input").val();
          cartFieldValue++;
          $(this).children("input").val(cartFieldValue);
          
      } else if (targetElement == "decrement") {
          let cartFieldValue = $(this).children("input").val();
          cartFieldValue--;
          $(this).children("input").val(cartFieldValue <= 1 ? "1" : cartFieldValue);
      } else {
         return false
      }
    });

    // Cart Js End
    
    






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