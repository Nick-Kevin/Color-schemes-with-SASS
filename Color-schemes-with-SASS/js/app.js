const getId = (id) => {
	return document.getElementById(id);
}

const $ = (selector) => {
	return document.querySelector(selector);
}

const myDocument = $("html");
myDocument.classList.add("red");
let lastClass = "red"

window.addEventListener('load', () => {
	const selectedElement = getId("color-scheme")
	selectedElement.addEventListener('change', () => {
		myDocument.classList.remove(lastClass)
		const selectedValue = selectedElement.value;
		myDocument.classList.add(selectedValue)
		lastClass = selectedValue
	})
})