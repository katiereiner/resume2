// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(document).ready(function() {
	
	// $('#katie').mouseenter(function() {
	// 	$('#katie').stop().animate({ fontSize : '25px' });
	// 	$('#katie').mouseleave(function() {
	// 		$('#katie').stop().animate({ fontSize : '20px' });
	// 	});
	// });
	// 	$('#resume').mouseenter(function() {
	// 	$('#resume').stop().animate({ fontSize : '25px' });
	// 	$('#resume').mouseleave(function() {
	// 		$('#resume').stop().animate({ fontSize : '20px' });
	// 	});
	// });
	// 		$('#about').mouseenter(function() {
	// 	$('#about').stop().animate({ fontSize : '25px' });
	// 	$('#about').mouseleave(function() {
	// 		$('#about').stop().animate({ fontSize : '20px' });
	// 	});
	// });
	// 			$('#mywork').mouseenter(function() {
	// 	$('#mywork').stop().animate({ fontSize : '25px' });
	// 	$('#mywork').mouseleave(function() {
	// 		$('#mywork').stop().animate({ fontSize : '20px' });
	// 	});
	// });
	// 				$('#contact').mouseenter(function() {
	// 	$('#contact').stop().animate({ fontSize : '25px' });
	// 	$('#contact').mouseleave(function() {
	// 		$('#contact').stop().animate({ fontSize : '20px' });
	// 	});
	// });



		// $(".michigan").hide();
		// $(".lse").hide();
		// $(".dev").hide();

	$(".michigan").on('click', '.mich_holder', function(e) {
		e.preventDefault();
		$('.michigan').slideToggle('slow', function () {
		});
	});



	$(".lse").on('click', '.lse_holder', function(e) {
		e.preventDefault();
		$('.lse').slideToggle('slow', function () {
		});
	});


	$(".dev").on('click', '.dev_holder', function(e) {
		e.preventDefault();
		$('.dev').slideToggle('slow', function () {
		});
	});
 });
