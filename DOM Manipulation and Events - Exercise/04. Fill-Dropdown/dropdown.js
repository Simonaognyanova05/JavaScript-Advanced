function addItem() {
    let newItemTextElement = document.getElementById('newItemText');
    let newItemValueElement = document.getElementById('newItemValue');
    let selectElement = document.getElementById('menu');

    let optionElement = document.createElement('option');
    optionElement.textContent = newItemTextElement.value;
    optionElement.value = newItemValueElement.value;
    selectElement.appendChild(optionElement);

    newItemTextElement.value = '';
    newItemValueElement.value = '';
}