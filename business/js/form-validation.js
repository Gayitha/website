// Functions for form validation
function validateName() {
    var nameInput = document.getElementById("name");
    var nameValue = nameInput.value;
    var isValid = /^[^\d]{4,}$/.test(nameValue);

    if (isValid) {
        nameInput.style.border = "2px solid green";
    } else {
        nameInput.style.border = "2px solid red";
    }
}

function validatePhone() {
    var phoneInput = document.getElementById("phone");
    var phoneValue = phoneInput.value;
    var isValid = /^\d{3} \d{3} \d{4}$/.test(phoneValue);

    if (isValid) {
        phoneInput.style.border = "2px solid green";
    } else {
        phoneInput.style.border = "2px solid red";
    }
}

function validateProductID() {
    var productIDInput = document.getElementById("productID");
    var productIDValue = productIDInput.value;
    var validProductCodes = ["CA-VDJJ7R", "CA-ZALAUB", "CA-T4P337", "CA-SCJJGG", "CA-FAZUB7", "CA-MAG4VH"];
    var isValid = validProductCodes.includes(productIDValue);

    if (isValid) {
        productIDInput.style.border = "2px solid green";
    } else {
        productIDInput.style.border = "2px solid red";
    }
}

function validateMessage() {
    var messageInput = document.getElementById("message");
    var messageValue = messageInput.value;
    var isValid = messageValue.length > 10 && messageValue.length < 30;

    if (isValid) {
        messageInput.style.border = "2px solid green";
    } else {
        messageInput.style.border = "2px solid red";
    }
}