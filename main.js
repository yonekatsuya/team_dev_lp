$(function() {
  var topDisp = function() {
    $('#top').stop(true).animate({
      opacity: 0.5
    },500);
  };

  var topContentDisp = function() {
    $('#top-content').stop(true).animate({
      opacity: 1
    },500);
  };

  var topChangeElem = function() {
    $('.top-image').css('background-image','url(image/code.jpg)');
    $('.top-image').css('background-color','');
    $('.top-image').css('opacity',0.5);
    $('.top-content').css('color','black');
  }

  var topChange = function() {
    $('.top-image').css('background-image','url()');
    $('.top-image').css('background-color','black');
    $('.top-image').stop(true).animate({
      opacity: 1
    },500);

    $('#top-content').stop(true).animate({
      color: 'white'
    },500);

    $('.content').css('display','block');
    setTimeout(topChangeElem,2000);
  };

  var topTypist = function() {
    $('#top-content')
      .typist({ speed: 15 })
      .typistAdd('プログラミングスキルを高めたいあなたへ！\n')
      .typistPause(500)
      .typistAdd('よければ一緒にチームでWebアプリ開発しませんか？');
  };

  var topWrapperScroll = function() {
    var windowHeight = window.innerHeight;
    $('html,body').animate({
      scrollTop: windowHeight
    },500);
  };

  // setTimeout(topDisp,500);
  // setTimeout(topContentDisp,1000);
  // setTimeout(topTypist,500);
  // setTimeout(topChange,5000);
  // setTimeout(topWrapperScroll,6000);


  var worryArrowCircleChange = function() {
    if ($('.worry-arrow-circle').hasClass('flag')) {
      $('.worry-arrow-circle').animate({
        fontSize: '25px'
      },300);
      $('.worry-arrow-circle').removeClass('flag');
    } else {
      $('.worry-arrow-circle').animate({
        fontSize: '20px'
      },300);
      $('.worry-arrow-circle').addClass('flag');
    }
  }

  if ($('.worry-arrow-circle').length !== 0) {
    setInterval(worryArrowCircleChange,1000);
  }

  // var sideBlockMove = function() {
  //   if (!$('.side-area-block').hasClass('flag')) {
  //     $('.side-area-block').animate({
  //       bottom: '-10%'
  //     },4000);
  //     $('.side-area-block').addClass('flag');
  //   } else {
  //     $('.side-area-block').animate({
  //       bottom: '100%'
  //     },4000);
  //     $('.side-area-block').removeClass('flag');
  //   }
  // };

  // var timer = setInterval(sideBlockMove,4100);

  // 悩みブロックの下部矢印押下時のアニメーションスクロール
  $(document).on('click','.worry-arrow-circle',function() {
    $("html,body").animate({
      scrollTop: $('#reason').offset().top
    },500);
  });

  $(document).on('click','#header-top',function() {
    $("html,body").animate({
      scrollTop: $('#top-wrapper').offset().top
    },1000);
  });

  $(document).on('click','#header-reason',function() {
    $("html,body").animate({
      scrollTop: $('#reason').offset().top
    },1000);
  });

  $(document).on('click','#header-self',function() {
    $("html,body").animate({
      scrollTop: $('#self-introduce').offset().top
    },1000);
  });

  $(document).on('click','#header-thought',function() {
    $("html,body").animate({
      scrollTop: $('#thought').offset().top
    },1000);
  });

  $(document).on('click','#header-use',function() {
    $("html,body").animate({
      scrollTop: $('#use-technique').offset().top
    },1000);
  });

  var soccerMove = function() {
    $('.soccer-move').toggleClass('flag');
    if ($('.soccer-move').hasClass('flag')) {
      $('.soccer-move').animate({
        top: '96%'
      },5000);
    } else {
      $('.soccer-move').animate({
        top: '5%'
      },5000);
    }
  };

  if ($('.soccer-move').length !== 0) {
    setInterval(soccerMove,5100);
  }

  $(document).one('mouseover','.content',function() {
    $('header').animate({
      opacity: 0.4
    },500);
  });

});