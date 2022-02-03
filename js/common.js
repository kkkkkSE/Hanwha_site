$(document).ready(function(){
  $("#header").load("./header.html");  
  $("#footer").load("./footer.html");  


  // all menu
  $(document).on("click", ".hbg_btn", function(e){
    e.preventDefault();
    var $cur_class = $(".all_menu").hasClass("active");

    if(!$cur_class){
      $(".all_menu").addClass("active");
      $(".gnb > li").removeClass("active");

    }else{
      $(".all_menu").removeClass("active");
    }

  });

  $(document).on("click", ".x_btn", function(e){
    e.preventDefault();
    $(".all_menu").removeClass("active");
  });

  // all menu - mobile 환경 sub menu
  $(document).on("click", ".gnb .more", function(e){
    e.preventDefault();
    var $cur_class = $(this).closest("li").hasClass("active");

    if(!$cur_class){
      $(".gnb > li").removeClass("active");
      $(this).closest("li").addClass("active");
    }else{
      $(this).closest("li").removeClass("active");
    }
  });

  // allmenu - 해쉬 이동 시 메뉴창 닫힘
  $(window).on("hashchange", function(){
    $(".all_menu").removeClass("active");
  });

    
  // fam site
  $(document).on("click", ".site_head", function(e){
    e.preventDefault();
    cur_state = $(".site_list").hasClass("active");
    if(!cur_state){
      $(".site_list").addClass("active");
    }else{
      $(".site_list").removeClass("active");
    }
  });

  // top button
  $(window).on("scroll", function(){
    btn_offset = $(".top_btn").offset().top;
    if($(this).scrollTop() > btn_offset){
      $(".top_btn").fadeIn(800);
    }
  });

  $(document).on("click", ".top_btn", function(){
    $("html, body").animate({
      scrollTop : 0
    }, 500);
  });



});