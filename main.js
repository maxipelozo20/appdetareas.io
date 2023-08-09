let input = document.getElementById('input');

function TacharPalabra(btnNumber) {
let btn = document.getElementById('checkbox-' + btnNumber);
let txt = document.getElementById('txt-' + btnNumber);

btn.addEventListener('click', () => {
    if (input.value.trim() === '') {
    alert('Por favor, ingresa tu usuario antes de marcar una tarea como completada.');
    btn.checked = false;
    return;
    }

    if (txt.style.textDecoration === 'line-through red') {
    txt.style.textDecoration = 'none';
    } else {
    txt.style.textDecoration = 'line-through red';
    alert('!Felicidades ' + input.value + ', has completado la tarea: ' + txt.innerHTML + '¡');
    }
});

input.addEventListener('input', () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const enableCheckboxes = input.value.trim() !== '';
    checkboxes.forEach((checkbox) => (checkbox.disabled = !enableCheckboxes));
});
}

TacharPalabra(1);
TacharPalabra(2);
TacharPalabra(3);
TacharPalabra(4);
TacharPalabra(5);
TacharPalabra(6);
TacharPalabra(7);
TacharPalabra(8);
TacharPalabra(9);
TacharPalabra(10);