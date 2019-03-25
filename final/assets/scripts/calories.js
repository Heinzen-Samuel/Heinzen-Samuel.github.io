function addCalories() {
	var calories = document.getElementById("calories").value;

	if (localStorage.getItem('calories') === null) {
		localStorage.setItem('calories',0);
	}

	var oldCalories = localStorage.getItem('calories');
	var newTotal = parseInt(calories) + parseInt(oldCalories);

	localStorage.setItem('calories', newTotal);
	document.getElementById("calories").value = "";
}