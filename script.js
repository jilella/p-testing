document.addEventListener('DOMContentLoaded', function() {
    // Wait for the DOM to be fully loaded

    // Get the input element and output element
    var inputElement = document.getElementById('inputNumber');
    var outputElement = document.getElementById('output');

    // Add an event listener to the input element
    inputElement.addEventListener('input', function() {
        // Convert the input value to a number
        var inputValue = parseFloat(inputElement.value);

        // Check if the input value is greater than 5
        if (inputValue > 5) {
            outputElement.textContent = 'Accepted';
        } else {
            outputElement.textContent = 'Declined';
        }
    });
});
