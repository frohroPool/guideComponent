export const HandlerCard = (function() {

	let evtRevealModalCard = function(){
		// Revisar que el evento exista 
		let classRevel = document.getElementsByClassName("revealModalCard");
		for (var i = 0; i < classRevel.length; i++) {
			classRevel[i].addEventListener("click", function(event){
				let idCard = this.classList[2];
				if( document.getElementById(idCard).classList.contains("card-mall__modal-modal_hidden") )
				{
					document.getElementById(idCard).classList.remove("card-mall__modal-modal_hidden");
					document.getElementById(idCard).classList.add("card-mall__modal-modal_show");
				}
			}, false);
		}
	}

	let evtCloseModalCard = function(){
		// Revisar que el evento exista 
		let classRevel = document.getElementsByClassName("closeModalCard");
		for (var i = 0; i < classRevel.length; i++) {
			classRevel[i].addEventListener("click", function(event){
				let idCard = this.classList[2];
				if( document.getElementById(idCard).classList.contains("card-mall__modal-modal_show") )
				{
					document.getElementById(idCard).classList.remove("card-mall__modal-modal_show");
					document.getElementById(idCard).classList.add("card-mall__modal-modal_hidden");
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