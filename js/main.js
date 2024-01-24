// 첫 번째 줄 .first
$('.first .item').on('mouseenter', function(){
  $(this).find('.area').stop().animate({opacity:1},400)
  $(this).addClass('active')
})
.on('mouseleave', function(){
  $(this).find('.area').stop().animate({opacity:0},200)
  $(this).removeClass('active')
})

// .stop()을 넣어야 중복되지 않음

// 두 번째 줄 .second - 왼쪽에서 가운데로
$('.second .item').on('mouseenter', function(){
  $(this).find('.area').stop().animate({left:0},400, 'easeOutBounce')
  $(this).addClass('active')
})
.on('mouseleave', function(){
  $(this).find('.area').stop().animate({left:'-100%'},200, 'easeInCubic')
  $(this).removeClass('active')
})



// 세 번째 줄
$('.third .item').on('mouseenter', function(){
  $(this).find('p').stop().delay(300).animate({bottom:0},400)
  $(this).addClass('active')

  //delay() : 글씨는 0.3초만큼 나중에 올라오게 함.
})
.on('mouseleave', function(){
  $(this).find('p').stop().animate({bottom:'-55px'},200, 'easeInCubic')
  $(this).removeClass('active').delay(300)
})


//네 번째 줄
$('.fourth .item').on('mouseenter', function(){
  $(this).find('p').stop().delay(200).animate({top:0},400)
  $(this).addClass('active')
})
.on('mouseleave', function(){
  $(this).find('p').stop().animate({top:'-80px'},200, 'easeInCubic')
  $(this).removeClass('active').delay(300)
})