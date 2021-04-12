function doubleTheValue(value) {
        return value * 2;
}

function runTask() {
    let textValue = document.getElementById('textview');
    let stringValue = textValue.textContent;
    let originalValue = parseInt(stringValue);
    let newValue = doubleTheValue(originalValue);
    textValue.textContent = newValue;

    let snackbar = document.getElementById('snackbar');
    let barContent = document.getElementById('bar-content');
    snackbar.style.display = "block";
    snackbar.style.fontFamily = "sans-serif";

    barContent.textContent = "Changed value " + originalValue
                             + " to " + newValue;
    setTimeout( () => {
        snackbar.style.display = "none";
    }, 1000);
}