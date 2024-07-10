//Defining interfaces for the game and HTML elements
interface Score {
    playerWins: number;
    computerWins: number;
    ties: number;
}

interface HTMLElements {
    rockButton: HTMLButtonElement | null;
    paperButton: HTMLButtonElement | null;
    scissorsButton: HTMLButtonElement | null;
    playerScore: HTMLElement | null;
    computerScore: HTMLElement | null;
    tieText: HTMLElement | null;
}

//Accessing HTML elements using document.getElementById
//and setting them to the types set in the interfaces 
const elements: HTMLElements = {
    rockButton: document.getElementById("rock") as HTMLButtonElement,
    paperButton: document.getElementById("paper") as HTMLButtonElement,
    scissorsButton: document.getElementById("scissors") as HTMLButtonElement,
    playerScore: document.getElementById("player-score"),
    computerScore: document.getElementById("computer-score"),
    tieText: document.getElementById("result-tie"),
};

//Defining scoring variable
let score: Score = {
    playerWins: 0,
    computerWins: 0,
    ties: 0,
};

//Adding event listeners to handle button clicks and game play
elements.rockButton?.addEventListener("click", function() {
    playRound("rock", computerPlay());
});

elements.paperButton?.addEventListener("click", function() {
    playRound("paper", computerPlay());
});

elements.scissorsButton?.addEventListener("click", function() {
    playRound("scissors", computerPlay());
});

function computerPlay(): string {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "rock"; // Default case, though not expected to reach here
    }
}

//Defining functions to update and display scores on the HTML page
function updatePlayerScore(): void {
    if (elements.playerScore) {
        elements.playerScore.textContent = `Your wins: ${score.playerWins}`;
    }
}

function updateComputerScore(): void {
    if (elements.computerScore) {
        elements.computerScore.textContent = `Computer wins: ${score.computerWins}`;
    }
}

function updateTieScore(): void {
    if (elements.tieText) {
        elements.tieText.textContent = `Tie rounds: ${score.ties}`;
    }
}

//Creating the function called playRound using TypeScript
function playRound(playerChoice: string, computerChoice: string): void {
    if (
        (playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock')
    ) {
        score.playerWins++;
        updatePlayerScore();
    } else if (
        (computerChoice === 'scissors' && playerChoice === 'paper') ||
        (computerChoice === 'rock' && playerChoice === 'scissors') ||
        (computerChoice === 'paper' && playerChoice === 'rock')
    ) {
        score.computerWins++;
        updateComputerScore();
    } else {
        score.ties++;
        updateTieScore();
    }
}
