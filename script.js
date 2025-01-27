function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function allClearDisplay() {
  document.getElementById("display").value = "";
}
function clearDisplay() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}
function calculateResult() {
  try {
    document.getElementById("display").value = eval(
      document.getElementById("display").value
    );
  } catch {
    document.getElementById("display").value = "Error";
  }
}
