function changeName() {
	var name = document.getElementById("profile-name").value;
	localStorage.setItem('profileName', name);
}

function setRoxia() {
	localStorage.setItem('profileImage','roxia.png');
	document.getElementById('profile-image').src='assets/img/players/roxia.png';
}

function setMax() {
	localStorage.setItem('profileImage','max.png');
	document.getElementById('profile-image').src='assets/img/players/max.png';
}

function setMelt() {
	localStorage.setItem('profileImage','melt.png');
	document.getElementById('profile-image').src='assets/img/players/melt.png';
}

function setEmpty() {
	localStorage.setItem('profileImage','empty.png');
	document.getElementById('profile-image').src='assets/img/players/empty.png';
}