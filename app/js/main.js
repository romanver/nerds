$(document).ready(function(){

// появление верхнего меню при скроле вниз начало
    var $menu = $(".wr-popup");

    $(window).scroll(function(){
        if ( $(this).scrollTop() > 80 ){

            $menu.css({"display" : "block"});

        } else if($(this).scrollTop() <= 80 ) {

            $menu.css({"display" : "none"});
        }
    });
// появление верхнего меню при скроле вниз конец

// всплывающее окно с формой начало
	// появление окна
    $('.contact-adress-btn-link').click( function(event){  // лoвим клик пo ссылкe

		event.preventDefault(); // выключaем стaндaртную рoль элементa

		$('.cont-popup').css({'display' : 'block'})
						.animate({'opacity' : '1'}, 200); // плавное появление окна с формой
	});
    // закрытие окна
    $('.form-btn-res').click( function(){  // лoвим клик пo кнопке

		$('.cont-popup').animate({'opacity' : '0'}, 200,  // плавное затухание окна с формой
			function(){
					$(this).css({'display' : 'none'});
		});
	});
// всплывающее окно с формой конец
 });