$(document).ready(function($) {

	"use strict";

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	var carousel = function() {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			nav: true,
			stagePadding: 5,
			nav: false,
			navText: ['<span class="icon-chevron-left">', '<span class="icon-chevron-right">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
	};
	carousel();

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.ftco-number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();
	
	

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();

	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();

	// spec links navigation
	var OnePageMyScroll = function() {
		$("#specijalna-ponuda-link, #ponuda-link").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  // if ( navToggler.is(':visible') ) {
		  // 	navToggler.click();
		  // }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageMyScroll();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('#m_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#m_time').timepicker();





let kuvanaClick = document.getElementById("pills-kuvana-jela-tab");
let italijanskaClick = document.getElementById("italijanska-kuhinja-tab");
let obrociClick = document.getElementById("obroci-tab");
let specijalitetiClick = document.getElementById("specijaliteti-tab");
let pohovanoClick = document.getElementById("pohovano-tab");
let mesoClick = document.getElementById("meso-tab");
let sendviciClick = document.getElementById("sendvici-tab");
let palacinkeClick = document.getElementById("palacinke-tab");
let salateClick = document.getElementById("salate-tab");

// let tabs = document.querySelectorAll(`.nav-item`);

let target = document.querySelector("#menu-target");

// for (let tab of tabs) {
// 	tab.onclick = () => {
// 		 console.log("tab");
// 	target.scrollIntoView({behavior: 'smooth'});
// }
// }


kuvanaClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
italijanskaClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
obrociClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
specijalitetiClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
pohovanoClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
mesoClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
sendviciClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
palacinkeClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})
salateClick.addEventListener("click", function() {
	target.scrollIntoView({behavior: 'smooth'});
})

// //  active link on click
// $(document).on('click', 'ul li', function() {
//   $(this).addClass('active').siblings().removeClass('active');
// });

});
let burger = document.querySelector(`.navbar-toggler`);
burger.style.display = "none";

document.onscroll = () => {
  if (window.scrollY >= 370 && window.innerWidth < 1200) {
   burger.style.display = "block";
  }
  else {
  	burger.style.display = "none";
  }
}

// mailer

const emreg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
						textreg = /[A-Za-z.,?!"';:čćžšđČĆŽŠĐ ]/g,
						imereg = /[A-Za-zčćžšđČĆŽŠĐ ]/g
						ime = document.querySelector('#name'),
						em = document.querySelector('#email'),
						poruka = document.querySelector('#message'),
						greska = document.querySelector('.greska'),
						submit = document.querySelector('#mailer');

submit.onclick = (e) => {
	e.preventDefault();
	if(ime.value == "") {
		greska.innerHTML = "Unesite vaše ime!";
	}
	else if (!ime.value.match(imereg)) {
		greska.innerHTML = "Proverite kako ste uneli vaše ime!";
	}
	else if (em.value == "") {
		greska.innerHTML = "Unesite vaš email!";
	}
	else if (!em.value.match(emreg)) {
		greska.innerHTML = "Proverite kako ste uneli vaš email!";
	}
	else if (poruka.value == "") {
		greska.innerHTML = "Niste uneli poruku!";
	}
	else if (!poruka.value.match(textreg)) {
		greska.innerHTML = "Proverite sadržaj svoje poruke!";
	}
	else if (poruka.value.length > 1800) {
		greska.innerHTML = "Vaša poruka mora biti kraća od 1800 karaktera!";
	}
	else {
		greska.innerHTML = "";
		// var link = `mailto:mail@yahoo.com&subject="poruka sa sajta"&body=${poruka.value}`;

  // window.location.href = link;
  console.log("pošalji mail")
	}
}
