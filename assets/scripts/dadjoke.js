function loadJoke() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("joke").innerHTML = this.responseText;
	    }
    };
  
    xhttp.open('GET', 'https://icanhazdadjoke.com/', true);
    xhttp.setRequestHeader('Accept', 'text/plain');
    xhttp.setRequestHeader('User-Agent', 'hei17013@byui.edu');

    xhttp.send();
}