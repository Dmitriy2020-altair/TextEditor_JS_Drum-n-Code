'use strict';


const colorPicker = document.querySelector('#text-color');
const textContent = document.querySelectorAll('.text-editor__content-item');
const allFontSizeSelectors = document.querySelectorAll('.toolbar__item-font-size');

textContent.forEach(item => item.style.color = localStorage.pickedColor);
colorPicker.value = localStorage.pickedColor;
colorPicker.addEventListener('input', colorEditor);


function colorEditor(event) {

	textContent.forEach(function (textContent) {
		let newColor = event.target.value;

		localStorage.setItem('pickedColor', `${newColor}`);
		textContent.style.color = newColor;
	});
}

function fontSizeEditor(event) {

	textContent.forEach(function (textContent) {
		let newFontSize = event.target.value;

		localStorage.setItem('choosenFont', `${newFontSize}`);
		textContent.style.fontSize = `${newFontSize}px`;
	})
	console.log(localStorage.newFontSize);
}

// fontSizeEditor();

function clear() {
	const resetButton = document.querySelector('.toolbar__reset-button');
	resetButton.addEventListener('click', () => localStorage.clear());
}
clear();
