function addCalories() {
	var calories = document.getElementById("calories").value;
	var oldCalories = localStorage.getItem('profileCalories');
	var newTotal = parseInt(calories) + parseInt(oldCalories);

	localStorage.setItem('profileCalories', newTotal);
	document.getElementById("calories").value = "";
}