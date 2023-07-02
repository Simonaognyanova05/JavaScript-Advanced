function addItem() {
    let ulElement = document.getElementById('items');
    let inputElement = document.getElementById('newItemText').value;

    let liElement = document.createElement('li');
    liElement.textContent = inputElement;
    ulElement.appendChild(liElement);

    let aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = '[Delete]';
    aElement.addEventListener('click', (e) => e.currentTarget.parentNode.remove())
    liElement.appendChild(aElement);
}