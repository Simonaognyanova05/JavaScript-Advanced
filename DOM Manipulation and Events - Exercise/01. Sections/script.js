function create(words) {
   let divElement = document.getElementById('content');
   for (let word of words) {
      let newElement = document.createElement('div');
      let secondElement = document.createElement('p');
      secondElement.textContent = word;
      secondElement.style.display = 'none';
      newElement.appendChild(secondElement);
      divElement.appendChild(newElement);

      newElement.addEventListener('click', (e) => {
         secondElement.style.display = 'block';
      })
   }
}