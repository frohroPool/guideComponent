(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Handler = exports.Handler = function () {
	var privateVariable = "list";
	var showCssRule = false;
	var showHtmlRule = false;

	var getAllCss = function getAllCss() {
		// Evento para obtener el codigo CSS de la lista de componentes
		// Revisar que el evento exista 
		var btn = document.getElementsByClassName("getStyle");
		btn[0].addEventListener("click", function () {
			var cssContainer = document.getElementById("showAllCssRules");
			if (!showCssRule) {
				showCssRule = true;
				var currentBasicStyle = document.styleSheets[2];
				console.log(currentBasicStyle);
				var rules = currentBasicStyle.cssRules;
				var listCssRules = document.createElement("ul");
				var itemCssRules, txtRule;
				for (var i = 0; i < rules.length; i++) {
					// console.log(rules[i].cssText,'\n');
					txtRule = document.createTextNode(rules[i].cssText);
					itemCssRules = document.createElement("li");
					itemCssRules.appendChild(txtRule);
					listCssRules.appendChild(itemCssRules);
				}
				cssContainer.appendChild(listCssRules);
			}
			if (cssContainer.classList.contains("hiddeCssRule")) {
				cssContainer.classList.remove("hiddeCssRule");
				cssContainer.classList.add("showCssRule");
			} else {
				cssContainer.classList.remove("showCssRule");
				cssContainer.classList.add("hiddeCssRule");
			}
		}, false);
	};

	var getAllHtml = function getAllHtml() {
		// Evento para obtener el codigo HTMl de todas las variantes del componente actual
		// Revisar que el evento exista 
		var btn = document.getElementsByClassName("getHTML");
		btn[0].addEventListener("click", function () {
			var htmlContainer = document.getElementById("showAllHtmlRules");
			if (!showHtmlRule) {
				showHtmlRule = true;

				var trigger = document.getElementsByClassName("btnHtml");
				var arrayHtml = [];
				var htmlCode, ulNode, liNode, divNode, htmlText, brNode;
				for (var i = 0; i < trigger.length; i++) {
					htmlCode = document.getElementById(trigger[i].classList[0]);

					brNode = document.createElement("br");
					ulNode = document.createElement("ul");
					liNode = document.createElement("li");
					divNode = document.createElement("div");
					htmlText = document.createTextNode(htmlCode.outerHTML);

					divNode.appendChild(htmlText);
					liNode.appendChild(divNode);
					ulNode.appendChild(liNode);

					htmlContainer.appendChild(ulNode);
					htmlContainer.appendChild(brNode);
					arrayHtml.push(htmlCode);
				}
				console.log('componentes encontrados ......', arrayHtml);
			}
			if (htmlContainer.classList.contains("hiddeHtmlRule")) {
				htmlContainer.classList.remove("hiddeHtmlRule");
				htmlContainer.classList.add("showHtmlRule");
			} else {
				htmlContainer.classList.remove("showHtmlRule");
				htmlContainer.classList.add("hiddeHtmlRule");
			}
		}, false);
	};

	var all = function all() {

		getAllCss();
		getAllHtml();

		// Evento para obtener el codigo HTMl del componente seleccionado
		// Revisar que el evento exista 
		var btnHtml = document.getElementsByClassName("btnHtml");
		for (var i = 0; i < btnHtml.length; i++) {
			btnHtml[i].addEventListener("click", function (event) {
				// console.log('clases contenidas dentro del componente selecionados ....',this.classList);
				var idComponent = document.getElementById(this.classList[0]);
				// console.log(idComponent.outerHTML);
				document.getElementById('code-' + this.classList[0]).innerText = idComponent.outerHTML;
			}, false);
		}
	};

	return {
		all: all
	};
}();

},{}],2:[function(require,module,exports){
"use strict";

var _handler = require("../components/handler");

document.addEventListener("DOMContentLoaded", function (event) {
	_handler.Handler.all();
});

},{"../components/handler":1}]},{},[2]);
