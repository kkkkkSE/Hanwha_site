$(document).ready(function(){


///// 슬라이딩
  var $last_slide = $(".slide_wrap .slide:last");
  $(".slide_wrap").prepend($last_slide);

  setInterval(function(){
    var $first_slide = $(".slide_wrap .slide:first");
    var $stop = $(".slide_state").hasClass("stop");

    if(!$stop){
      $(".slide_wrap").stop().animate({"margin-left":"-200%"}, 300, function(){
        $(".slide_wrap").append($first_slide).css("margin-left", "-100%");  
      });
    }
  }, 4000);

  
  // 슬라이딩 - 이전, 다음 버튼
  $(".prev").click(function(){
    var $last_slide = $(".slide_wrap .slide:last");

    $(".slide_wrap").stop().animate({"margin-left":"0"}, 300, function(){
      $(".slide_wrap").prepend($last_slide).css("margin-left", "-100%");
    });
  });
  $(".next").click(function(){
    var $first_slide = $(".slide_wrap .slide:first");

    $(".slide_wrap").stop().animate({"margin-left":"-200%"}, 300, function(){
      $(".slide_wrap").append($first_slide).css("margin-left", "-100%");
    });
  });


  // 슬라이딩 - 정지 기능
  $(".slide_state").click(function(){
    var $cur_state = $(this).hasClass("stop");

    if(!$cur_state){
      $(this).addClass("stop");
      $(this).find("img").attr("src", "./img/btn_play.png");
    }else{
      $(this).removeClass("stop");
      $(this).find("img").attr("src", "./img/btn_stop.png");
    }

  });



  // our business
  $(".cpn_info .cont_img img").hover(function(){
    $(this).attr("src", $(this).attr("src").replace("_off", "_on"));
  }, function(){
    $(this).attr("src", $(this).attr("src").replace("_on", "_off"));
  });

});