var button = document.querySelectorAll('button');
var buttonLength = button.length;
var counter = -1;

// add click event to all buttons
for (var i = 0; i < buttonLength; i++) {
    button[i].addEventListener('click', display);
}


// click and display
function display() {
    if (counter === -1) {
        // white goes first
        document.querySelector('h2').innerHTML = "Turn for white!";
        this.style.background = 'black';
        this.style.border = "1px solid grey";
    } else if (counter === 1) {
        document.querySelector('h2').innerHTML = "Turn for black!";
        this.style.background = 'white';
        this.style.border = "1px solid grey"
    }
    counter *= -1;
}
