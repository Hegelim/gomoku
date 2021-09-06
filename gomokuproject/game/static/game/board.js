var button = document.querySelectorAll('button');
var buttonLength = button.length;
console.log(button);

// add click event to all buttons
for (var i = 0; i < buttonLength; i++) {
    button[i].addEventListener('click', returnIndex);
    button[i].addEventListener('click', display);
}

// return the current coordinates
function returnIndex() {
    var id = this.id;
    alert(id);
}

// click and display
function display() {
    this.style.background = 'grey';
}
