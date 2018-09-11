(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var HandlerCarousel = exports.HandlerCarousel = function () {
	var slideCount = void 0,
	    position = void 0,
	    posTotal = 0,
	    wCarousel = void 0;

	var isTouch = function isTouch() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	};
	var evtTouchCarousel = function evtTouchCarousel() {
		// Revisar que el evento exista 
		var movX = void 0;
		// console.log('Es Mobile');
		var carousel = document.getElementById('imagesList');

		carousel.addEventListener('touchstart', function (e) {
			if (e.targetTouches.length == 1) {
				var touch = e.targetTouches[0];
				// console.log('Start : '+touch.pageX+'px');
				movX = touch.pageX;
				// console.log(e.targetTouches);
			}
		}, false);
		var distance = void 0;
		carousel.addEventListener('touchend', function (e) {
			console.log('-------', e);
			if (e.changedTouches.length == 1) {
				var touch = e.changedTouches[0];
				if (movX > touch.pageX) {
					distance = movX - touch.pageX;
					if (distance > 50) {
						document.getElementById('nextImage').click();
					}
				}
				if (movX < touch.pageX) {
					distance = touch.pageX - movX;
					if (distance > 50) {
						document.getElementById('prevImage').click();
					}
				}
			}
		}, false);
	};

	var evtControlsCarousel = function evtControlsCarousel() {
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
		console.log('Eventos para Desktop');
	};

	var setTransform = function setTransform(currentCarousel) {
		console.log('WCarousel before: ' + currentCarousel.carouselContainer.style.transform);
		currentCarousel.carouselContainer.style.transform = 'translate(' + -currentCarousel.position * currentCarousel.carouselContainer.offsetWidth + 'px)';
		console.log('WCarousel after: ' + currentCarousel.carouselContainer.style.transform);
		// console.log(itemCount = document.querySelectorAll('.imagesList li').length, currentCarousel.carouselContainer.offsetWidth);
	};

	var controlsCarousel = function controlsCarousel(carousels) {
		var crls = carousels;

		// window.addEventListener('resize', () => {
		// 	pos = 0;
		// 	setTransform();
		// }, false);


		var nextSlide = void 0,
		    prevSlide = void 0;
		for (var i = 0; i < crls.length; i++) {
			// prev Event
			crls[i].carouselPrev.addEventListener("click", function () {
				crls[0].position = Math.max(crls[0].position - 1, 0);
				console.log('prev : ' + crls[0].position);
				setTransform(crls[0]);
			}, false);
			// next Event
			crls[i].carouselNext.addEventListener("click", function () {
				crls[0].position = Math.min(crls[0].position + 1, crls[0].elements - 1);
				// console.log('next : '+crls[0].position+' count : '+crls[0].elements);
				setTransform(crls[0]);
			}, false);
		}

		if (isTouch()) {
			// evtTouchCarousel();
		} else {
			console.log('No es touch');
		}
	};

	var evtCarousel = function evtCarousel() {
		// taking control of all carousels
		var carouselsData = [];
		var carousels = document.getElementsByClassName('carousel__container');
		for (var i = 0; i < carousels.length; i++) {
			carouselsData.push({
				carouselWrapper: document.getElementById(carousels[i].id.split('__')[0]),
				carouselContainer: carousels[i],
				carouselPrev: document.getElementById(carousels[i].id.split('__')[0] + '__prev'),
				carouselNext: document.getElementById(carousels[i].id.split('__')[0] + '__next'),
				elements: carousels[i].childElementCount,
				position: 0
			});
		}
		console.log(carouselsData);
		controlsCarousel(carouselsData);
	};

	return {
		evtCarousel: evtCarousel
	};
}();

},{}],2:[function(require,module,exports){
"use strict";

var _carousel = require("../components/carousel");

document.addEventListener("DOMContentLoaded", function (event) {
	_carousel.HandlerCarousel.evtCarousel();
});

},{"../components/carousel":1}]},{},[2]);
