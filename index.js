'use strict';
class Select {
	constructor(id, initialValue) {
		this.container = document.getElementById(id);
		this.container.querySelector(`option[value="${initialValue}"]`).setAttribute('selected', true);
	}
}

const initValues = {
	fontSize: localStorage.fontSize ?? '16px',
	color: localStorage.color ?? '#000000',
	fontWeight: localStorage.fontWeight ?? '400',
	letterSpacing: localStorage.letterSpacing ?? 'normal',
	lineHeight: localStorage.lineHeight ?? 'normal',
	fontStyle: localStorage.fontStyle ?? 'normal',
}

const textContainer = document.querySelector('.text-editor__content-inner');
Object.assign(textContainer.style, initValues);

function handleInputChange(event) {
	const { name, value } = event.target;

	textContainer.style[name] = value;
	localStorage.setItem(name, value);
}

const fontSizeSelect = new Select('fontSizeSelect', initValues.fontSize);
fontSizeSelect.container.addEventListener('change', handleInputChange)

const fontWeightSelect = new Select('fontWeightSelect', initValues.fontWeight);
fontWeightSelect.container.addEventListener('change', handleInputChange);

const fontStyleSelect = new Select('fontStyleSelect', initValues.fontStyle);
fontStyleSelect.container.addEventListener('change', handleInputChange);

const letterSpacingSelect = new Select('letterSpacingSelect', initValues.letterSpacing);
letterSpacingSelect.container.addEventListener('change', handleInputChange);

const lineHeightSelect = new Select('lineHeightSelect', initValues.lineHeight);
lineHeightSelect.container.addEventListener('change', handleInputChange);

const colorPicker = document.getElementById('textColorSelect');
colorPicker.value = initValues.color;
colorPicker.addEventListener('input', handleInputChange);

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => localStorage.clear());