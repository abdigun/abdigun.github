	(function () {
		var controller = new ScrollMagic.Controller();

		var movingHello = new TimelineMax()
		.fromTo(".cont-intro-hello", 0.8, {x: "0%"}, {x: "70%", ease: Power2.easeNone})
		 scene for moving hello
		var introMoving = new ScrollMagic.Scene({
		triggerElement: ".hello",
		offset: 100
		})

		.setTween(movingHello)
		.addIndicators({name: "1 (duration: 0)"})
		.addTo(controller);
   
	})(); 
	

