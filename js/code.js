$(document).ready(function(e) {
	/* h_menu_mob */
	// $('.m_ctrl').on('click', function() {
	// 	$('.h_menu').slideToggle(300);
	// });

/* Мобильное меню */
 $('.m_ctrl').on('click', function () {
  $('.h_menu_mob_wr').toggle();
  $('.fog').toggle()
 });

	/*Слайдер*/
	$('.slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		// arrows: false,
		dots: true,
		rows: 0
	});

	/*Карусель*/
	$('.carousel').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		rows: 2,
		// autoplay: true,
		// autoplaySpeed: 5000,
		// arrows: false,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
     slidesToShow: 1,
     rows: 1
				}
			}
		]
	});

	/*editor*/
	$('.bi5h_ctrl').on('click', function() {
		$(this).parent().toggleClass('close');
		$(this).parent().siblings('.bi5_body ').slideToggle(300);
	});

	/*fancybox*/
	$("[data-fancybox]").fancybox({
		buttons : [
			'close'
		]
	});

	/*Селект в попапе*/
	// $("[data-fancybox]").fancybox({
	// 	buttons : [
	// 		'close'
	// 	],
	// 	afterShow: function(instance, current) {
	// 		$('input, select').styler().trigger('refresh')
	// 		$('.switch input').styler('destroy');
	// 	}
	// });

	/*tel_mask*/
	$(".tel_mask").mask("+38 999 999 99 99");

	/*Форма*/
	$('input, select').styler({
		selectPlaceholder: '',
		selectVisibleOptions: 5
	});
	$('.custom_radio input').styler('destroy');
	$('.switch_a input').styler('destroy');

	/*Вкладки*/
	$('.tabs_wr').tabs();
});