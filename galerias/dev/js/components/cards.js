export const HandlerCard = (function() {

	let evtRevealModalCard = function(){
		// Revisar que el evento exista 
		let classRevel = document.getElementsByClassName("m-cardMall__switchReveal");
		for (var i = 0; i < classRevel.length; i++) {
			classRevel[i].addEventListener("click", function(event){
				let idCard = this.classList[2];
				if( document.getElementById(idCard).classList.contains("m-cardMall__modal--hidden") )
				{
					document.getElementById(idCard).classList.remove("m-cardMall__modal--hidden");
					document.getElementById(idCard).classList.add("m-cardMall__modal--show");
				}
			}, false);
		}
	}

	let evtCloseModalCard = function(){
		// Revisar que el evento exista 
		let classRevel = document.getElementsByClassName("m-cardMall__switchClose");
		for (var i = 0; i < classRevel.length; i++) {
			classRevel[i].addEventListener("click", function(event){
				let idCard = this.classList[2];
				if( document.getElementById(idCard).classList.contains("m-cardMall__modal--show") )
				{
					document.getElementById(idCard).classList.remove("m-cardMall__modal--show");
					document.getElementById(idCard).classList.add("m-cardMall__modal--hidden");
				}
			}, false);
		}
	}

	let evtCards = function() {
			evtRevealModalCard();
			evtCloseModalCard();
	}

	return {
			evtCards: evtCards
	};
})();