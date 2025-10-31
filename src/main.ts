// CMPM 121 Smelly Code Activity

let clicks = 0;

const increment = "increment",
  clickCount = "counter",
  title = "CMPM 121 Project";

// Create HTML
function setup() {
  document.body.innerHTML = `
    <h1>${title}</h1>
    <p>Counter: <span id="${clickCount}">0</span></p>
    <button id="${increment}">Click Me!</button>
    <button id="dec">Decrement</button>
    <button id="reset">Reset</button>
  `;
}

// Create buttons and handle when pressed
function handleButtons() {
  const buttonIncrement = document.getElementById(increment);
  const buttonDecrement = document.getElementById("dec");
  const buttonReset = document.getElementById("reset");
  const counter = document.getElementById(clickCount);

  if (!buttonIncrement || !buttonDecrement || !buttonReset || !counter) return;
  // Add click event to the increment button
  buttonIncrement.addEventListener("click", () => {
    clicks++;
    counter.innerHTML = `${clicks}`;
    document.title = "Clicked " + clicks;
    document.body.style.backgroundColor = clicks % 2 ? "pink" : "lightblue";
  });
  // Add click event to the decrement button
  buttonDecrement.addEventListener("click", () => {
    clicks--;
    counter.innerHTML = `${clicks}`;
    document.title = "Clicked " + clicks;
    document.body.style.backgroundColor = clicks % 2 ? "pink" : "lightblue";
  });
  // Add click event to the reset button
  buttonReset.addEventListener("click", () => {
    clicks = 0;
    counter.innerHTML = `${clicks}`;
    document.title = "Clicked " + clicks;
    document.body.style.backgroundColor = clicks % 2 ? "pink" : "lightblue";
  });
}

function start() {
  setup();
  handleButtons();
}
start();
