export const Handler = (function() {
	let privateVariable = "list";
	let showCssRule = false;
	let showHtmlRule = false;

	let findOtherBlocks = function(block,classBlock){
		let classListNames = [classBlock]; 
		let listChild = block.children;
		let numChilds = listChild.length;
		for (var i = 0; i < numChilds; i++) {
			if(_.includes(listChild[i].classList[0],classBlock)){
				if(_.indexOf(classListNames,listChild[i].children[0].className) == -1){
					classListNames.push(listChild[i].children[0].className);
				}
			}
		}
		return classListNames;
	}

	let showHiddeCode = function(el){
		let codeNode = document.getElementById('code-'+el).parentNode.parentNode;
		let viewNode = codeNode.previousElementSibling;
		viewNode.classList.add("hiddeView");
		document.getElementById('code-'+el).parentNode.classList.add("showCode");

		let btnClose = document.getElementById('code-'+el).nextElementSibling;
		btnClose.classList.remove("closeBtnCodeNode--hidde");
		btnClose.addEventListener("click", function(event){
			this.previousElementSibling.innerText = "";
			this.previousElementSibling.parentNode.classList.remove("showCode");
			this.classList.add("closeBtnCodeNode--hidde");
			this.parentNode.parentNode.previousElementSibling.classList.remove("hiddeView");
		}, false);
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
				// console.log(currentBasicStyle);
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
			if(htmlContainer.classList.contains("hiddeHtmlRule")){
				htmlContainer.classList.remove("hiddeHtmlRule");
				htmlContainer.classList.add("showHtmlRule");
			}else{
				htmlContainer.classList.remove("showHtmlRule");
				htmlContainer.classList.add("hiddeHtmlRule");
			}
		},false);
	}

	let getHtmlComponent = function(){
		// Evento para obtener el codigo HTMl del componente seleccionado
		// Revisar que el evento exista 
		let btnHtml = document.getElementsByClassName("btnHtml");
		let idComponent;
		for (var i = 0; i < btnHtml.length; i++) {
			btnHtml[i].addEventListener("click", function(event){
				console.log('clases contenidas dentro del componente selecionados ....',this.classList);
				let allClassMatch = document.getElementsByClassName(this.classList[0]);
				console.log(allClassMatch)
				if(allClassMatch.length > 1){
					for (var x = 0; x < allClassMatch.length; x++) {
						if(allClassMatch[x].id != ""){
							idComponent = document.getElementById(allClassMatch[x].id);
						}
					}
				}else{
					idComponent = document.getElementById(this.classList[0]);
				}
				// console.log(idComponent.outerHTML);
				document.getElementById('code-'+this.classList[0]).innerText = idComponent.outerHTML;
				showHiddeCode(this.classList[0]);
			}, false);
		}
	}

	let getCssComponent = function(){
		// Evento para obtener el codigo HTMl del componente seleccionado
		// Revisar que el evento exista 
		let currentBasicStyle = document.styleSheets[2];
		let rules = currentBasicStyle.cssRules;

		var currentRule,currentComponent,css='';
		let btnCss = document.getElementsByClassName("btnCss");
		for (var i = 0; i < btnCss.length; i++) {
			btnCss[i].addEventListener("click", function(event){
				// console.log('rules ...  ',rules);
				let idComponent = document.getElementById(this.classList[0]);
				let elmt = this.classList[0].split('-')[0], cls=[];
				if( elmt == 'o' || elmt == 't' || elmt == 'p'){
					cls = findOtherBlocks(idComponent,this.classList[0]);
				}else{
					cls.push(this.classList[0]);
				}
				let lengthCls = cls.length;
				for (var i = 0; i < rules.length; i++) {
					currentRule = rules[i].selectorText;
					if(currentRule != undefined){
						for (var a = 0; a < lengthCls; a++) {
							currentComponent = '.'+cls[a];
							if(_.includes(currentRule,currentComponent)){
								css += rules[i].cssText + '\n';
							}
						}
					}else{
						for (var a = 0; a < lengthCls; a++) {
							currentComponent = '.'+cls[a];
							if(_.includes(rules[i].cssText,currentComponent) ){
								css += rules[i].cssText + '\n';
							}
						}
					}
				}
				document.getElementById('code-'+this.classList[0]).innerText = css;
				css='';
				showHiddeCode(this.classList[0]);
			}, false);
		}
	}

	let changeModes = function(){
		// Evento para poder modificar los modos de los componentes
		// Revisar que el evento exista 
		let modifiersComponent = document.getElementsByClassName("modifiersComponent");
		let idComponent;
		for (var i = 0; i < modifiersComponent.length; i++) {
			modifiersComponent[i].addEventListener("click", function(event){
				document.getElementById(this.getAttribute('for')).checked = true;
				let preId = this.getAttribute('for').split('--')[0];
				let elId = document.getElementById(preId);
				elId.classList.remove(elId.classList[1])
				elId.classList.add(this.getAttribute('for'))
				// Verificar si el codigo HTML del componente ya esta visualizado
				if( document.getElementById('code-'+preId).innerText  != '' ){
					idComponent = document.getElementById(preId);
					document.getElementById('code-'+preId).innerText = idComponent.outerHTML;
				}
			}, false);
		}
	}

	let all = function() {
			getAllCss();
			getAllHtml();
			getCssComponent();
			getHtmlComponent();
			changeModes();
	}

	return {
			all: all
	};
})();