// header
$(function () {
    const icons = document.querySelectorAll('.icon');
    icons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            icon.classList.toggle("open");
        });
    });
    $(".icon").click(function(){
        $("nav").toggle();
    });
});

// $(function(){
   
// });

// 헤더 이펙트
function detectMediaSize(){
    if(window.matchMedia('all and (min-width: 0px) and (max-width: 500px)').matches){
        $(function(){
            $('nav > ul > li').click(function(){
                $(this).children(".sub").stop().slideToggle();
                $(this).siblings().children(".sub").stop().slideUp();
            });
        });
        
    } else if(window.matchMedia('all and (min-width: 1100px)').matches){
        $(function(){
            $('nav').mouseenter(function(){
                $('.sub').show();
                $('.navdown').show();
            });
        
            $('nav').mouseleave(function(){
                $('.navdown').hide();
                $('.sub').hide();
            });
        
            $(".sub").hover(function(){
                $(this).children().css({background:"#582b7a"});
            }).mouseleave(function(){
                $(this).children().css({background:"#63318a"});
            });
        
            $("nav > ul > li").hover(function(){
                $(this).find("ul").css({borderTop:"2px solid #c40f39"});
            }).mouseleave(function(){
                $(this).find("ul").css({borderTop:"2px solid #e3e3e3"});
            });
        });
    }
}
window.addEventListener('resize',detectMediaSize,false);
detectMediaSize();

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

//main
$(function(){
// [펜,마카,형광펜,미술용품] li 누르면 테두리랑 글씨 색 변경
    $(".penname-list li").click(function(){
        $(this).addClass("redline");
        $(this).siblings().removeClass('redline');
        $(this).find("a").addClass('redtext');
        $(this).siblings().find('a').removeClass('redtext');
    });
    $('.penname-list li:eq(0)').trigger('click');
    
// [펜, 마카, 형광펜, 미술용품] li 누르면 해당하는 리스트 나오게 하기
    $(".mySwiper").show();
    $(".penname-list li:eq(0)").click(function(){
        $(".swiper").hide();
        $(".mySwiper").fadeIn();
    });
    $(".penname-list li:eq(1)").click(function(){
        $(".swiper").hide();
        $(".mySwiper1").fadeIn();
    });
    $(".penname-list li:eq(2)").click(function(){
        $(".swiper").hide();
        $(".mySwiper2").fadeIn();
    });
    $(".penname-list li:eq(3)").click(function(){
        $(".swiper").hide();
        $(".mySwiper3").fadeIn();
    });
});

// 마우스 휠 이벤트
    if(window.matchMedia("(min-width:1400px)").matches){
        // 새로고침하면 강제로 위에서 시작
        history.scrollRestoration = "manual"
        // 마우스 휠 이벤트
        window.addEventListener("wheel", function (e) {
            e.preventDefault();
        }, { passive: false });
        // 휠해서 화면 크기 조절하고 싶을때 위에거 주석처리해야됨

        var mHtml = $("html");
        var page = 1;
        mHtml.animate({ scrollTop: 0 }, 10);

        $(window).on("wheel", function (e) {
            if (mHtml.is(":animated")) return;
            if (e.originalEvent.deltaY > 0) {
                if (page == 5) return;
                page++;
            } else if (e.originalEvent.deltaY < 0) {
                if (page == 1) return;
                page--;
            }
            var posTop = (page - 1) * $(window).height();
            mHtml.animate({ scrollTop: posTop }, 550);
        });
    }

// 밑부분 family site 네개 박스 호버
    if(window.matchMedia("(min-width:501px)").matches){
        $(function(){
            $('.family-wrapbox li').hover(function(){
                $(this).children().children().css({"border":"2px solid #c40f39","transition":"all 0.2s ease-in"});
            }, function(){
                $(this).children().children().css("border","2px solid #ccc");
            });
        });
    }
    
// family site 화살표 클릭하면 넘기기
    if(window.matchMedia("(max-width:500px)").matches){
        $(function(){
            $(".monami-left").click(function(){
                $(".family-wrapbox li:last").prependTo(".family-wrapbox")
                $(".family-wrapbox").css('margin-left','-50%');
               $(".family-wrapbox").animate({marginLeft:"0"},850);
            });

            $(".monami-right").click(function(){
                $(".family-wrapbox").animate({marginLeft:"-50%"},850,function(){
                    $(".family-wrapbox li:first").appendTo(".family-wrapbox");
                    $(".family-wrapbox").css('margin-left','0');
                });
            })
        });
    };

//ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// footer
    $(document).ready(function(){
        $('.business_btn').click(function(){
            $('.business').toggle();
            if($('.business').css('display')=='block'){
                $('.business_btn i').css('transform','rotate(0deg)')
                $('footer ul:first').css('padding-top','200px')
            }else{
                $('.business_btn i').css('transform','rotate(180deg)')
                $('footer ul:first').css('padding-top','75px')
            }
        });
    });