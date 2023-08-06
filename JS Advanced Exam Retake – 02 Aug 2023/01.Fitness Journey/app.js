window.addEventListener('load', solve);

function solve() {
    let nameElement = document.getElementById('name');
    let emailElement = document.getElementById('email');
    let numberElement = document.getElementById('contact-number');
    let typeElement = document.getElementById('class-type');
    let timeElement = document.getElementById('class-time');
    let submitBtn = document.getElementById('next-btn');

    let ulElement = document.querySelector('#preview-section .class-info');
    let confirmElement = document.querySelector('#confirm-section .confirm-class');


    submitBtn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(nameElement.value === '' || emailElement.value === '' || numberElement.value === '' || typeElement.value === '' || timeElement.value === ''){
            return;
        }
        let liElement = document.createElement('li');
        liElement.classList.add('info-item');
        let articleElement = document.createElement('article');
        articleElement.classList.add('personal-info');

        let pNameElement = document.createElement('p');
        pNameElement.textContent = nameElement.value;

        let pEmailElement = document.createElement('p');
        pEmailElement.textContent = emailElement.value;

        let pNumberElement = document.createElement('p');
        pNumberElement.textContent = numberElement.value;

        let pTimeElement = document.createElement('p');
        pTimeElement.textContent = timeElement.value;

        let pTypeElement = document.createElement('p');
        pTypeElement.textContent = typeElement.value;
        
        articleElement.appendChild(pNameElement);
        articleElement.appendChild(pEmailElement);
        articleElement.appendChild(pNumberElement);
        articleElement.appendChild(pTypeElement);
        articleElement.appendChild(pTimeElement);

        
        nameElement.value = '';
        emailElement.value = '';
        numberElement.value = '';
        typeElement.value = '';
        timeElement.value = '';
        e.currentTarget.disabled = true;
        
        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        
        let continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        
        liElement.appendChild(articleElement);
        liElement.appendChild(editBtn);
        liElement.appendChild(continueBtn);
        ulElement.appendChild(liElement);

        editBtn.addEventListener('click', () => {
            nameElement.value = pNameElement.textContent;
            emailElement.value = pEmailElement.textContent;
            numberElement.value = pNumberElement.textContent;
            typeElement.value = pTypeElement.textContent;
            timeElement.value = pTimeElement.textContent;
            liElement.remove();
            submitBtn.disabled = false;
        })
        
        continueBtn.addEventListener('click', ()=>{
            liElement.removeChild(editBtn);
            liElement.removeChild(continueBtn);
            ulElement.innerHTML = '';
            let cancelButton = document.createElement('button');
            cancelButton.classList.add('cancel-btn');
            cancelButton.textContent = 'Cancel';
            let confirmButton = document.createElement('button');
            confirmButton.classList.add('confirm-btn');
            confirmButton.textContent = 'Confirm';
            
            confirmElement.appendChild(liElement);
            confirmElement.appendChild(cancelButton);
            confirmElement.appendChild(confirmButton);

            cancelButton.addEventListener('click', ()=>{
                confirmElement.innerHTML = '';
                submitBtn.disabled = false;
            })
            confirmButton.addEventListener('click', ()=>{
                let mainElement = document.getElementById('main');
                let bodyElement = document.body;
                bodyElement.removeChild(mainElement);
                let hElement = document.createElement('h1');
                hElement.setAttribute('id', 'thank-you');
                hElement.textContent = 'Thank you for scheduling your appointment, we look forward to seeing you!';

                let buttonElement = document.createElement('button');
                buttonElement.setAttribute('id', 'done-btn');
                buttonElement.textContent = 'Done';
                
                bodyElement.appendChild(hElement);
                bodyElement.appendChild(buttonElement);

                buttonElement.addEventListener('click', ()=>{
                    location.reload();
                })
            })
        })
    })

}




