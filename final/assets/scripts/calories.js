function addCalories() {
	var calories = document.getElementById("calories").value;
	var oldCalories = localStorage.getItem('profileCalories');

	if (calories == 0) {
		alert("Calorie amount can't be nothing!");
	} else {
		var newTotal = parseInt(calories) + parseInt(oldCalories);

		localStorage.setItem('profileCalories', newTotal);
		document.getElementById("calories").value = "";
	}
}