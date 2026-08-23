$(function() {
$('.slider2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 3000,
  autoplaySpeed: 0,
  infinite: true, 
  dots: true, 
  centerMode: true,
  centerPadding: '5%',
  arrows:false,
});
});


$(window).on('scroll', function() {
  $('.fade-up').each(function() {
    let target = $(this).offset().top;
    let scroll = $(window).scrollTop();
    let windowHeight = $(window).height();
    if (scroll > target - windowHeight + 100) {
      $(this).addClass('show');
    }
  });
});

window.addEventListener('load', function () {
	var $button = document.querySelector('.toggle-menu-btn');
	var $menu = document.querySelector('.header-inner');
	$button.addEventListener('click', function () {
		if ($menu.classList.contains('is-show')) {
			$menu.classList.remove('is-show');
			$button.classList.remove('is-show');
		}
		else {
			$menu.classList.add('is-show');
			$button.classList.add('is-show');
		}
	});
});