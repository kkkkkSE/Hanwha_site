$(document).ready(function(){
  var $hash = location.hash;
  var $hash_txt = $hash.replace("#", "");

  // hash_txt가 변할 때마다 새로 저장해서 로드이벤트 실행
  $(window).on('hashchange', function(){
    $hash = location.hash;
    $hash_txt = $hash.replace("#", "");
    hash_call();
  });

  // 로드이벤트 실행 함수
  function hash_call(){
    if($hash_txt){
      if($hash_txt == "construct"){
        $.ajax({
          url: "./busi_construct.html",
          success: function(data){
            $("#cont").html(data);
            $(".menu_target").text("건축사업");
            $(".kor_title").text("건축사업 │");
            $(".eng_title").text("BUILDING WORKS");
            $('html > head > title').text('한화건설 | 건축사업');
            
            insder_ctgr();
            slide();

          }
        }); 
      }else if($hash_txt == "etc"){
        $.ajax({
          url: "./etc.html",
          success: function(data){
            $("#cont").html(data);
            $(".menu_target").text($hash_txt);
            $(".kor_title").text("기타사업 │");
            $(".eng_title").text("etc");
            $('html > head > title').text('한화건설 | 기타');
          }
        });
      }
    }else{
      $hash_txt ="construct";
      hash_call();
    }
  };

  // 최초 로드 시 로드이벤트 실행
  hash_call();


  // 프로젝트 카테고리 html 삽입
  function insder_ctgr(){
    var ctgr_list = [
      ["01", "업무시설", "예술적이고 쾌적한 사무용 빌딩을<br>한화건설이 만듭니다."],
      ["02", "레저시설", "아름다운 자연환경에 편리함이<br>조화를 이뤄 여유로운 레저생활을 창조합니다."],
      ["03", "판매/영업시설", "시선과 발길이 머무는 공간을 완성합니다."],
      ["04", "의료/교육시설", "최적의 의료환경, 최고의 교육환경을<br>만들어 갑니다."],
      ["05", "특수시설", "대전 엑스포 한빛탑, 종합운동장, 서울역사 등<br>지역의 랜드마크를 만들어갑니다."],
      ["06", "리모델링", "오래된 건물이 꿈에 그리던<br>아름다운 모습으로 재탄생합니다."]
    ];
    var textIn = "";
    
    for(v of ctgr_list){
      textIn += `
        <li class="pjt_ctgr" style="background-image: url(./img/business/${v[0]}_img.png);">
          <div class="ctgr_title">
            <span>${v[0]}</span>
            <h3>${v[1]}</h3>
          </div>
          <div class="ctgr_desc">
            <p>${v[2]}</p>
          </div>
        </li>
      `;
    }

    $(".pjt_list").html(textIn);
  }


  ///// 슬라이딩

  function slide(){
    setInterval(function(){
      var $first_slide = $(".slide_wrap .slide:first");

      $(".slide_wrap").stop().animate({"margin-left":"-100%"}, 500, function(){
        $(".slide_wrap").append($first_slide).css("margin-left", "0%");  
      });
    }, 4000);

    //슬라이딩 - 이전, 다음 버튼
    $(".prev").click(function(){
      var $last_slide = $(".slide_wrap .slide:last");
      $(".slide_wrap").prepend($last_slide).css({"margin-left":"-100%"});

      $(".slide_wrap").stop().animate({"margin-left":"0%"}, 500, function(){
        $(".slide_wrap").prepend($last_slide).css("margin-left", "0%");
      });
      return false;
    });

    $(".next").click(function(){
      var $first_slide = $(".slide_wrap .slide:first");

      $(".slide_wrap").stop().animate({"margin-left":"-100%"}, 500, function(){
        $(".slide_wrap").append($first_slide).css("margin-left", "0%");
      });
      return false;
    });
  };

});
