
//checking Function of Different Class Tickets..

function qualityClassTicketHandle(quality, isIncrease) {      //quality means first or economy
    const qualityClassInput = document.getElementById(quality + '-class-count');
    const qualityClassCount = parseInt(qualityClassInput.value);
    let qualityCLassNewCount = qualityClassCount;
    if (isIncrease == true) {
        qualityCLassNewCount++;
    }
    if (isIncrease == false && qualityClassCount > 0) {
        qualityCLassNewCount--;
    }
    qualityClassInput.value = qualityCLassNewCount;
    calculateTotal();
}

function getInputValue(quality) {
    const qualityInput = document.getElementById(quality + '-class-count');
    const qualityCount = parseInt(qualityInput.value);
    return qualityCount;
}

function calculateTotal() {
    const totalPrice = getInputValue('first') * 150 + getInputValue('economy') * 100;
    document.getElementById('total-price').innerText = totalPrice;
    let tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    let grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText = grandTotal;
}

//Book Now Button Working Section

document.getElementById('booking').addEventListener('click', function () {
    const mainArea = document.getElementById('mainContent');
    mainArea.style.display = "none";
    const submitArea = document.getElementById('submit');
    submitArea.style.display = "block";
    document.getElementById('firstClassTicketNumber').innerText = getInputValue('first');
    document.getElementById('firstClassTicketPrice').innerText = getInputValue('first') * 150;
    document.getElementById('economyClassTicketNumber').innerText = getInputValue('economy');
    document.getElementById('economyClassTicketPrice').innerText = getInputValue('economy') * 100;
    let subTotalPrice = getInputValue('first') * 150 + getInputValue('economy') * 100;
    document.getElementById('subtotalPrice').innerText = subTotalPrice;
    let taxAmount = subTotalPrice * 0.1;
    document.getElementById('taxAmount').innerText = taxAmount;
    document.getElementById('totalAmount').innerText = subTotalPrice + taxAmount;
});

//Cancel Button Working Section 
document.getElementById('booking-cancel').addEventListener('click', function () {
    const mainArea = document.getElementById('mainContent');
    mainArea.style.display = "block";
    const submitArea = document.getElementById('submit');
    submitArea.style.display = "none";

});