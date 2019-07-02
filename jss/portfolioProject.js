
// education content 

	$(document).ready(function () {
		$(".pointer-right-1").addClass("load-hidden");
		$(".pointer-left").addClass("load-hidden");
		$(".about-2").addClass("load-hidden");
		$(".about-3").addClass("load-hidden");
		$(".about-content-2").addClass("load-hidden");
		$(".about-content-3").addClass("load-hidden");

// 01 about transition to 02
		$(".pointer-right").on("click",function(){
			$(".container-block-edu").animate({opacity: 0}, 1);
			$(".container-block-edu").animate({opacity: 1}, 500);
			if (!$(".about-1").hasClass("load-hidden")) {
				if ($(".about-2").hasClass("load-hidden")){
					if ($(".about-3").hasClass("load-hidden")){
						$(".about-1").addClass("load-hidden");
						$(".about-content-1").addClass("load-hidden");
						$(".about-2").removeClass("load-hidden");
						$(".about-content-2").removeClass("load-hidden");
						$(".pointer-left").removeClass("load-hidden");
						$(".about-3").addClass("load-hidden");
						$(".about-content-3").addClass("load-hidden");
						$(".pointer-right").addClass("load-hidden");
						$(".pointer-right-1").removeClass("load-hidden");
						$(".pointer-left").removeClass("load-opa");

					}
				};
			}
		})

// 02 about transition to 01
		$(".pointer-left").on("click",function(){
			$(".container-block-edu").animate({opacity: 0}, 1);
			$(".container-block-edu").animate({opacity: 1}, 500);
			if (!$(".about-2").hasClass("load-hidden")){
				if ($(".about-1").hasClass("load-hidden")){
						$(".about-2").addClass("load-hidden");
						$(".about-content-2").addClass("load-hidden");	
						$(".about-1").removeClass("load-hidden");
						$(".about-content-1").removeClass("load-hidden");
						$(".pointer-right-1").addClass("load-hidden");	
						$(".pointer-right").removeClass("load-hidden");
						$(".pointer-left").addClass("load-hidden");				
			};
			}
		})

// 02 about transition to 03 
		$(".pointer-right-1").on("click",function(){
			$(".container-block-edu").animate({opacity: 0}, 1);
			$(".container-block-edu").animate({opacity: 1}, 500);
			if (!$(".about-2").hasClass("load-hidden")){
				if ($(".about-3").hasClass("load-hidden")){
						$(".about-2").addClass("load-hidden");
						$(".about-content-2").addClass("load-hidden");
						$(".about-content-1").addClass("load-hidden");
						$(".about-1").addClass("load-hidden");
						$(".about-3").removeClass("load-hidden");
						$(".about-content-3").removeClass("load-hidden");
						$(".pointer-right-1").addClass("load-hidden");

				}
			}
	})


// 03 about transition to 02
		$(".pointer-left").on("click",function(){
			if (!$(".about-3").hasClass("load-hidden")){
				if ($(".about-2").hasClass("load-hidden")){
						$(".about-3").addClass("load-hidden");
						$(".about-content-3").addClass("load-hidden");	
						$(".about-2").removeClass("load-hidden");
						$(".about-content-2").removeClass("load-hidden");
						$(".pointer-right-1").removeClass("load-hidden");


			};
			}			
		})		

	})



