const form = document.querySelector('#form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let numero_a = parseInt(document.querySelector('.numeroA').value);
    let numero_b = parseInt(document.querySelector('.numeroB').value);
    let msg = document.querySelector('#msg');

    if (numero_b > numero_a) {
        msg.innerHTML = 'B é maior que A';
        msg.classList.remove('invalid');
        msg.classList.add('valid');
    } else {
        msg.innerHTML = 'A é maior que B';
        msg.classList.remove('valid');
        msg.classList.add('invalid');
    }
})