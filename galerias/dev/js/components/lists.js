export const Lists = (function() {
	let privateVariable = "list";
	var showCssRule = false;
	var showHtmlRule = false;

	let simpleList = function() {
		console.log("simpleList JS");
	}

	let iconList = function() {
		console.log("iconList JS");
	}

	let iconTextList = function() {
		// privateMethod();
		console.log("iconTextList JS");
	}

	let getAllCss = function(){
		// Evento para obtener el codigo CSS de la lista de componentes
		// Revisar que el evento exista 
		let btn = document.getElementsByClassName("getStyle");
		btn[0].addEventListener("click", function(){
			let cssContainer = document.getElementById("showAllCssRules");
			if(!showCssRule){
				showCssRule = true;
				let currentBasicStyle = document.styleSheets[2];
				console.log(currentBasicStyle);
				let rules = currentBasicStyle.cssRules;
				let listCssRules = document.createElement("ul");
				var itemCssRules,txtRule;
				for (var i = 0; i < rules.length; i++) {
					// console.log(rules[i].cssText,'\n');
					txtRule = document.createTextNode(rules[i].cssText);
					itemCssRules = document.createElement("li");
					itemCssRules.appendChild(txtRule);
					listCssRules.appendChild(itemCssRules);
				}
				cssContainer.appendChild(listCssRules);
			}
			if(cssContainer.classList.contains("hiddeCssRule")){
				cssContainer.classList.remove("hiddeCssRule");
				cssContainer.classList.add("showCssRule");
			}else{
				cssContainer.classList.remove("showCssRule");
				cssContainer.classList.add("hiddeCssRule");
			}
		},false);
	}

	let getAllHtml = function(){
		// Evento para obtener el codigo HTMl de todas las variantes del componente actual
		// Revisar que el evento exista 
		let btn = document.getElementsByClassName("getHTML");
		btn[0].addEventListener("click", function(){
			let htmlContainer = document.getElementById("showAllHtmlRules");
			if(!showHtmlRule){
				showHtmlRule = true;
	
				var trigger = document.getElementsByClassName("btnHtml");
				var arrayHtml = [];
				var htmlCode, ulNode, liNode, divNode, htmlText, brNode;
				for (var i = 0; i < trigger.length; i++) {
					// trigger[i].click();
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
				console.log('componentes encontrados ......',arrayHtml)


				// let currentBasicStyle = document.styleSheets[2];
				// console.log(currentBasicStyle);
				// let rules = currentBasicStyle.cssRules;
				// let listCssRules = document.createElement("ul");
				// var itemCssRules,txtRule;
				// for (var i = 0; i < rules.length; i++) {
				// 	// console.log(rules[i].cssText,'\n');
				// 	txtRule = document.createTextNode(rules[i].cssText);
				// 	itemCssRules = document.createElement("li");
				// 	itemCssRules.appendChild(txtRule);
				// 	listCssRules.appendChild(itemCssRules);
				// }

				// htmlContainer.appendChild(listCssRules);
			}
			if(htmlContainer.classList.contains("hiddeHtmlRule")){
				htmlContainer.classList.remove("hiddeHtmlRule");
				htmlContainer.classList.add("showHtmlRule");
			}else{
				htmlContainer.classList.remove("showHtmlRule");
				htmlContainer.classList.add("hiddeHtmlRule");
			}
		},false);
	}

	let all = function() {
			
			getAllCss();
			getAllHtml();

		// Evento para obtener el codigo HTMl del componente seleccionado
		// Revisar que el evento exista 

		let btnHtml = document.getElementsByClassName("btnHtml");
		for (var i = 0; i < btnHtml.length; i++) {
			btnHtml[i].addEventListener("click", function(event){
				// console.log('clases contenidas dentro del componente selecionados ....',this.classList);
				let idComponent = document.getElementById(this.classList[0]);
				// console.log(idComponent.outerHTML);
				document.getElementById('code-'+this.classList[0]).innerText = idComponent.outerHTML;
			}, false);
		}
	

	}

	return {
			simpleList: simpleList,
			iconList: iconList,
			iconTextList: iconTextList,
			all: all
	};
})();