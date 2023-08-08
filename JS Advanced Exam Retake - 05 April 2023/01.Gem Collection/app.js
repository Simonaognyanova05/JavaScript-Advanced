window.addEventListener("load", solve);

function solve() {
    let gemName = document.getElementById('gem-name');
    let color = document.getElementById('color');
    let carats = document.getElementById('carats');
    let price = document.getElementById('price');
    let type = document.getElementById('type');

    let btn = document.getElementById('add-btn');

    let preview = document.getElementById('preview-list');
    let collection = document.getElementById('collection');
    
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        if (gemName.value == ''
            || color.value == ''
            || carats.value == ''
            || price.value == ''
            || type.value == ''
        ) {
            return;
        }

        let liElement = document.createElement('li');
        liElement.classList.add('gem-info');
        let articleElement = document.createElement('article');

        let hName = document.createElement('h4');
        hName.textContent = gemName.value;
        let pColor = document.createElement('p');
        pColor.textContent = `Color: ${color.value}`;
        let pCarats = document.createElement('p');
        pCarats.textContent = `Carats: ${carats.value}`;
        let pPrice = document.createElement('p');
        pPrice.textContent = `Price: ${price.value}`;
        let pType = document.createElement('p');
        pType.textContent = `Type: ${type.value}`;

        articleElement.appendChild(hName);
        articleElement.appendChild(pColor);
        articleElement.appendChild(pCarats);
        articleElement.appendChild(pPrice);
        articleElement.appendChild(pType);
        liElement.appendChild(articleElement);
        preview.appendChild(liElement);

        gemName.value = '';
        color.value = '';
        carats.value = '';
        price.value = '';
        type.value = '';
        e.currentTarget.disabled = true;

        let saveBtn = document.createElement('button');
        saveBtn.classList.add('save-btn');
        saveBtn.textContent = 'Save to Collection';
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit Information';
        let cancelBtn = document.createElement('button');
        cancelBtn.classList.add('cancel-btn');
        cancelBtn.textContent = 'Cancel';

        liElement.appendChild(saveBtn);
        liElement.appendChild(editBtn);
        liElement.appendChild(cancelBtn);

        editBtn.addEventListener('click', ()=>{
            gemName.value = hName.textContent;
            color.value = (pColor.textContent).split(': ')[1];
            carats.value = (pCarats.textContent).split(': ')[1];
            price.value = (pPrice.textContent).split(': ')[1];
            type.value = (pType.textContent).split(': ')[1];

            liElement.remove();
            btn.disabled = false;
        })

        saveBtn.addEventListener('click', ()=>{
            let liElementConfirm = document.createElement('li');

            let pElement = document.createElement('p');
            pElement.classList.add('collection-item');
            pElement.textContent = `${hName.textContent} - ${pColor.textContent}/ ${pCarats.textContent}/ ${pPrice.textContent}$/ ${pType.textContent}`;
            
            liElementConfirm.appendChild(pElement);
            collection.appendChild(liElementConfirm);
            liElement.remove();
            btn.disabled = false;
        })

        cancelBtn.addEventListener('click', ()=>{
            liElement.remove();
            btn.disabled = false;
        })

    })
}
