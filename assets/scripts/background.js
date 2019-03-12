function changeBackground(element) {
	localStorage.setItem('backgroundImage',element.value);
	document.body.style.backgroundImage = "url(assets/img/" + element.value + ")";
}