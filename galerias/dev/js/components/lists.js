export const Lists = (function() {
	let privateVariable = "list";
	var showCssRule = false;

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

	let all = function() {
		let btn = document.getElementsByClassName("getStyle");
		
		// Evento para obtener el codigo CSS de la lista de componentes
		// Revisar que el evento exista 
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


		// Evento para obtener el codigo HTMl del componente seleccionado
		// Revisar que el evento exista 

		let btnHtml = document.getElementsByClassName("btnHtml");
		for (var i = 0; i < btnHtml.length; i++) {
			btnHtml[i].addEventListener("click", function(event){
				console.log('clases contenidas dentro del componente selecionados ....',this.classList);
				let idComponent = document.getElementById(this.classList[0]);
				console.log(idComponent.outerHTML);
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