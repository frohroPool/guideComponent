export const HandlerCarousel = (function() {

	let evtMobile = function(){
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
		console.log('Eventos para Mobile')
	}

	let evtDesktop = function(){
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

	let evtCarousel = function() {
		evtDesktop();
		evtMobile();
	}

	return {
			evtCarousel: evtCarousel
	};
})();