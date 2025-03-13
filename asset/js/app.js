
// let Btn = document.querySelector(".button");
// Bootsrap tooltips js
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


$(function(){

  // MenuFixed Js
  $(window).scroll(function(){
    let ScreenTop = $(window).scrollTop()
    if(ScreenTop > 800){
      $('.navbar').addClass('MenuFixed')
    }

    else{
      $('.navbar').removeClass('MenuFixed')
    }

  })

  // Preloader Js
  $('#preloader').delay(2500).fadeOut('slow', function(){$(this).remove()})

  // Back to Top js
  $(window).scroll(function(){
    let totalScollingArea = $("body").height() - $(window).innerHeight();
    let scrollTop = $(window).scrollTop()
    let value = Math.round((100/totalScollingArea) * scrollTop);

    if(scrollTop > 800 ){
      $(".BackToTop").addClass('show')
    }
     
    else{
      $(".BackToTop").removeClass('show')
    }

    $(".BackToTop").css({
      backgroundImage: `conic-gradient(cadetblue ${value}%, #FFF ${value}%)`,
    });
    

  })

    // Banner SLIDE
    $("#banner").slick({
        arrows: false,
        dots:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'customDots container'
    });
    //product Slider
    
        $(".slider").slick({
         prevArrow: ".leftArrow",
         nextArrow:".rightArrow",
         dots:false,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 2000,
         dotsClass: 'MycustomDots',  
         responsive: [
            {
              breakpoint: 1199,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                dots: false
              }
            }, 

            {
                breakpoint: 991,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows:false
                }
              }, 
               {
                breakpoint: 767,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  arrows:false
                }
              },

            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false,
                fade:true,
                speed: 500,
                cssEase: 'linear'

              }
            }, 
          
             
            {
              breakpoint: 320,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
              }
            }

        ]
    }); 

    // offerProduct Slider
    $(".Offerslider").slick({
        arrows: false,
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'customDotsCnt',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, 
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }, 

          {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            }, 
             {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              fade:true,
              speed: 500,
              cssEase: 'linear',
              dots: false

            }
          }, 
        
           
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }

      ]
    });


    // SellerNews Slider
    $(".newsCnt").slick({
        arrows: false,
        dots:true,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'customDotsCnt',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          }, 

          {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            }, 
             {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              fade:true,
              speed: 500,
              cssEase: 'linear',
              dots: false

            }
          }, 
        
           
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }

      ]
    });

    // leadership Expert team slider
    $(".Exptslider").slick({
        prevArrow: ".leftArrowS",
        nextArrow:".rightArrowS",
        dots:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'customDotsCnt',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              dots: false
            }
          }, 

          {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            }, 
             {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              fade:true,
              speed: 500,
              cssEase: 'linear'

            }
          }, 
        
           
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }

      ]
    });


     // leadership Expert team slider
     $(".CustomSlider").slick({
        arrows:false,
        dots:true,
        fade:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'customDotsCnt',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }, 

          {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            }, 
             {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows:false
              }
            },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              dots:true,
              fade:true,
              speed: 500,
              cssEase: 'linear'

            }
          }, 
        
           
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }

      ]
    });


    // about instaSlider
    $(".instaslider").slick({
        arrows:false,
        dots:true,
        slidesToShow: 6,
        slidesToScroll: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        dotsClass: 'customDotsCnt',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              dots: true
            }
          }, 

          {
              breakpoint: 991,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows:false
              }
            }, 
             {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:false
              }
            },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:true,
              arrows:false,

            }
          }, 
        
           
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          }

      ]
    });
    
    // shop-details mainslider
    $(".mainSlider").slick({
       arrows:false,
       asNavFor:".SubSlider",
       fade: true,
       autoplay: true ,
       autoplaySpeed: 2000
    })

    // shop-details subslider
    $(".SubSlider").slick({
        arrows: false,
        slidesToShow:5,
        slidesToScroll:1,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor:".mainSlider",
        centerMode: true,
        centerPadding:'0px',
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          }, 

          {
              breakpoint: 991,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                arrows:false
              }
            }, 
             {
              breakpoint: 767,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:false
              }
            },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows:false,

            }
          }, 
        
           
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false
            }
          }

      ]
    });

    // shop-details product Slider
    $(".productSlider").slick({
        arrows:false,
        slidesToShow:4,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed: 2000,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1,
            }
          }, 

          {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows:false
              }
            }, 
             {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows:false
              }
            },

          {
            breakpoint: 575,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows:false,
              fade:true,
              speed: 500,
              cssEase: 'linear'

            }
          }, 
        
           
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false
            }
          }

      ]
    })

    // Aos Animation js
      AOS.init();


    // Increment&Decrement js
    $(".incrementBtn").click(function(event){
        event.preventDefault();
        var qty=$(this).closest('.quantity').find(".qutyInput").val();
        var value = parseInt(qty, 10);
        value = isNaN(value) ? 0 : value;
        
        if(value < 10){
            value++;
            $(this).closest('.quantity').find(".qutyInput").val(value);
        }
              
    });

    $(".decrementBtn").click(function(e){
        e.preventDefault();
        var qty=$(this).closest('.quantity').find(".qutyInput").val();
        var value = parseInt(qty, 10);
        value = isNaN(value) ? 0 : value;
        
        if(value > 1){
            value--;
            $(this).closest('.quantity').find(".qutyInput").val(value);
        }
              
    });

    //  CounterUp js
    $('.counter').counterUp({
        delay: 30,
        time: 3000
    });


    // venobox js
    new VenoBox({
        selector: ".gallery",
        spinner: "flow"
    });

    
    });

    // Time countdown js
// let countDownDate = new Date("oct 16, 2024 00:00:00").getTime();
// let x = setInterval(function(){
//     let now = new Date().getTime();
//     let distance = countDownDate - now;
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     document.getElementById("day").innerHTML = days;
//     document.getElementById("hours").innerHTML = hours;
//     document.getElementById("minutes").innerHTML = minutes;
//     document.getElementById("seconds").innerHTML = seconds;
    
// },1000);    


    // 5 stars rating js
    
let stars = document.querySelectorAll(".star a");

     stars.forEach((item , index1)=>{
     item.addEventListener('click',() =>{
     stars.forEach((star, index2) =>{
     index1 >= index2 ? 
     star.classList.add("active") : star.classList.remove("active")
     
   })
})
})

  // PopupSearchBar Js
  function openSearch(){
    document.getElementById("SearchOverlay").style.display="block";
  }

  function closeSearch(){
    document.getElementById("SearchOverlay").style.display="none";
  }




