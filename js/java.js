$(function() {
$('.parallax-window').parallax({imageSrc: '../img/header.jpg'}); //Паралакс эффект к фото 
$(window).on("load", function() {
	$(".loader_inner").fadeOut();
	$(".loader").fadeOut();
	});
$('img.foto_style_1').css("display","block").animate({left: "+=74%", top: "-=90%"}, 1700);
    setTimeout (function(){
$('.foto_style_2').css("display","block").animate({left: "+=79.8%", top: "-=89%"}, 800);
}, 700);
    setTimeout (function(){
$('.foto_style_3').css("display","block").animate({left: "+=86%", top: "-=90%"}, 900);
}, 800);
    setTimeout (function(){
$('.foto_style_4').css("display","block").animate({left: "+=92.5%", top: "-=89.5%"}, 1000);
}, 900);
 $('img.foto_style_5').css("display","block").animate({left: "+=75%", top: "+=35%",}, 1700);   
  setTimeout (function(){
$('.foto_style_6').css("display","block").animate({left: "+=80.8%", top: "+=40%"}, 800);
}, 700);
    setTimeout (function(){
$('.foto_style_7').css("display","block").animate({left: "+=87.8%", top: "+=35%"}, 800);
}, 700);
    setTimeout (function(){
$('.foto_style_8').css("display","block").animate({left: "-=92.8%", top: "+=30%"}, 800);
}, 1500);
    setTimeout (function(){
$('.foto_style_9').css("display","block").animate({left: "-=88%", top: "+=27%"}, 800);
}, 1600);
    setTimeout (function(){
$('.foto_style_10').css("display","block").animate({left: "-=83%", top: "+=30%"}, 800);
}, 1700);
    setTimeout (function(){
$('.foto_style_11').css("display","block").animate({left: "-=78%", top: "+=30%"}, 800);
}, 1800);
    setTimeout (function(){
$('.foto_style_12').css("display","block").animate({left: "-=73%", top: "+=30%"}, 800);
}, 1900);
   setTimeout (function(){
$('.foto_style_13').css("display","block").animate({left: "-=68%", top: "+=30%"}, 800);
}, 2000);
  setTimeout (function(){
$('.foto_style_14').css("display","block").animate({left: "-=92.8%", top: "-=90%"}, 800);
}, 1700);
    setTimeout (function(){
$('.foto_style_15').css("display","block").animate({left: "-=88.5%", top: "-=90%"}, 800);
}, 1800);
    setTimeout (function(){
$('.foto_style_16').css("display","block").animate({left: "-=84%", top: "-=90%"}, 800);
}, 1900);
    setTimeout (function(){
$('.foto_style_17').css("display","block").animate({left: "-=79.5%", top: "-=90%"}, 800);
}, 2000);
     setTimeout (function(){
$('.foto_style_18').css("display","block").animate({left: "-=74.5%", top: "-=90%"}, 800);
}, 2100);
    setTimeout (function(){
$('.foto_style_19').css("display","block").animate({left: "-=70%", top: "-=90%"}, 800);
}, 2200);
    setTimeout (function(){
$('.foto_style_20').css("display","block").animate({left: "-=65%", top: "-=90%"}, 800);
}, 2300);
    setTimeout (function(){
$('.foto_style_21').css("display","block").animate({left: "-=60.8%", top: "-=90%"}, 800);
}, 2400);
    setTimeout (function(){
$('.foto_style_22').css("display","block").animate({left: "-=56%", top: "-=90%"}, 800);
}, 2500);   
$(".emeil_templates").mixItUp();
$('.filter').click(function(){
    $('.block_for_templ').fadeIn();    
}); 
$(".read_all").animated("shake");
$(".read_all").click(function(){
 $('.dispNon').toggle("slow");
    $(".read_all").toggleClass("mar_bot");   
});    
$('.popup-with-zoom-anim').magnificPopup({
		type: 'inline',

		fixedContentPos: false,
		fixedBgPos: true,

		overflowY: 'auto',

		closeBtnInside: true,
		preloader: false,
		
		midClick: true,
		removalDelay: 300,
		mainClass: 'my-mfp-zoom-in'
	});

    
    
    
});