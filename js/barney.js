$(function(){
	let imgW=$('.slides').children('img').width();
	let imgNum=$('.slides').children('img').length;
	/*console.log( imgW, imgNum);*/
	$('.slides').width(imgW*imgNum);
	let num=0; //이동목표 증가변수 선언 (-600*0, -600*1, -600*2. -600*3)
	$('.prev').hide();

	$('.next').on('click', function(event){
		event.preventDefault();
		if(num==0){
			$('.prev').fadeIn();
		}
		if(num<imgNum-1){ //num<3
			/*console.log(num);*/
			num++;
			/*console.log(num);*/
			$('.slides').stop().animate({left:-imgW*num}, 600);
		}
		if(num==imgNum-1){
			$('.next').fadeOut();
		}	
	});
	$('.prev').on('click', function(event){
		event.preventDefault();
		if(num==(imgNum-1)){
			$('.next').fadeIn();
		}
		if(num>0){
			num--;
			$('.slides').stop().animate({left:-imgW*num}, 600);
		}
		if(num==0){
			$('.prev').fadeOut();
		}
	});
});