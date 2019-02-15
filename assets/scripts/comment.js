function addComment() {
  var author = document.getElementById("commentName").value;
  var text = document.getElementById("commentText").value;

  // Creating text from form
  var message = document.createElement("h4");
  var node1 = document.createTextNode(text);
  message.appendChild(node1);

  var name = document.createElement("h3");
  var node2 = document.createTextNode(author);
  name.appendChild(node2)

  var hr = document.createElement("hr");
  var div = document.createElement("div");
  div.className = "comment-box";

  div.appendChild(name);
  div.appendChild(hr);
  div.appendChild(message);

  var element = document.getElementById("com");
  element.appendChild(div);

  document.getElementById("newComment").reset();
}

document.getElementById("newComment").addEventListener("submit", addComment);