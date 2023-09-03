const storyElement = document.getElementById("story");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const restartButton = document.getElementById("restart");

let storyIndex = 0;
const storyMessages = [
    "Welcome to the Text Adventure Game!",
    "You find yourself in a dark forest.",
    "You can hear the sound of a stream nearby.",
    "A path leads to the left, and another to the right.",
    "You chose to go left.",
    "You discover an old, abandoned cabin deep in the woods.",
    "Inside the cabin, you find a dusty book filled with mysterious symbols.",
    "As you flip through the pages, you start to decipher the ancient language.",
    "The book reveals the location of a hidden treasure!",
    "Congratulations! You win!",
    "You chose to go right.",
    "You stumble upon a bear's den.",
    "The bear is sleeping, but you accidentally step on a twig and wake it up!",
    "You have two options:",
    "1. Try to run away.",
    "2. Slowly back away."
];

function displayStory() {
    if (storyIndex < storyMessages.length) {
        storyElement.textContent = storyMessages[storyIndex];
        storyIndex++;
    } else {
        // End of the story, show the restart button
        storyElement.textContent = "The story has ended. Play again?";
        leftButton.style.display = "none";
        rightButton.style.display = "none";
        restartButton.style.display = "inline-block";
    }
}

leftButton.addEventListener("click", () => {
    displayStory();
});

rightButton.addEventListener("click", () => {
    displayStory();
});

restartButton.addEventListener("click", () => {
    storyIndex = 0;
    displayStory();
    leftButton.style.display = "inline-block";
    rightButton.style.display = "inline-block";
    restartButton.style.display = "none";
});

// Initial message
displayStory();
