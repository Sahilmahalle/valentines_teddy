// think again
// are you sure
// sahil is good boy
// sahil will be very angry
// sahil will be very very angry
// ok fine i dont care
// i dont back off so easily

const noButtonTexts = [
  "No",
  "Please yaar",
  "Think Again",
  "Are you sure ?",
  "sahil is good boy",
  "sahil will be very angry",
  "sahil will be very very angry",
  "Ok fine i dont care",
  "I dont back off so easily ",
];

let currentTextIndexYes = 0;
let currentTextIndexNo = 0;

let isYesButtonClicked = false;

function increaseSizeAndChangeText(buttonId) {
  if (isYesButtonClicked) {
    return; // Do nothing if the "Yes" button has already been clicked
  }

  const button = document.getElementById(buttonId);

  // Increase the size of the clicked button
  // const currentSize = parseInt(window.getComputedStyle(button).fontSize);
  // const newSize = currentSize + 2;
  // button.style.fontSize = newSize + "px";

  if (buttonId === "noButton") {
    const currentSizeYes = parseInt(
      window.getComputedStyle(yesButton).fontSize
    );
    const newSizeYes = currentSizeYes + 2;
    yesButton.style.fontSize = newSizeYes + "px";
  }

  // Change the text of both buttons
  // changeText("yesButton", currentTextIndexYes);

  // Increment the index or reset to 0 if it reaches the end of the array
  if (buttonId === "noButton") {
    changeText("yesButton", currentTextIndexYes);
  } else if (buttonId === "yesButton") {
    isYesButtonClicked = true; // Stop further changes on "Yes" button click
    myImage.src = "./images/kiss-milk-and-mocha.gif";
    document.getElementById("heading").innerHTML =
      "Thank You Dear ... Love You";
  }
  changeText("noButton", currentTextIndexNo);

  if (buttonId === "noButton") {
    currentTextIndexNo = (currentTextIndexNo + 1) % noButtonTexts.length;
  }
}

function changeText(buttonId, currentIndex) {
  const button = document.getElementById(buttonId);

  // Change the text of the button from the array
  if (buttonId === "noButton") {
    button.innerText = noButtonTexts[currentIndex];
  }
}
