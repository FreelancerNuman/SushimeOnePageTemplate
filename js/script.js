/* Slider js */
$('.carousel').carousel({
  interval: 2000
})
/* Statistic Conunter */
var counters = document.querySelectorAll('.number');
var speed = 200;

counters.forEach(counter => {
	function updateCount(){
		var target = +counter.getAttribute('data-target');
		var count = +counter.innerText;
		
		var inc = target / speed;
		
		if(count < target){
			counter.innerText = Math.ceil(count + inc);
			setTimeout(updateCount,1 );
		}else{
			count.innerText = target;
		}
	}
	updateCount(); 
});
