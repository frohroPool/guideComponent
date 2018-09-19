(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var Handler = exports.Handler = function () {
	var privateVariable = "list";
	var showCssRule = false;
	var showHtmlRule = false;

	var showHiddeCode = function showHiddeCode(el) {
		var codeNode = document.getElementById('code-' + el).parentNode.parentNode;
		var viewNode = codeNode.previousElementSibling;
		viewNode.classList.add("hiddeView");
		document.getElementById('code-' + el).parentNode.classList.add("showCode");

		var btnClose = document.getElementById('code-' + el).nextElementSibling;
		btnClose.classList.remove("closeBtnCodeNode--hidde");
		btnClose.addEventListener("click", function (event) {
			this.previousElementSibling.innerText = "";
			this.previousElementSibling.parentNode.classList.remove("showCode");
			this.classList.add("closeBtnCodeNode--hidde");
			this.parentNode.parentNode.previousElementSibling.classList.remove("hiddeView");
		}, false);
	};

	var getAllCss = function getAllCss() {
		// Evento para obtener el codigo CSS de la lista de componentes
		// Revisar que el evento exista 
		var btn = document.getElementsByClassName("getStyle");
		btn[0].addEventListener("click", function () {
			var cssContainer = document.getElementById("showAllCssRules");
			if (!showCssRule) {
				showCssRule = true;
				var currentBasicStyle = document.styleSheets[2];
				// console.log(currentBasicStyle);
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
				// console.log('componentes encontrados ......',arrayHtml)
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

	var getHtmlComponent = function getHtmlComponent() {
		// Evento para obtener el codigo HTMl del componente seleccionado
		// Revisar que el evento exista 
		var btnHtml = document.getElementsByClassName("btnHtml");
		var idComponent = void 0;
		for (var i = 0; i < btnHtml.length; i++) {
			btnHtml[i].addEventListener("click", function (event) {
				// console.log('clases contenidas dentro del componente selecionados ....',this.classList);
				var allClassMatch = document.getElementsByClassName(this.classList[0]);
				// console.log(allClassMatch)
				if (allClassMatch.length > 1) {
					for (var x = 0; x < allClassMatch.length; x++) {
						if (allClassMatch[x].id != "") {
							idComponent = document.getElementById(allClassMatch[x].id);
						}
					}
				} else {
					idComponent = document.getElementById(this.classList[0]);
				}
				// console.log(idComponent.outerHTML);
				document.getElementById('code-' + this.classList[0]).innerText = idComponent.outerHTML;
				showHiddeCode(this.classList[0]);
			}, false);
		}
	};

	var getCssComponent = function getCssComponent() {
		// Evento para obtener el codigo HTMl del componente seleccionado
		// Revisar que el evento exista 
		var currentBasicStyle = document.styleSheets[2];
		var rules = currentBasicStyle.cssRules;

		var currentRule,
		    currentComponent,
		    css = '';
		var btnCss = document.getElementsByClassName("btnCss");
		for (var i = 0; i < btnCss.length; i++) {
			btnCss[i].addEventListener("click", function (event) {
				// console.log('rules ...  ',rules);
				var idComponent = document.getElementById(this.classList[0]);
				currentComponent = '.' + this.classList[0];
				for (var i = 0; i < rules.length; i++) {
					currentRule = rules[i].selectorText;
					if (currentRule != undefined) {
						// console.log( 'currentRule : ',currentRule )
						// console.log( 'currentComponent : ',currentComponent )
						if (_.includes(currentRule, currentComponent)) {
							css += rules[i].cssText + '\n';
						} else if (_.includes(currentRule, this.classList[0])) {
							css += rules[i].cssText + '\n';
						}
					} else {
						if (_.includes(rules[i].cssText, currentComponent)) {
							css += rules[i].cssText + '\n';
						}
					}
				}
				document.getElementById('code-' + this.classList[0]).innerText = css;
				css = '';

				showHiddeCode(this.classList[0]);
			}, false);
		}
	};

	var changeModes = function changeModes() {
		// Evento para poder modificar los modos de los componentes
		// Revisar que el evento exista 
		var modifiersComponent = document.getElementsByClassName("modifiersComponent");
		var idComponent = void 0;
		for (var i = 0; i < modifiersComponent.length; i++) {
			modifiersComponent[i].addEventListener("click", function (event) {
				document.getElementById(this.getAttribute('for')).checked = true;
				var preId = this.getAttribute('for').split('--')[0];
				var elId = document.getElementById(preId);
				elId.classList.remove(elId.classList[1]);
				elId.classList.add(this.getAttribute('for'));
				// Verificar si el codigo HTML del componente ya esta visualizado
				if (document.getElementById('code-' + preId).innerText != '') {
					idComponent = document.getElementById(preId);
					document.getElementById('code-' + preId).innerText = idComponent.outerHTML;
				}
			}, false);
		}
	};

	var all = function all() {
		getAllCss();
		getAllHtml();
		getCssComponent();
		getHtmlComponent();
		changeModes();
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
