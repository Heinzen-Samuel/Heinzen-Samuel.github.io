if (localStorage.getItem('profileName') === null) {
	localStorage.setItem('profileName', "Unknown");
}

if (localStorage.getItem('profileImage') === null) {
	localStorage.setItem('profileImage','empty.png');
} else {
	var image = localStorage.getItem('profileImage');
	console.log(image);
	document.getElementById("profile-image").src="assets/img/players/" + image;
}

if (localStorage.getItem('profileCalories') === null) {
	localStorage.setItem('profileCalories',0);
}
