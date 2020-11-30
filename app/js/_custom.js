document.addEventListener("DOMContentLoaded", function() {

//search animation input
function searchAnitmationInput() {
	const butsSearch = document.querySelectorAll('.search_form__btn')
	for (let but of butsSearch){
			but.addEventListener('click', function(event) {
		this.parentElement.classList.toggle('search_form--active');
	})
	}
}
searchAnitmationInput();


//append phone link
function appendPhoneLink(){
	const phoneElements = document.querySelectorAll('.pone_item');

	phoneElements.forEach((e)=>{
		let newLink = 'tel:+7' + e.textContent.replace(/-/g, "").replace(/ /g, "").slice(1)
		e.href = newLink;
	})

}
appendPhoneLink()


//Promo slider
$('.promo_slider').slick({
	prevArrow: $('.slider_nav__prev'),
	nextArrow: $('.slider_nav__next'),	
	slidesToShow: 1,
	infinite: true,
	arrows: true,
	autoplay: true,
	autoplaySpeed: 4000,
});

//Licences slider
$('.licences_slider').slick({
	prevArrow: $('.licences_nav__prev'),
	nextArrow: $('.licences_nav__next'),	
	slidesToShow: 3,
	infinite: true,
	arrows: true,
	responsive: [
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 2
		}
	},
	{
		breakpoint: 768,
		settings: {
			slidesToShow: 1
		}
	}
	]
});




// Animate number
function animateNumber(){
	var numbers = document.getElementsByClassName('num_item_anim');
	var numbersFirst = numbers[0],
	numbersSecond = numbers[1],
	numbersThird = numbers[2];

	function animateNumbers(elem, speedAnimate, step){
		var number = elem;
		numberTop = number.getBoundingClientRect().top - 400;

		let start = +number.innerHTML,
		end = +number.dataset.max;


		window.addEventListener('scroll', function onScroll() {
			if(window.pageYOffset > numberTop - window.innerHeight / 2)  {
				this.removeEventListener('scroll', onScroll);
				var interval = setInterval(function() {
					start = start + step
					number.innerHTML = ++start;
					if(start >= end) {
						clearInterval(interval);
						number.innerHTML = end
					}
				}, speedAnimate)
			}
		})
	}

	animateNumbers(numbersFirst, 200, 1);
	animateNumbers(numbersSecond, 50, 1);
	animateNumbers(numbersThird, 1, 150);
}
animateNumber()


// putGuttersWidth
function putGuttersWidth() {
	let widthBody = document.querySelector('body').offsetWidth
	let widthGutters = ((widthBody - 1180) / 2)

	let gutters = document.querySelectorAll('.gutters')


	for(let gut of gutters) {
		gut.style.width = widthGutters + 'px'
	}
}
putGuttersWidth();


//Mask input
$("input[type=tel").mask("+9(999) 999-9999")


//Top button
$(window).scroll(function() {
	if($(this).scrollTop() > 500) {
		$('#topNubex').fadeIn();
	} else {
		$('#topNubex').fadeOut();
	}
});

$('#topNubex').click(function() {
	console.log('fired')
	$('body,html').animate({scrollTop:0},700);
})


//location click
function openLocation() {
	const locationBtn = document.querySelector('.location')
	const locationBtnMobile = document.querySelector('.mobile_info__geo')
	const locationMenu = document.querySelector('.header_loc')
	const locationBtnClose = document.querySelector('.header_loc__item--close')

	locationBtn.addEventListener('click', function(event) {
		locationMenu.classList.toggle('header_loc--active');
	})

	locationBtnMobile.addEventListener('click', function(event) {
		locationMenu.classList.toggle('header_loc--active');
	})

	locationBtnClose.addEventListener('click', function(event) {
		locationMenu.classList.toggle('header_loc--active');
	})


}
openLocation();



//mobile open menu
function mobileOpenMenu(){
	const burger = document.querySelector('.mobile_info__burger')
	const mobileMenu = document.querySelector('.mobile_menu')
	const mobileInfoBlock = document.querySelector('.mobile_info')

		burger.addEventListener('click', function() {
		mobileMenu.classList.toggle('mobile_menu--active');
		mobileInfoBlock.classList.toggle('mobile_info--active');
	})
}
mobileOpenMenu();

});
	