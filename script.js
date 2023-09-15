const primerDiv = document.querySelector('.primer-paso');
const segundoDiv = document.querySelector('.segundo-paso');
const finalDiv = document.querySelector('.ultimo-paso');

function avanzar(pasoActual, siguientePaso) {

    let dNone, dBloqueo;

    if(pasoActual == 1) {
        dNone = primerDiv;
    } else if (pasoActual == 2) {
        dNone = segundoDiv;
    } else {
        dNone = finalDiv;
    }
    dNone.style.display = 'none';

    if(siguientePaso == 1) {
        dBloqueo = primerDiv;
    } else if (siguientePaso == 2) {
        dBloqueo = segundoDiv;
    } else {
        dBloqueo = finalDiv;
    }
    dBloqueo.style.display = 'block';
}  

function validacion() {
    const peso   = document.getElementById('peso');
    const altura = document.getElementById('altura');
    peso.style.border   = 'none';
    altura.style.border = 'none';

    if(!peso.value || !altura.value) {
        if(!peso.value && !altura.value) {
            peso.style.border = '1px solid red';
            altura.style.border = '1px solid red';
        } else if (!peso.value) {
            peso.style.border = '1px solid red';
        } else {
            altura.style.border = '1px solid red';
        }
    } else {
        let imc = peso.value / (altura.value *  altura.value);
        const resultado = document.getElementById('resultado');
        if(imc < 18.5) {
            console.log('Bajo peso | Obesidad: 0');
            resultado.style.color = 'yellow'
            resultado.innerHTML = 'Bajo peso | Obesidad: 0';
        } else if(imc >= 18.5 && imc < 25) {
            console.log('Peso normal o adecuado | Obesidad: 0');
            resultado.style.color = 'green'
            resultado.innerHTML = 'Peso normal o adecuado | Obesidad: 0';
        } else if (imc >= 25 && imc < 30) {
            console.log('Sobrepeso | Obesidad: 0');
            resultado.style.color = 'yellow'
            resultado.innerHTML = 'Sobrepeso | Obesidad: 0';
        } else if (imc >= 30 && imc < 35) {
            console.log('Obesidad | Grado: I');
            resultado.style.color = 'red'
            resultado.innerHTML = 'Obesidad | Grado: I';
        } else if (imc >= 35 && imc < 40) {
            console.log('Obesidad | Grado: II');
            resultado.style.color = 'red'
            resultado.innerHTML = 'Obesidad | Grado: II';
        } else {
            console.log('Obesidad grave | Grado: III');
            resultado.style.color = 'red'
            resultado.innerHTML = 'Obesidad grave | Grado: III';
        }
        avanzar(2,3);
    }
    
}