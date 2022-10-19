$(document).ready(function(){

    /* Header Navbar Event */
    $(".navbar_gnb,.sub_shadow").on("mouseenter mouseleave",function(aa){
        if($(window).width() >= 1144){     //pc 데스크탑 상태 (오른쪽 스크롤너비 17xp합해서 브레이크포인트 1160px만듬)
            if(aa.type == "mouseenter"){   
                $(".header_wrap").css("background", "#000");
                $(".sub_nav").stop().slideDown();
                $(".sub_shadow").stop().fadeIn();
            } else {
                if (window.scrollY <= 5) {
                    $(".header_wrap").css("background", "none");
                }
                $(".sub_nav").stop().slideUp(200,function(){
                    $(".sub_nav").removeAttr("style")
                });
                $(".sub_shadow").stop().fadeOut(200,function(){
                    $(this).removeAttr("style")
                });
            }
        }
    });

    /* Visual Main slick Event */
    $("#visual_main").slick({
        dots: false,
        arrows: true,
        // fade: true,
        autoplay: true,
        autoplaySpeed: 3000,
    });

    /* Slider slick Event */

    // $("#slider_main").slick({
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 1000,
    //     arrows: true,        
    //     prevArrow: $(".custom_prev"),
    //     nextArrow: $(".custom_next")
    // });
    $('#slider_main').slick({
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1160,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 430,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }        
        ]
      });

    /* Familiy Button Show Event */
    $("#family_btn").click(function() {
    if ($(".family_site_inner").css("display") === "block") {
        $(".family_site_inner").hide();
        $("#family_icon").css("transform", "");
    } else {
        $(".family_site_inner").show();
        $("#family_icon").css("transform", "rotate(180deg)");
    }
    });

    /* Header Scroll background Event */
    window.addEventListener("scroll", (event) => {
        if (window.scrollY > 5) {
            $(".header_wrap").css("background", "#000");
        } else {
            $(".header_wrap").css("background", "none");
        }
    });
});


/* 모바일- 메인메뉴 클릭하면 서브메뉴 나옴 */
const $mainBtn = $('.navbar_gnb > li > a');   //메인메뉴
$mainBtn.click(function(){
    if($(window).width() < 1160){  //모바일상태였을때만
        if( !$(this).parents('li').hasClass('on')){   //클릭한 a의 부모 li에 on클래스가 없을때
            $('.sub_nav').slideUp(200);                  //모든 서브들이 업되고
            $('.navbar_gnb > li').removeClass('on');
            $(this).siblings('.sub_nav').slideDown(500);   //클릭한 애만 슬라이드 다운됨
            $(this).parents('li').addClass('on');
        } else {             //클릭한 부분이 이미 열려있는 상태(on클래스가 있는상태)
            $('.sub_nav').slideUp(200);  
            $(this).parents('li').removeClass('on');

        }
    
    } 
});

/* 모바일 상태에서 햄버거 버튼을 누르면 사이드바가 열리고 닫힘 */
$('.trigger').click(function(){
    $(this).toggleClass('open');

    if($(this).hasClass('open')){
        $('.gnb').animate({right:0},400);
        $('header').animate({left:-250},400);
    } else {
        $('.gnb').animate({right:-250},400);
        $('header').animate({left:0},400);

    }
});

/* 모바일 상태에서 서브메뉴를 열고 데스크탑상태로 바꾸면 서브가 그냥 보이는 상태,li에 클래스가 계속있는 상태-수정하기 */
$(window).resize(function(){
    if($(window).width() > 1160){
        $('.sub_nav').removeAttr('style');
        $('.navbar_gnb > li').removeClass('on');
    }
});
