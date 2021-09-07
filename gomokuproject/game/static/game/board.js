var buttons = document.querySelectorAll('button');
const buttonLength = buttons.length; // 19 * 19 = 361
var counter = -1;
const ROW_LENGTH = 19;
var buttonsArr = [];

// create an empty array to store all buttons
// this is 20 by 20
for (var i = 0; i < ROW_LENGTH + 1; i++) {
    buttonsArr[i] = new Array(ROW_LENGTH + 1);
}

// add click event to all buttons
for (var i = 0; i < buttonLength; i++) {
    // assign coordinates to all buttons
    buttons[i].id = assignId(i+1);
    // add button to buttonArry
    var row = getRowIndex(i+1);
    var col = getColIndex(i+1);
    buttonsArr[row][col] = buttons[i];
    // add event Listener
    buttons[i].addEventListener('click', play);
}

// return current row index
// starting at index 1
function getRowIndex(i) {
    var rowIndex = 1;
    while (i > ROW_LENGTH) {
        i -= ROW_LENGTH;
        rowIndex += 1;
    }
    return rowIndex;
}

// get column index, human-readable
// consistent with the board, starting at 1
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
    for (var i = 1; i < ROW_LENGTH + 1; i++) {
        for (var j = 1; j < ROW_LENGTH + 1; j++) {
            if (sameColor(
                getButton(i,j),
                getButton(i,j+1),
                getButton(i, j+2),
                getButton(i, j+3),
                getButton(i, j+4))) {
                return true;
            }
        }
    }
    return false;
}

function ifWinVertical() {
    for (var i = 1; i < ROW_LENGTH + 1; i++) {
        for (var j = 1; j < ROW_LENGTH + 1; j++) {
            if (sameColor(getButton(i,j), getButton(i+1,j),
                getButton(i+2, j), getButton(i+3, j), getButton(i+4, j))) {
                return true;
            }
        }
    }
    return false;
}

function ifWinDiagonal() {
    for (var i = 1; i < ROW_LENGTH + 1; i++) {
        for (var j = 1; j < ROW_LENGTH + 1; j++) {
            if (sameColor(
                getButton(i,j),
                getButton(i+1,j+1),
                getButton(i+2, j+2),
                getButton(i+3, j+3),
                getButton(i+4, j+4))) {
                return true;
            } else if (sameColor(
                getButton(i,j),
                getButton(i-1,j+1),
                getButton(i-2, j+2),
                getButton(i-3, j+3),
                getButton(i-4, j+4))) {
                return true;
            }
        }
    }
    return false;
}


function getButton(r, c) {
    if (r < 1 || r > ROW_LENGTH || c < 1 || c > ROW_LENGTH) {
        return undefined;
    }
    return buttonsArr[r][c];
}


function sameColor(s1, s2, s3, s4, s5) {
    if (s1 === undefined
        || s2 === undefined
        || s3 === undefined
        || s4 === undefined
        || s5 === undefined) {
        return false;
    } else {
        return (s1.style.background === 'white' &&
                s2.style.background === 'white' &&
                s3.style.background === 'white' &&
                s4.style.background === 'white' &&
                s5.style.background === 'white') ||
            (s1.style.background === 'black' &&
                s2.style.background === 'black' &&
                s3.style.background === 'black' &&
                s4.style.background === 'black' &&
                s5.style.background === 'black');
    }
}


// click and display
function play() {
    if (counter === -1) {
        // white goes first
        document.querySelector('h2').innerHTML = "Turn for black!";
        this.style.background = 'white';
        this.style.border = "1px solid grey";
        if (ifWin()) {
            document.querySelector('h2').innerHTML = "White wins!";
            alert("White Wins!");
        }
    } else if (counter === 1) {
        document.querySelector('h2').innerHTML = "Turn for white!";
        this.style.background = 'black';
        this.style.border = "1px solid grey";
        if (ifWin()) {
            document.querySelector('h2').innerHTML = "Black wins!";
            alert("Black Wins!");
        }
    }
    counter *= -1;
}
