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
      if($hash_txt == "talent_develop"){
        $.ajax({
          url: "./care_talent_dev.html",
          success: function(data){
            $("#cont").html(data);
            $(".menu_target").text("인재개발");
            $('html > head > title').text('한화건설 | 인재개발');
          }
        }); 
      }else if($hash_txt == "etc"){
        $.ajax({
          url: "./etc.html",
          success: function(data){
            $("#cont").html(data);
            $(".menu_target").text($hash_txt);
            $('html > head > title').text('한화건설 | 기타');
          }
        });
      }
    }else{
      $hash_txt ="talent_develop";
      hash_call();
    }
  };

  // 최초 로드 시 로드이벤트 실행
  hash_call();


});
