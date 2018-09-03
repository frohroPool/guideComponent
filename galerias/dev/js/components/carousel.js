export const HandlerCarousel = (function() {
	let slideCount, position, posTotal = 0, wCarousel;

	let isTouch = function(){
		try{ 
			document.createEvent("TouchEvent"); 
			return true; 
		}
		catch(e){ 
			 return false;
		}
	}
	let evtTouchCarousel = function(){
		// Revisar que el evento exista 
		let movX;
		// console.log('Es Mobile');
		let carousel = document.getElementById('imagesList');
		
		
		carousel.addEventListener('touchstart', (e) =>{
			if(e.targetTouches.length == 1){
				let touch = e.targetTouches[0];
				// console.log('Start : '+touch.pageX+'px');
				movX = touch.pageX;
				// console.log(e.targetTouches);
			}
		},false);
		let distance;
		carousel.addEventListener('touchend', (e) =>{
			console.log('-------', e);
			if(e.changedTouches.length == 1){
				let touch = e.changedTouches[0];
				if(movX > touch.pageX){
					distance = movX - touch.pageX;
					if(distance > 50){
						document.getElementById('nextImage').click();
					}

				}
				if(movX < touch.pageX){
					distance = touch.pageX - movX;
					if(distance > 50){
						document.getElementById('prevImage').click();
					}
				}
			}
		},false);
	}

	let evtControlsCarousel = function(){
		// Revisar que el evento exista 
		// let classRevel = document.getElementsByClassName("closeModalCard");
		// for (var i = 0; i < classRevel.length; i++) {
		// 	classRevel[i].addEventListener("click", function(event){
		// 		let idCard = this.classList[2];
		// 		if( document.getElementById(idCard).classList.contains("modal_show") )
		// 		{
		// 			document.getElementById(idCard).classList.remove("modal_show");
		// 			document.getElementById(idCard).classList.add("modal_hidden");
		// 		}
		// 	}, false);
		// }
		console.log('Eventos para Desktop')
	}

	let setTransform = function(currentCarousel){
		console.log('WCarousel before: '+ currentCarousel.carouselContainer.style.transform);
		currentCarousel.carouselContainer.style.transform = 'translate(' + (-currentCarousel.position * currentCarousel.carouselContainer.offsetWidth) + 'px)';
		console.log('WCarousel after: '+ currentCarousel.carouselContainer.style.transform);
		// console.log(itemCount = document.querySelectorAll('.imagesList li').length, currentCarousel.carouselContainer.offsetWidth);
	}

	let controlsCarousel = function(carousels){
		let crls = carousels;

		// window.addEventListener('resize', () => {
		// 	pos = 0;
		// 	setTransform();
		// }, false);


		let nextSlide, prevSlide;
		for (var i = 0; i < crls.length; i++) {
			// prev Event
			crls[i].carouselPrev.addEventListener("click", () => {
				crls[0].position = Math.max(crls[0].position - 1, 0);
				console.log('prev : '+crls[0].position);
				setTransform(crls[0]);
			},false);
			// next Event
			crls[i].carouselNext.addEventListener("click", () => {
				crls[0].position = Math.min(crls[0].position + 1, crls[0].elements - 1);
				// console.log('next : '+crls[0].position+' count : '+crls[0].elements);
				setTransform(crls[0]);
			},false);

		}
		
		
		if(isTouch()){
			// evtTouchCarousel();
		}else{
			console.log('No es touch');
		}

	}

	let evtCarousel = function() {
		// taking control of all carousels
		let carouselsData = [];
		let carousels = document.getElementsByClassName('carousel__container');
		for (var i = 0; i < carousels.length; i++) {
			carouselsData.push({
				carouselWrapper : document.getElementById(carousels[i].id.split('__')[0]),
				carouselContainer : carousels[i],
				carouselPrev : document.getElementById(carousels[i].id.split('__')[0]+'__prev'),
				carouselNext : document.getElementById(carousels[i].id.split('__')[0]+'__next'),
				elements : carousels[i].childElementCount,
				position : 0
			});
		}
		console.log(carouselsData);
		controlsCarousel(carouselsData);
	}

	return {
		evtCarousel: evtCarousel
	};
})();