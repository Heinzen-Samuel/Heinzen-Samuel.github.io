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

if (localStorage.getItem('newScabName') !== null) {
    var scabName = localStorage.getItem('newScabName');
    var scabType = localStorage.getItem('newScabType');
    var scabStrg = localStorage.getItem('newScabStrg');
    var scabLuck = localStorage.getItem('newScabLuck');
    var scabImg = localStorage.getItem('newScabImg');

    document.getElementById("scabImage").src="assets/img/scabs/" + scabImg;
    document.getElementById("scabName").innerHTML = "&nbsp;NAME: " + scabName;
    document.getElementById("scabType").innerHTML = "&nbsp;TYPE: " + scabType;
    document.getElementById("scabStrg").innerHTML = "&nbsp;STRG: " + scabStrg;
    document.getElementById("scabLuck").innerHTML = "&nbsp;LUCK: " + scabLuck;
}
