//global JSON variable
var comments = [];

//Function to retrieve stored comments from local storage
function setJSON() {
  if (localStorage.getItem('Comments') === null) {
      console.log("Nothing was found");
  }
  else {
      comments = JSON.parse(localStorage.getItem('Comments'));
  }
}

function setComments() {
  localStorage.setItem("Comments", JSON.stringify(comments));
}

//This function uses javascript functions to get the time and retuns it
function getDate() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yyyy = today.getFullYear();

  if(dd<10) {
      dd='0'+dd;
  } 

  if(mm<10) {
      mm='0'+mm;
  } 

  return today = yyyy+'-'+mm+'-'+dd;
}

//This is run on every keyup and stores the current values of the fields into local storage
function keypress() {
  var name = document.getElementById("commentName").value;
  var comment = document.getElementById("commentText").value;
  var d = getDate();

  localStorage.setItem('Name', name);
  localStorage.setItem('Comment', comment);
  localStorage.setItem('Date', d);
}

//This loads whatever was left behing in local storage into the fields
function load_data() {
  var input = document.getElementById("commentName");
  var comm = document.getElementById("commentText");

  input.value = localStorage.getItem('Name');
  comm.value = localStorage.getItem('Comment');
}

//gets the values of the fields, pushed them into the JSON object
function submitComment() {
  var name = document.getElementById("commentName").value;
  var comment = document.getElementById("commentText").value;
  var d = getDate();

  comments.push({"Name":name, "Comment":comment, "Date":d});

  setComments();
  displayComments();
}


function displayComments() {
  setJSON();
  var element = document.getElementById("com");

  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }

  for(var i in comments) {

    var name = comments[i].Name;
    var comm = comments[i].Comment;
    var date = comments[i].Date;

    var com_name = document.createElement("h3");
    var node1 = document.createTextNode(name);
    com_name.appendChild(node1);

    var com_text = document.createElement("h4");
    var node2 = document.createTextNode(comm);
    com_text.appendChild(node2);

    var hr = document.createElement("hr");
    var div = document.createElement("div");
    div.className = "comment-box";

    div.appendChild(com_name);
    div.appendChild(hr);
    div.appendChild(com_text);

    element.appendChild(div);
  }

  document.getElementById("newComment").reset();
}

document.getElementById("newComment").addEventListener("submit", submitComment);