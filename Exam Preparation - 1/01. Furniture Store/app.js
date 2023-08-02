window.addEventListener('load', solve);

function solve() {
    let buttonElement = document.getElementById('add');
    let modelElement = document.getElementById('model');
    let yearElement = document.getElementById('year');
    let descriptionElement = document.getElementById('description');
    let priceElement = document.getElementById('price');
    let tbodyElement = document.getElementById('furniture-list');
    let totalPriceElement = document.querySelector('.total-price');

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();
        let year = Number(yearElement.value);
        let price = Number(priceElement.value); 
        if(!modelElement.value || !descriptionElement.value){
            return;
        }
        if(year <= 0 || price <= 0){
            return;
        }

        let rowElement = document.createElement('tr');
        rowElement.classList.add('info');
        let modelCellElement = document.createElement('td');
        let priceCellElement = document.createElement('td');
        let actionCellElement = document.createElement('td');

        modelCellElement.textContent = modelElement.value;
        priceCellElement.textContent = price.toFixed(2);

        let moreCellElement = document.createElement('button');
        let buyCellElement = document.createElement('button');
        moreCellElement.classList.add('moreBtn');
        buyCellElement.classList.add('buyBtn');

        moreCellElement.textContent = 'More Info';
        buyCellElement.textContent = 'Buy it';
        
        actionCellElement.appendChild(moreCellElement);
        actionCellElement.appendChild(buyCellElement);
        
        rowElement.appendChild(modelCellElement);
        rowElement.appendChild(priceCellElement);
        rowElement.appendChild(actionCellElement);
        
        let secondRowElement = document.createElement('tr');
        secondRowElement.classList.add('hide');
        secondRowElement.style.display = 'contents';
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearElement.value}`;
        let tdDescription = document.createElement('td');
        tdDescription.setAttribute('colspan', 3);
        tdDescription.textContent = `Description: ${descriptionElement.value}`;
        
        secondRowElement.appendChild(tdYear);
        secondRowElement.appendChild(tdDescription);
        
        tbodyElement.appendChild(rowElement);
        moreCellElement.addEventListener('click', (e) => {
            if( e.currentTarget.textContent === 'Less Info'){
                e.currentTarget.textContent = 'More Info'
                tbodyElement.removeChild(secondRowElement);

            }else{
                e.currentTarget.textContent = 'Less Info'
                tbodyElement.appendChild(secondRowElement);
            }

            
        })
        
        buyCellElement.addEventListener('click', () => {
            let currentTotalPrice = Number(totalPriceElement.textContent);
            let totalPrice = currentTotalPrice + price;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            rowElement.remove();
            secondRowElement.remove();
        })

        modelElement.value = '';
        yearElement.value = '';
        descriptionElement.value = '';
        priceElement.value = '';
    })
}
