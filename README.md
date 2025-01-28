Requirements

Display an empty tic-tac-toe board when the page is initially displayed.
A player can click on the nine cells to make a move.
Every click will alternate between marking an X and O.
Display whose turn it is (X or O).
The cell cannot be played again once occupied with an X or O.
Provide win logic and display a winning message.
Provide logic for a cat’s game (tie), also displaying a message.
Provide a Reset Game button that will clear the contents of the board.

// =========================================

1 Define the required variables used to track the state of the game.

a. Use a variable named board to represent the state of the squares on the board.

b. Use a variable named turn to track whose turn it is.

c. Use a variable named winner to represent if anyone has won yet.

d. Use a variable named tie to represent if the game has ended in a tie.

// ==========================================

2 Store cached element references.

a. In a constant called squareEls, store the nine elements representing the squares on the page.

    💡 Notice how each square has a matching class name in your HTML to make this easier!

b. In a constant called messageEl, store the element that displays the game’s status on the page.

    🚨 Don’t forget to console.log() your cached element references to ensure you’ve grabbed the correct elements!

// ===========================================

3 Upon loading, the game state should be initialized, and a function should be called to render this game state.

a. Create a function called init.

b. Call the init function when the app loads.

    🚨 Add a console.log() as a confirmation check inside this function. This helps to ensure you’re calling the function you just created correctly!

c. Set the board variable to an array containing nine empty strings ('') representing empty squares.

    💡 The nine elements in the board array will correspond to a square on the board. Index 0 (board[0]) will represent the top-left square. Index 1 (board[1]) will represent the top-middle square. Index 2 (board[2]) will represent the top-right square. Index 3 (board[3]) will represent the middle-left square. So on, continuing through the entire board until… Index 8 (board[8]) will represent the bottom-right square.

d. Set the turn to the uppercase string "X" - this will represent player X.

    💡 Player O will be represented by uppercase "O".

e. Set the winner to false.

    💡 A false value in winner means that there is no winner yet. A value of true in winner will mean that a player has won.

Once winner is set to true, we can determine which player won by whose turn it was when the winning move was played.

f. Set tie to false.

    💡 A true value in tie will mean that the board array contains no more empty strings ('') and will be used to render a tie message if winner is still false by the time all squares are played.

g. Call a function named render() at the end of the init() function.

    🚨 This will throw an error until you complete step 4a!

// ==============================================================

4 The state of the game should be rendered to the user.

a. Create a function called render, then set it aside for now.

b. Create a function called updateBoard.

c. In the updateBoard function, loop over board and for each element:

    Use the current index of the iteration to access the corresponding square in the squareEls.

    📖 Check out the MDN documentation on forEach() to help out with this! What do you have access to in the callback function that could help with this?

    Style that square however you wish, dependent on the value contained in the current cell being iterated over ('X', 'O', or ''). To keep it simple, start by just putting a letter in each square depending on the value of each cell.

d. Create a function called updateMessage.

e. In updateMessage, render a message based on the current game state:

    If both winner and tie have a value of false (meaning the game is still in progress), render whose turn it is.

    If winner is false, but tie is true, render a tie message.

    Otherwise, render a congratulatory message to the player that has won.

f. Invoke both the updateBoard and the updateMessage functions inside your render function.

    After completing all of step 4, you should be able to manually change the values held in the board array in the init() function and see the style of the corresponding square change on your page.

// ======================================================

5 Define the required constants.

Define the required constants.

a. In a constant called winningCombos, define the eight possible winning combinations as an array of arrays.


// ======================================================

6 Handle a player clicking a square with a `handleClick` function.






// ======================================================

7 Create Reset functionality.