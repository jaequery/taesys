$(document).ready(function(e) {

// Sticky Header
	$(window).scroll(function() {
        15 < $(document).scrollTop() ? $("html").addClass("small") : $("html").removeClass("small")
    });

$('.page-navigation').onePageNav();
	
	
	$("#right_header .right_bottom #navigation_bar ul li a").on('click', function(event) {
		if (this.hash !== "") {
		 
		  event.preventDefault();
		  var hash = this.hash;
		  $('html, body').animate({
			scrollTop: $(hash).offset().top - 120
		  }, 1000, function(){
			window.location.hash = hash;
		  });
		} 
	});
	
});


$(function () {
    $(".reg_sect").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".reg_sect:hidden").slice(0, 2).slideDown();
        if ($(".reg_sect:hidden").length == 0) {
            $("#load").fadeOut('slow');
           /* $('#loadMore').text('less');*/
        }
});
});


$(function () {
    $(".reg_sect1").slice(0, 3).show();
    $("#loadMore").on('click', function (e) {
        e.preventDefault();
        $(".reg_sect1:hidden").slice(0, 1).slideDown();
        if ($(".reg_sect1:hidden").length == 0) {
            $("#load").fadeOut('slow');
           /* $('#loadMore').text('less');*/
        }
});
});

$(document).ready(function(){
	
  $('.mob_menu').click(function(){
	$('body').toggleClass('open');
	$('#right_header').slideToggle(); 
	$( "#navigation_bar ul li ul" ).removeClass( "drop_down" );
  });
  
   equalheight('.eq ');
   equalheight('.eq1 ');
   
   
   
$('.history_cont').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
		arrows: false,
		dots: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}); 

$('.coverage_cont').slick({
  dots: false,
  arrows: true,
  infinite: true,
  autoplay: false,
  autoplaySpeed: 5000,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
		arrows: true,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}); 

$('.one-time').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
}); 




	
$('.center1').slick({
  centerMode: true,
  dots: false,
  arrows: true,
  centerPadding: '120px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});
   
 $('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 641,
      settings: {
        arrows: false,
		dots: true,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
				  
  
});

		
equalheight = function(container){
    var currentTallest = 0,
         currentRowStart = 0,
         rowDivs = new Array(),
         $el,
         topPosition = 0;
     $(container).each(function() {

       $el = $(this);
       $($el).height('auto')
       topPostion = $el.position().top;

       if (currentRowStart != topPostion) {
         for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
           rowDivs[currentDiv].height(currentTallest);
         }
         rowDivs.length = 0; // empty the array
         currentRowStart = topPostion;
         currentTallest = $el.height();
         rowDivs.push($el);
       } else {
         rowDivs.push($el);
         currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
      }
       for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
         rowDivs[currentDiv].height(currentTallest);
       }
     });
}


$(window).load(function() {
    equalheight('.eq ');
    equalheight('.eq1 ');
   
});


$(window).resize(function(){	
    equalheight('.eq ');
    equalheight('.eq1 ');

});	 
		

		
			