//STEPS
//handle click events
//update the board
//check for a winner
//check for a tie
//update message
//reset the game

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const resetBtnEl = document.querySelector("#reset");

let board = ["", "", "", "", "", "", "", "", ""]; //state of the squares on the board
//player X and player 0
let turn = "X"; //track who's turn
let winner = false; //if anyone has won yet

//tie = true will mean that the board array contains no more empty strings
let tie = false; //if the game has ended in a tie

//Index 0 = board[0];
//Index 8 = board[8];

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [0, 3, 6],
    [2, 4, 6]
];


//=====================================

//add an event listener to each square element
//track index dynamically through initialization so we can reference it directly later
//in a forEach loop, the parameters are ALWAYS (element, index, array)
//if you skip/omit a paramter, JS skips grabbing that particular value
squareEls.forEach((square, idx) => {
    square.addEventListener("click", (e) => {
        handleClick(e, idx)
        });
});

resetBtnEl.addEventListener("click", init);

//=====================================

function handleClick(e, idx) {
    //get the clicked square
    const square = e.target;

    //check if square is already populated
    //if square is NOT empty, change nothing
    //prevent clicking an already-filled square
    if (board[idx] !== "") {
        return;
    }

    //update the board array with the current player's symbol
    board[idx] = turn;

    //update the UI
    square.textContent = turn;

    //switch turns
    checkForWinner();
    checkForTie();

    //switch turns
    //also possible with a ternary operator...
    if (turn === "X") {
        turn = "O";
    } else {
        turn = "X";
    }

    //update message
    updateMessage();

};

function updateBoard() {
//loop over board
//forEach element, use currentIndex to access the corresponding square in the squareEls
//start by putting a letter in each square depending on the value of each cell
};

function updateMessage() {
//render a message based on the current game state
//if both winner and tie === false (meaning the game is still in progress), render whose turn it is
//if winner === false && tie === true, render tie message
//else, render congrats message that the player has won
if (winner) {
    messageEl.textContent = `Congratulations! ${turn} wins!`;
} else if (tie) {
    messageEl.textContent = "It's a tie!";
} else {
    messageEl.textContent = `It's ${turn}'s turn.`;
}
};


function render() {
    updateBoard();
    updateMessage();
};


function init() {
//call this function when the app loads

    render();
};

//make a reset button
function reset() {
    board = ["", "", "", "", "", "", "", "", ""]; // Reset board state
    turn = "X"; // Reset turn
    winner = false; // Reset winner state
    tie = false; // Reset tie state
    render(); // Re-render the game
};
