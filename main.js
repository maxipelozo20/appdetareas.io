const input = document.getElementById('input')

function toggleTextDecoration(btnNumber) {
    const btn = document.getElementById('checkbox-' + btnNumber);
    const txt = document.getElementById('txt-' + btnNumber)

    btn.addEventListener('click', () => {
        if (txt.style.textDecoration === "line-through red") {
        txt.style.textDecoration = "none";
        } else {
        txt.style.textDecoration = "line-through red";
        alert('Felicidades '+ input.value + ' haz completado la tarea ' + txt.innerHTML);
        }
    });
    }

    toggleTextDecoration(1);
    toggleTextDecoration(2);
    toggleTextDecoration(3);
    toggleTextDecoration(4);
    toggleTextDecoration(5);
    toggleTextDecoration(6);
    toggleTextDecoration(7);
    toggleTextDecoration(8);
    toggleTextDecoration(9);
    toggleTextDecoration(10);