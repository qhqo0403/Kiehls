$(function(){
	$('.togglebtn').on('click', function(){
		$(this).toggleClass('on');
		$('.menu').toggleClass('on');
	});

	$('.bs>.wrap>.right>div').on('mouseover', function(){
		$(this).find('img').eq(0).stop().fadeOut();
	});
	$('.bs>.wrap>.right>div').on('mouseout', function(){
		$(this).find('img').eq(0).stop().fadeIn();
	});

	
/*	$('.social>.sns_innerbox>.wrapper>.img_wrap>.imgbox>.box').on('mouseover', function(){
		$(this).find('a').append('<img src="imgs/heart.jpg" alt="" width="300" height="300">')
		$(this).append('<img src="imgs/heart.jpg" alt="" width="300" height="300">');
		$('<img src="imgs/heart.png" alt="" width="300" height="300">').appendTo($(this).find('a')); 
	});
*/
	
	$('.social #next').on('click', function(){
		$('.social>.sns_innerbox>.wrapper>.img_wrap>.imgbox').stop().animate({left:'-1260px'}, 500);
	});
	/*$('#next')*/
});