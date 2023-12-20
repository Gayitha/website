// Function for hiding/displaying productID
function toggleProductID() {
    var reasonDropdown = document.getElementById("selectReason");
    var productIDRow = document.getElementById("productIDRow");

    if (reasonDropdown.value === "Product info") {
        productIDRow.style.display = "block";
    } else {
        productIDRow.style.display = "none";
    }
}