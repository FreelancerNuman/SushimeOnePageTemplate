/* navbar js */
$(window).scroll(function(){
	var positonTop =$(document).scrollTop();
		
	if((positonTop > 20)){
		$('.navbar').addClass('nav-color');
	}
	if((positonTop < 20)){
		$('.navbar').removeClass('nav-color');
	}
		
});
/* Slider js */
$('.carousel').carousel({
  interval: 2000
})
	