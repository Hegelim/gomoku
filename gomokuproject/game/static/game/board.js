window.addEventListener("load", () => {
    const board = document.querySelector(".board");
    const placeStone = (column, row, mark) => {
        const stone = document.createElement("div");
        stone.style.gridColumnStart = (column - 1) * 2;
        stone.style.gridColumnEnd = (column - 1) * 2 + 2;
        stone.style.gridRowStart = (row - 1) * 2;
        stone.style.gridRowEnd = (row - 1) * 2 + 2;
        stone.classList.add("stone");
        stone.classList.add(mark);
        board.appendChild(stone);
    };
    placeStone(17, 3, 'black');
    placeStone(3, 4, 'white');
    placeStone(4, 16, 'black');
    placeStone(16, 17, 'white');
    placeStone(10, 10, 'black');
});

const board = document.querySelector(".board");

// function placeStone(column, row, mark) {
//     const stone = document.createElement("div");
//     stone.style.gridColumnStart = (column - 1) * 2;
//     stone.style.gridColumnEnd = (column - 1) * 2 + 2;
//     stone.style.gridRowStart = (row - 1) * 2;
//     stone.style.gridRowEnd = (row - 1) * 2 + 2;
//     stone.classList.add("stone");
//     stone.classList.add(mark);
//     board.appendChild(stone);
// };
