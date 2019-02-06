const accordion = function() {

	// через цикл for

	// const accordionHeader = document.querySelectorAll(".accordion__header");

	// for (let i = 0; i < accordionHeader.length; i++) {
	// 	accordionHeader[i].addEventListener("click", function(e) {
	// 		e.preventDefault();

	// 		if(!this.classList.contains("active")) {
	// 			for(let j = 0; j < accordionHeader.length; j++) {
	// 				accordionHeader[j].classList.remove("active");
	// 				accordionHeader[j].nextElementSibling.classList.remove("active");
	// 			}
	// 			this.classList.add("active");
	// 			this.nextElementSibling.classList.add("active");
	// 		}else {
	// 			this.classList.remove("active");
	// 			this.nextElementSibling.classList.remove("active");
	// 		}
	// 	});
	// }

	// через цикл foeEach

	const accordionHeader = Array.from(document.querySelectorAll(".accordion__header"));

	accordionHeader.forEach(function(elem) {
		
		elem.addEventListener("click", function(e) {
			e.preventDefault();

			if(!elem.classList.contains("active")) {

				accordionHeader.forEach(function(elem) {
					elem.classList.remove("active");
					elem.nextElementSibling.classList.remove("active");
				});

				elem.classList.add("active");
				elem.nextElementSibling.classList.add("active");
			}else {
				elem.classList.remove("active");
				elem.nextElementSibling.classList.remove("active");
			}
		});
	});
};

accordion();