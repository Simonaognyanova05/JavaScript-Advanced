function attachEventsListeners() {
    //Inputs
    let daysInputElement = document.getElementById('days');
    let hoursInputElement = document.getElementById('hours');
    let minutesInputElement = document.getElementById('minutes');
    let secondsInputElement = document.getElementById('seconds');

    //Buttons
    let daysButton = document.getElementById('daysBtn');
    let hoursButton = document.getElementById('hoursBtn');
    let minutesButton = document.getElementById('minutesBtn');
    let secondsButton = document.getElementById('secondsBtn');

    //Converting days
    daysButton.addEventListener('click', () => {
        hoursInputElement.value = (Number(daysInputElement.value) * 24).toString();
        minutesInputElement.value = (Number(daysInputElement.value) * 1440).toString();
        secondsInputElement.value = (Number(daysInputElement.value) * 86400).toString();
    });

    //Converting hours
    hoursButton.addEventListener('click', () => {
        daysInputElement.value = (Number(hoursInputElement.value) / 24).toString();
        minutesInputElement.value = (Number(hoursInputElement.value) * 60).toString();
        secondsInputElement.value = (Number(hoursInputElement.value) * 3600).toString();
    });

     //Converting minutes
     minutesButton.addEventListener('click', () => {
        daysInputElement.value = (Number(minutesInputElement.value) / 1440).toString();
        hoursInputElement.value = (Number(minutesInputElement.value) / 60).toString();
        secondsInputElement.value = (Number(minutesInputElement.value) * 60).toString();
    });

    //Converting seconds
    secondsButton.addEventListener('click', () => {
        daysInputElement.value = (Number(secondsInputElement.value) / 86400).toString();
        hoursInputElement.value = (Number(secondsInputElement.value) / 3600).toString();
        minutesInputElement.value = (Number(secondsInputElement.value) / 60).toString();
    });
}