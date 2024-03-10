new Swiper('.slider-container', {
	//Стрелки
	navigation: {
		nextEl: '.slider__button-next ',
		prevEl: '.slider__button-prev '

	}
})

new Swiper('.slider2-container', {
	//Стрелки
	navigation: {
		nextEl: '.slider2__button-next',
		prevEl: '.slider2__button-prev '

	},
	slidesPerView: 8,
	// slidesPerGroup:2, для пролитывания 2 слайдов
});

