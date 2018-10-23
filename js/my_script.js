$(document).ready(function() {
	
	/*== Magnific popup Модальное окно ==*/

	$(function () {
		$('.popup-modal').magnificPopup({
			type: 'inline',
			preloader: false,
			focus: '#username',
			modal: true
		});

		/*динамический контент*/
		$(document).on('click', '.popup-modal', function (e) {
			$('#flight').html($(this).parent().prev().prev().prev().html());			
			$('#flight-date').html($(this).parent().prev().prev().html());
			$('#plane').html($(this).parent().prev().html());
			
			
		});	

		$(document).on('click', '.popup-modal-dismiss', function (e) {
			e.preventDefault();
			$.magnificPopup.close();
		});
	});

	/*== Плавнй переход по ссылке ==*/
	/*анимация скролла*/
	$('a[href^="#scroll"]').click(function() {
		elementClick = $(this).attr("href");
		destination = $(elementClick).offset().top;
		$('html').animate({scrollTop: destination}, 1000);
		return false;
	});

	/*== Показ подменю по клику ==*/
	$('a[href^="#sub-menu-"]').on('click', function() {
		elementClick = $(this).attr("href");
		$(elementClick).slideToggle();		
		return false;
	});

	/*выделить весь ряд в таблице*/
	$(document).on('mouseover', '.popup-modal', function (e) {
		$(this).parent().prev().prev().prev().addClass('for_over');
		$(this).parent().prev().prev().addClass('for_over');
		$(this).parent().prev().addClass('for_over');
	});
	$(document).on('mouseout', '.popup-modal', function (e) {
		$(this).parent().prev().prev().prev().removeClass('for_over');
		$(this).parent().prev().prev().removeClass('for_over');
		$(this).parent().prev().removeClass('for_over');
	});

});



