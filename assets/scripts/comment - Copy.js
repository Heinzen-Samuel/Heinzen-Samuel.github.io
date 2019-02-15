const userComment = {};

function getValues(e) {
  // turn form elements object into an array
  const elements = Array.prototype.slice.call(e.target.elements);

  // go over the array storing input name & value pairs
  elements.forEach((el) => {
    if (el.type !== "submit") {
      userComment[el.name] = el.value;
    }
  });

  // finally save to localStorage
  localStorage.setItem('userComment', JSON.stringify(userComment));
}

document.getElementById("newComment").addEventListener("submit", getValues);