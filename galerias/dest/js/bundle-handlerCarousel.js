(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var HandlerCarousel = exports.HandlerCarousel = function () {

	var evtMobile = function evtMobile() {
		// Revisar que el evento exista 
		// let classRevel = document.getElementsByClassName("revealModalCard");
		// for (var i = 0; i < classRevel.length; i++) {
		// 	classRevel[i].addEventListener("click", function(event){
		// 		let idCard = this.classList[2];
		// 		if( document.getElementById(idCard).classList.contains("modal_hidden") )
		// 		{
		// 			document.getElementById(idCard).classList.remove("modal_hidden");
		// 			document.getElementById(idCard).classList.add("modal_show");
		// 		}
		// 	}, false);
		// }
		console.log('Eventos para Mobile');
	};

	var evtDesktop = function evtDesktop() {
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

	var evtCarousel = function evtCarousel() {
		evtDesktop();
		evtMobile();
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