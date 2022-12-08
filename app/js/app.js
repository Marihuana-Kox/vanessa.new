
$(function () {

	function counter_off(numb_start) {
		
		$({numberValue: 1199}).animate({numberValue: Number(numb_start)}, {
		
			duration: 1500, // Продолжительность анимации, где 500 = 0,5 одной секунды, то есть 500 миллисекунд 
			easing: "linear",
			step: function(val) {
				$('.chart-number').text(Math.ceil(val)); // Блок, где необходимо сделать анимацию
			}
			
		});
	}
	var $counter = 0;
	$(window).scroll(function(){
		var $element = $('.chart-number');
		var coun = $element.text();
		var offset = $element.offset().top;
		var $scroll = $(window).scrollTop() + $(window).height();
		
		if (offset < $scroll && $counter == 0){
			counter_off(coun);
			$counter = 1;
		}
	})
	
})
