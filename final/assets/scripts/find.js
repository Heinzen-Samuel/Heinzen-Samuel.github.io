function findScab() {
	if (confirm("Confirm using calories to find new Scab?\nYou will lose current Scab.")) {
		createScab(500);
		drawScab();
	} 
}

function createScab(calories) {
	var rand = Math.floor((Math.random() * 6));
	var date = new Date();
  	var hour = date.getHours();
  	var scab = [];
  	var name;

  	if (hour >= 6 && hour < 18) {
  		name = dayScabs[rand];
  	} else {
  		name = nightScabs[rand];
  	}

	localStorage.setItem('newScabName', name["name"]);
	localStorage.setItem('newScabType', name["type"]);
	localStorage.setItem('newScabStrg', name["strg"]);
	localStorage.setItem('newScabLuck', name["luck"]);
	localStorage.setItem('newScabImg', name["img"]);
}

function drawScab() {
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

function captureScab() {
	if (localStorage.getItem('newScabName') === null) {
		alert("Use calories to find a Scab to capture");
	} else {
	    var scabName = localStorage.getItem('newScabName');
	    var scabType = localStorage.getItem('newScabType');
	    var scabStrg = localStorage.getItem('newScabStrg');
	    var scabLuck = localStorage.getItem('newScabLuck');
	    var scabImg = localStorage.getItem('newScabImg');

	    var profileScabs = JSON.parse(localStorage.getItem('profileScabs'));
	    profileScabs.push({"name":scabName, "type":scabType, "strg":scabStrg, "luck":scabLuck, "img":scabImg});
	    localStorage.setItem("profileScabs", JSON.stringify(profileScabs));

        document.getElementById("scabImage").src="assets/img/scabs/unknown.png";
	    document.getElementById("scabName").innerHTML = "&nbsp;NAME:";
	    document.getElementById("scabType").innerHTML = "&nbsp;TYPE:";
	    document.getElementById("scabStrg").innerHTML = "&nbsp;STRG:";
	    document.getElementById("scabLuck").innerHTML = "&nbsp;LUCK:";

	    localStorage.removeItem('newScabName');
	    localStorage.removeItem('newScabType');
	    localStorage.removeItem('newScabStrg');
	    localStorage.removeItem('newScabLuck');
	    localStorage.removeItem('newScabImg');
	}
}
