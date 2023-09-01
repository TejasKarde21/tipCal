document.addEventListener('DOMContentLoaded', function() {
    const billAmountInput = document.getElementById('billAmount');
    const serviceRatingSelect = document.getElementById('serviceRating');
    const numOfPeopleInput = document.getElementById('numOfPeople');
    const calculateButton = document.getElementById('calculate');
    const tipAmount = document.getElementById('tipAmount');
    
    calculateButton.addEventListener('click', function() {
        const billAmount = parseFloat(billAmountInput.value);
        const serviceRating = parseFloat(serviceRatingSelect.value);
        const numOfPeople = parseFloat(numOfPeopleInput.value);
        
        if (isNaN(billAmount) || isNaN(serviceRating) || isNaN(numOfPeople)) {
            alert('Please enter valid numbers.');
            return;
        }
        
        if (billAmount <= 0 || serviceRating <= 0 || numOfPeople <= 0) {
            alert('Please enter positive values.');
            return;
        }
        
        const tip = (billAmount * serviceRating) / numOfPeople;
        tipAmount.textContent =  tip.toFixed(2);
    });
});