var button = document.querySelectorAll('button');
var buttonLength = button.length;
var counter = -1;

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
    if (counter === -1) {
        // white goes first
        document.querySelector('h2').innerHTML = "Turn for white!";
        this.style.background = 'black';
    } else if (counter === 1) {
        document.querySelector('h2').innerHTML = "Turn for black!";
        this.style.background = 'white';
    }
    counter *= -1;
}
