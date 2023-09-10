const setPin = document.querySelector('#setPin');
const recoverMail = document.querySelector('#email')
const pin = document.querySelector('#pin')

setPin.addEventListener('click', (e) => {
    e.preventDefault();
    if(localStorage.getItem('9$A7#pKxZ1Qn@vT3') != null){
        alert('Pin is already set')
    }
    else if (pin.value.length >= 4 && pin.value.length <= 6) {
        localStorage.setItem('9$A7#pKxZ1Qn@vT3', window.btoa(pin.value));
        localStorage.setItem('R$6mJ9wXz@Kp3tQ7', window.btoa(recoverMail.value));
        alert('PIN and email saved successfully!');
    } else {
        alert('The length of the PIN must be between 4 and 6 characters.');
    }
});