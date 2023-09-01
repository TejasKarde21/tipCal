# tipCal

*Event Listener: The code begins with the document.addEventListener('DOMContentLoaded', function() { ... }); block.
 This event listener waits for the HTML document to be fully loaded before executing the JavaScript code inside the function.

*billAmountInput: Represents the input field where the user enters the bill amount.
*serviceRatingSelect: Represents the dropdown select element where the user chooses the service rating.
*numOfPeopleInput: Represents the input field where the user enters the number of people sharing the bill.
*calculateButton: Represents the button element that triggers the tip calculation.
*tipAmount: Represents the HTML element where the calculated tip amount will be displayed.
*Event Listener for Button Click: The code sets up an event listener on the calculateButton element using calculateButton.
  addEventListener('click', function() { ... });. This listener responds to a click event on the "Calculate Tip" button.

*Data Validation: Inside the click event handler, the code performs data validation to ensure that the user has entered valid numeric
 values for the bill amount, service rating, and the number of people. If any of these values are not
 valid (e.g., not a number or less than or equal to zero), it displays an alert message and returns, preventing further calculations.

Tip Calculation: Assuming valid input, the code calculates the tip amount per person using the following formula:
tip = (billAmount * serviceRating) / numOfPeople
billAmount * serviceRating calculates the total tip based on the bill amount and service rating.
This total tip is then divided by the number of people (numOfPeople) to calculate the tip per person.
