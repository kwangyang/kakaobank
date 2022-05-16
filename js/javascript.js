$(function(){


  // 움직일 컨테이너 안에
  const $container = $('#slides > .screen > .slides-container');
  // 다섯장의 슬라이드
  const $slides = $container.children('li');

  // --------------------------------------

  // next,prev 버튼
  const $btnNext = $(' #slides > a.next');
  const $btnPrev = $(' #slides > a.prev');

  // ----------------------------------------

  // 지금 class.on 가 붙은 최초로 보여지는 큰 거
  let nowIdx = 2;

  // 잠그기(실행되기전에 다른게 실행 못하게)
  let lock = false;

  // ---------------------------------------------------------------------

  // 다음버튼

  $btnNext.on('click', function(evt){
    console.log(nowIdx);
    evt.preventDefault();

    if(lock===false){ //잠겨있지 않으면
      lock = true; //잠근다
      
      // index 추출
    if(nowIdx < 4){
      nowIdx++;
    }else{
      nowIdx = 0;   
    }

    // class on 다음 활성화된 애 한테
    $slides.removeClass('on').eq(nowIdx).addClass('on');

    // 컨테이너의 슬라이드 
    $container.stop().animate({
      left: -480 
      //- 240px(지금) * 2(다음)

    },function(){
      // 콜백함수
      // 이동이 완료되면 첫장을 뒤로, 옮기기:
      // $slides를 그대로 쓰면 안됨 새로 설정
      // 매번 카드의 현재 배열 정보를 새로 가져와야 함 
      $('#slides > .screen > .slides-container > li').first().appendTo($container);

      // 다 밀리고 나머지가 빈자리를 매꾸기 때문에 ui가 무너짐 방지
      $container.css({
        left : -240
      });

      lock = false; //일이 끝났으니 락을 다시 푼다
    });
  }
});

  // --------------------------------------------------------------------------


	//이전버튼
	$btnPrev.on('click', function(evt) {
		evt.preventDefault();

    if(lock===false){ //잠겨있지 않으면
      lock = true; //잠근다
      
      //인덱스 번호 추출
		if (nowIdx > 0) {
			nowIdx--;
		} else {
			nowIdx = 4;
		}

		$slides.removeClass('on').eq(nowIdx).addClass('on');

		$container.stop().animate({ 
      left: 0 
    }, function() {
			$('#slides > .screen > .slides-container>li').last().prependTo($container);

			$container.css({
				left: -240
      });
       lock = false;
		});
  }
});




});