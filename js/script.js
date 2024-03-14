"use strict"

//Menu Burger

const headerBurger = document.querySelector('.icon-menu');
const headerMenu = document.querySelector('.menu__body');

if (headerBurger) {
	headerBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		headerBurger.classList.toggle('_active');
		headerMenu.classList.toggle('_active');
	})
}

