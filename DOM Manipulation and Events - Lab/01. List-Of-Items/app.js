function addItem() {
    let parentElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText').value;
    let newLiElement = document.createElement('li');
    newLiElement.textContent = inputElement;

    parentElement.appendChild(newLiElement);
    inputElement = '';
} 