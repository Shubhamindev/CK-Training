function addNumberToArray() {
    const number = parseInt(document.getElementById('numberInput').value);
    if (isNaN(number)|| number === '') {
        alert("Please enter a valid number.");
        return;
    }
    numbers.push(number);
    document.getElementById('arrayDisplay').innerText = "Updated Array: " + numbers.join(', ');
    document.getElementById('numberInput').value = '';
}
const numbers = [];

