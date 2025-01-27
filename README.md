# Calculator Project

This project is a simple calculator built with HTML, CSS, and JavaScript. The design includes a modern UI with responsive elements and intuitive functionality.

## Features

- **Basic Arithmetic Operations**: Addition, subtraction, multiplication, and division.
- **Clear Display**: Options to clear the display entirely (`C`) or delete the last character (`<`).
- **Responsive Design**: The layout adjusts to fit various screen sizes.
- **Stylish UI**: Background blur effect and buttons with hover transitions.

## File Structure

- **index.html**: The main HTML file containing the calculator structure.
- **style.css**: External CSS file for styling the calculator (linked in the HTML).
- **script.js**: External JavaScript file for calculator functionality (linked in the HTML).

## How to Use

1. Clone or download the project files.
2. Open `index.html` in a web browser.
3. Use the buttons to input numbers and operators.
4. Click `=` to compute the result.
5. Use `C` to clear the display or `<` to delete the last character.

## Styling

- Fonts are imported from Google Fonts (`Poppins` and `Audiowide`).
- Buttons and layout are styled for a clean and modern appearance.
- Background image with a blur effect enhances the aesthetic appeal.

## JavaScript Functions

- **addToDisplay(value)**: Appends the clicked button value to the display.
- **clearDisplay()**: Clears the entire display.
- **deleteLastChar()**: Deletes the last character from the display.
- **calculateResult()**: Evaluates the mathematical expression in the display and shows the result.

## Example Code Snippet

```javascript
function addToDisplay(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLastChar() {
  const display = document.getElementById("display");
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById("display");
  const expression = display.value;
  if (expression) {
    display.value = eval(expression);
  }
}
```

## Requirements

- A modern web browser (Chrome, Firefox, Edge, etc.).
- Internet connection to load Google Fonts (if hosted remotely).

## License

This project is open-source and available under the MIT License.
