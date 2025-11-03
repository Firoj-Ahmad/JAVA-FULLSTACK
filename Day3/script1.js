let selectedButton = null;

function change(color) {
    // Change background color of the body
    document.body.style.backgroundColor = color;

    // Get all buttons
    const buttons = document.querySelectorAll("button");

    // Remove highlight from previously selected button
    if (selectedButton) {
        selectedButton.style.borderColor = "black";
        selectedButton.style.backgroundColor = "";
        selectedButton.style.color = ""; 
    }

    // Find the clicked button by color text
    buttons.forEach(button => {
        if (button.textContent.toLowerCase() === color) {
            selectedButton = button;
        }
    });

    // Highlight the selected button
    if (selectedButton) {
        selectedButton.style.borderColor = "white";
        selectedButton.style.color = "black";
        selectedButton.style.backgroundColor = color;
    }
}