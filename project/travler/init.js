$(document).ready(function(){
	
	// Находим блок карусели
	var carousel = $("#carousel");

	// Запускаем плагин карусели
	carousel.owlCarousel({
        // Точки под каруселью
        itemsDesktop: [1600, 4],
        loop: true,
        autoPlay: true,
        autoPlayTimeout: 2000,
        items: 4,
        scrollPerPage: 4
    });
});