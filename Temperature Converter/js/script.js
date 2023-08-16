const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const convertButton = document.getElementById("convert-button");
const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", clearFields);

function clearFields() {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
}

convertButton.addEventListener("click", convertTemperature);

function convertTemperature() {
  const celsiusValue = parseFloat(celsiusInput.value);
  if (isNaN(celsiusValue)) {
    alert("Please enter a valid number.");
    return;
  }

  const fahrenheitValue = celsiusValue * 9 / 5 + 32;
  fahrenheitInput.value = fahrenheitValue.toFixed(2);
}

//This example creates a simple temperature converter that takes a Celsius temperature input and displays the equivalent Fahrenheit temperature. The converter is responsive and adjusts its layout for different screen sizes.