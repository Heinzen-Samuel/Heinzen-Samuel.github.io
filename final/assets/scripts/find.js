function findScab() {
	var calories = document.getElementById("caloriesUsed").value;
	var oldCalories = localStorage.getItem('profileCalories');

	if (calories == 0) {
		alert("Calorie amount can't be nothing");
	} else {

		if (parseInt(calories) > parseInt(oldCalories)){
			alert("You don't have that much calories stored!");
		} else {

			if (confirm("Confirm using calories to find new Scab?\nCurrent found scab will escape!")) {
				var newTotal = parseInt(oldCalories) - parseInt(calories);
				localStorage.setItem('profileCalories', newTotal);

				createScab();
				modifyStats(calories);
				drawScab();
			}
		}
	}
}

function createScab() {
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

function modifyStats(calories) {
	var scabStrg = parseInt(localStorage.getItem('newScabStrg'));
  	var scabLuck = parseInt(localStorage.getItem('newScabLuck'));

  	var maxChg = (calories * (1/10));
  	var randChgStrg = Math.floor((Math.random() * maxChg) + 1);
  	var randChgLuck = Math.floor((Math.random() * maxChg) + 1);

  	scabStrg += randChgStrg;
  	scabLuck += randChgLuck;

  	localStorage.setItem('newScabStrg', scabStrg);
	localStorage.setItem('newScabLuck', scabLuck);
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
