if (localStorage.getItem('profileName') === null) {
	localStorage.setItem('profileName', "Unknown");
}

if (localStorage.getItem('profileImage') === null) {
	localStorage.setItem('profileImage','empty.png');
} else {
	var image = localStorage.getItem('profileImage');
	document.getElementById("profile-image").src="assets/img/players/" + image;
}

if (localStorage.getItem('profileCalories') === null) {
	localStorage.setItem('profileCalories',0);
}

if (localStorage.getItem('profileScabs') === null) {
	var emptyArray = [];
	localStorage.setItem('profileScabs', JSON.stringify(emptyArray));
}
