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

  setTimeout(topDisp,500);
  setTimeout(topContentDisp,1000);
  setTimeout(topTypist,500);
  setTimeout(topChange,5000);
  setTimeout(topWrapperScroll,6000);


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

  $(document).on('click','.worry-arrow-circle',function() {
    $("html,body").animate({
      scrollTop: $('#reason').offset().top
    },500);
  });

});