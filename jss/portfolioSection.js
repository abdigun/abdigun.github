// parralax scene

//  to see when it work . add ( addIndicators() )

var controller = new ScrollMagic.Controller();

$(function () {
	if ($(window).width() > 499) {
		var slideParallaxScene = new ScrollMagic.Scene({
			triggerElement: ".picture-container",
			triggerHook:1,
			duration: "100%",
		})

		.setTween(TweenMax.from(".picture-parallax", 1 , {y: "-150", ease:Power0.easeNone}))
		.addTo(controller);
	}

})



$(function () {
	if ($(window).width() > 499) {
		var slideParallaxScene2 = new ScrollMagic.Scene({
			triggerElement: ".picture-container-2",
			triggerHook:1,
			duration: "100%",
		})

		.setTween(TweenMax.from(".picture-parralax-2", 1 , {y: "-150",  ease:Power4.easeNone}))
		.addTo(controller);
	}

})




$(function () {
	var slideParallaxScene3 = new ScrollMagic.Scene({
		triggerElement: ".picture-container-3",
		triggerHook:1,
		duration: "100%",
	
	})

	.setTween(TweenMax.from(".picture-parralax-3", 1 , {y: "-150",  ease:Power0.easeNone}))
	.addTo(controller);  
})




// section top

var movingHello = new TimelineMax()
	.fromTo(".padding-g", 0.8, {x: "0%"}, {x: "70%", ease: Power2.easeNone})
//  scene for moving hello
var introMoving = new ScrollMagic.Scene({
	triggerElement: ".hello-2",
	offset: 100
})
.setTween(movingHello)
.addTo(controller);



// animation moving once

$(function () {
	var educationtext = new TimelineMax()
		.fromTo(".edu-text-move", 1 ,{ x: "-20%", opacity: "0"}, {opacity:"1", x: "0%", ease: Power2.easeInOut})

	var educationtextscene = new ScrollMagic.Scene({
		triggerElement: ".content-edu-padding",
		offset: 0,
		reverse:false
	})
	.setTween(educationtext)
	.addTo(controller)


	var education2text = new TimelineMax()
		.fromTo(".edu-text-move-2", 1 ,{ x: "20%", opacity: "0"}, {opacity:"1", x: "0%", ease: Power2.easeInOut})

	var education2textscene = new ScrollMagic.Scene({
		triggerElement: ".content-edu-padding",
		offset: 0,
		reverse:false
	})
	.setTween(educationtext)
	.addTo(controller)

	var picturemove2Once = new TimelineMax()
		.fromTo(".picture-parralax-2", 1.3 ,{ x: "50%", opacity: "0"}, {opacity:"1", x: "0%", ease: Power2.easeInOut})

	var picturemove2Oncescene = new ScrollMagic.Scene({
		triggerElement: ".move-2",
		offset: 0,
		reverse:false
	})
	.setTween(picturemove2Once)
	.addTo(controller)

	var picturemoveOnce = new TimelineMax()
		.fromTo(".picture-parallax", 1.3 ,{ x: "-50%", opacity: "0"}, {opacity:"1", x: "0%", ease: Power2.easeInOut})

	var picturemoveOncescene = new ScrollMagic.Scene({
		triggerElement: ".move-1",
		offset: 0,
		reverse:false
	})
	.setTween(picturemoveOnce)
	.addTo(controller)


})








// var moving intro background

var movingColor = new TimelineMax()
	.fromTo(".page-color", 0.8, {x: "0%"}, {x: "100%", ease: Power2.easeNone})
		.fromTo(".scroll-intro", 0.3 ,{y: "30%", opacity: "0"}, {y: "0%", opacity: "1", ease: Power2.easeNone})

// scene for moving intro background

var movingColorIntro = new ScrollMagic.Scene({
	triggerElement: ".hello-2",
	offset: 100
})

.setTween(movingColor)
.addTo(controller)





// scroll animation dissappear

var scrollMoving = new TimelineMax()
	.fromTo(".hello-arrow-scroll", 1, {y: "0%", opacity: "1"}, {y: "20%", opacity: "0", ease: Power2.easeNone})

var scrollIntroMoving = new ScrollMagic.Scene({
	triggerElement: ".hello-2",
	offset: 100
})

.setTween(scrollMoving)
.addTo(controller)




// visible and visible footer

$(function () { // wait for document ready
		var controller = new ScrollMagic.Controller();

	new ScrollMagic.Scene({
		triggerElement: ".reveal-1",
		triggerHook: 1, // show, when scrolled 10% into view
		duration: "0%", // hide 10% before exiting view (80% + 10% from bottom)
		offset: -50 // move trigger to center of element
	})
	.setClassToggle(".reveal-1", "visible") // add class to reveal
	.addTo(controller);

});



//  kids riding book flying

	$(function () { // wait for document ready
		var flightpath = {
			entry : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 100,	y: -20},
						{x: 300,	y: 10}
					]
			},
			looping : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 510,	y: 60},
						{x: 620,	y: -60},
						{x: 500,	y: -100},
						{x: 380,	y: 20},
						{x: 500,	y: 60},
						{x: 580,	y: 20},
						{x: 620,	y: 15}
					]
			},
			leave : {
				curviness: 1.25,
				autoRotate: true,
				values: [
						{x: 660,	y: 20},
						{x: 800,	y: 130},
						{x: $(window).width() + 300,	y: -100},
					]
			}
		};
		// init controller
		var controller = new ScrollMagic.Controller();

		// create tween
		var tween = new TimelineMax()
			.add(TweenMax.to($(".kid"), 5.2, {css:{bezier:flightpath.entry}, ease:Power1.easeInOut}))
			.add(TweenMax.to($(".kid"), 5, {css:{bezier:flightpath.looping}, ease:Power1.easeInOut}))
			.add(TweenMax.to($(".kid"), 5, {css:{bezier:flightpath.leave}, ease:Power1.easeInOut}));

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: ".flying", duration: 800, offset: 100})
						.setPin(".flying")
						.setTween(tween)
						
						.addTo(controller);
	})




//  fade in kid flying 
$(function () { 
	if ($(window).width() > 900) {
		var KidFlyingBook = new TimelineMax()
				.fromTo(".kid-book", 1, {opacity: "0", x: "0"}, {opacity: "1", x: "10%", ease:Power3.easeInOut}) 

		var KidBook = new ScrollMagic.Scene({
			triggerElement: ".flying",
			offset: 100
		})

		.setTween(KidFlyingBook)
		.addTo(controller)
	}

	else {
		$(".scrollmagic-pin-spacer").css("display", "none");
	}

});




//  mini scroll 

$(function () { // wait for document ready

	//  get page container height 
	var pagE = $(".page").height() ;
	var controller = new ScrollMagic.Controller();

	myScene = new ScrollMagic.Scene({
	triggerElement: ".page",
	triggerHook: 1, // show, when scrolled 10% into view
	duration: pagE , // using .page height to reveal element
	offset: -50
		
	})
	.setClassToggle(".reveal-mini", "visib") // add class to reveal
	.addTo(controller);

});


//  mini scroll  

$(function() {
		
	// scroll mini bottom
	$(".scroll-1").on("click",function(e){
		$("html, body").animate({scrollTop: $("#FTT-1").offset().top }, 800);
	})
	

	//  scroll mini top
	$(".scroll-2").on("click",function(e){
		$("html, body").animate({scrollTop: $("#HLL-1").offset().top }, 800);
	})
})

$(function(){



})