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

function checkForWinner() {
    //most concise way: using the "some" method:
    //.some() tests each combo in winningCombos
    //If any combo satisfies the condition, winner is set to true.
    // winner = winningCombos.some(([a, b, c]) => {
    //     return board[a] && board[a] === board[b] && board[a] === board[c];
    // });

    //for loop: good for explicit control (if you need the index as well)
    // for (let i = 0; i < winningCombos.length; i++) {
    //     const combo = winningCombos[i];
    //     const a = combo[0];
    //     const b = combo[1];
    //     const c = combo[2];
    //     if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    //         winner = true;
    //         return;
    //     }
    // }

    // for... of: Good for iterating over an array of arrays
    // but does NOT give you the index
    // Use forEach or for loop if you want the index or if you want to modify the original winningCombos array
    for (const combo of winningCombos) {
        //array destructuring: 
        //breaking down an existing sub-array (combo) into individual variables
        //extract [0] from combo and assign to a, etc.
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner === true;
            return; //stop checking
        }
    }
}

//what is a tie?
//when the board is completely full (there are no empty strings left)
// && no winner has been determined yet
function checkForTie() {
    // check if the board is full
    // if board is full && winner === false, then it's a tie
    // update tie status to true

    // .every() method: loops through every element in an array and checks if a specific condition is true for ALL elements
    // if every element satisfies the condition, it returns true

    // loops through each element of the board array
    // temporarily assigns the current element of the array (X, O, "") to the variable square
    // evaluates the condition in the callback function
    if (board.every((square) => square !== "") && !winner) {
        tie = true;
    }

    // could also use a forEach loop
    //     let isFull = true;

    // board.forEach(square => {
    //     if (square === "") {
    //         isFull = false; // If an empty square is found, it's not full
    //     }
    // });

    // console.log(isFull); // false
}

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
