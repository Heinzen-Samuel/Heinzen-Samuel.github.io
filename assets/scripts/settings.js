if (localStorage.getItem('backgroundImage') === null) {
	localStorage.setItem('backgroundImage','background_island.png');
} else {
	var background = localStorage.getItem('backgroundImage');
	document.body.style.backgroundImage = "url(assets/img/" + background + ")";
}
