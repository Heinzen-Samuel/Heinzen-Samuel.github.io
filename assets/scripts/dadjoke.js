function loadJoke() {
    var xhttp = new XMLHttpRequest();
  
    xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	      document.getElementById("joke").innerHTML = this.responseText;
	    }
    };
  
    xhttp.open('GET', 'https://icanhazdadjoke.com/', true);
    xhttp.setRequestHeader('DataType', 'jsonp');
    xhttp.setRequestHeader('jsonp', 'jsoncallback');
    xhttp.setRequestHeader('product', 'jsoncallback');

    xhttp.send();
}