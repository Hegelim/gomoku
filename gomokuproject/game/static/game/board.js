var button = document.querySelectorAll('button');
const buttonLength = button.length; // 19 * 19 = 361
var counter = -1;
const ROW_LENGTH = 19;

// add click event to all buttons
for (var i = 0; i < buttonLength; i++) {
    // assign coordinates to all buttons
    button[i].id = assignId(i+1);
    button[i].addEventListener('click', play);
}

// return current row index
// starting at index 0
function getRowIndex(i) {
    var rowIndex = 1;
    while (i > ROW_LENGTH) {
        i -= ROW_LENGTH;
        rowIndex += 1;
    }
    return rowIndex;
}

// get column index
function getColIndex(i) {
    if (i % ROW_LENGTH === 0) {
        return ROW_LENGTH;
    } else {
        return i % ROW_LENGTH;
    }
}


function assignId(i) {
    var r = getRowIndex(i);
    var c = getColIndex(i);
    return "(" + r + "," + c + ")";
}


function clearBoard() {
    return 0;
}

// function to check for win
function ifWin() {
    return ifWinHorizontal() || ifWinVertical() || ifWinDiagonal();
}

function ifWinHorizontal() {
    return 0;
}

function ifWinVertical() {
    return 0;
}

function ifWinDiagonal() {
    return 0;
}


// click and display
function play() {
    alert(this.id);

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
