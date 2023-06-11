// Get the containers
var containers = document.getElementsByClassName("container");

// Add event listeners for drag and drop
for (var i = 0; i < containers.length; i++) {
  containers[i].addEventListener("dragover", allowDrop);
  containers[i].addEventListener("drop", drop);
}

// Add event listeners for items
var items = document.getElementsByClassName("item");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("dragstart", dragStart);
}

// Drag start event handler
function dragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.innerText);
  event.currentTarget.style.backgroundColor = "#ccc";
}

// Allow drop event handler
function allowDrop(event) {
  event.preventDefault();
}

// Drop event handler
function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text/plain");
  var newItem = document.createElement("div");
  newItem.className = "item";
  newItem.innerText = data;
  event.currentTarget.appendChild(newItem);
  showMessage("Item dropped successfully!");
}

// Show success message
function showMessage(message) {
  var successMessage = document.createElement("div");
  successMessage.innerText = message;
  document.body.appendChild(successMessage);
  setTimeout(function() {
    document.body.removeChild(successMessage);
  }, 2000);
}

// Reset button event handler
function reset() {
  var secondContainer = containers[1];
  while (secondContainer.firstChild) {
    secondContainer.removeChild(secondContainer.firstChild);
  }
  var firstContainer = containers[0];
  var clonedItems = firstContainer.cloneNode(true);
  secondContainer.appendChild(clonedItems);
}
