const pantalla = document.getElementById('pantalla');
const historial = document.getElementById('historial');
let operacionActual = '';
let operador = '';
let primerOperando = '';
const historialOperaciones = [];



// Función para actualizar la pantalla
const actualizarPantalla = (valor) => {
    pantalla.value = valor;
};

// Función para agregar un número
const agregarNumero = (numero) => {
    if (operacionActual.includes('.') && numero === '.') return; // Evita múltiples puntos decimales
    operacionActual += numero;
    actualizarPantalla(operacionActual);
};

// Función para agregar un operador
const agregarOperador = (op) => {
    if (operacionActual === '') return;
    if (primerOperando !== '') calcularResultado();
    operador = op;
    primerOperando = operacionActual;
    operacionActual = '';
};

// Función para calcular el resultado
const calcularResultado = () => {
    if (operacionActual === '' || primerOperando === '') return;

    const num1 = parseFloat(primerOperando);
    const num2 = parseFloat(operacionActual);
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                actualizarPantalla('Error: División por cero');
                limpiarPantalla();
                return;
            }
            resultado = num1 / num2;
            break;
        default:
            return;
    }

    actualizarPantalla(resultado);
    agregarAlHistorial(`${primerOperando} ${operador} ${operacionActual} = ${resultado}`);
    operacionActual = resultado.toString();
    primerOperando = '';
    operador = '';
};

// Función para limpiar la pantalla
const limpiarPantalla = () => {
    actualizarPantalla('');
    operacionActual = '';
    primerOperando = '';
    operador = '';
};

// Función para cambiar el signo del número
const cambiarSigno = () => {
    if (operacionActual !== '') {
        operacionActual = (parseFloat(operacionActual) * -1).toString();
        actualizarPantalla(operacionActual);
    }
};

// Función para calcular porcentajes
const agregarPorcentaje = () => {
    if (operacionActual !== '') {
        operacionActual = (parseFloat(operacionActual) / 100).toString();
        actualizarPantalla(operacionActual);
    }
};

// Función para agregar un punto decimal

const agregarDecimal = () => {
    if (!operacionActual.includes('.')) {
        operacionActual += '.';
        actualizarPantalla(operacionActual);
    }
}

// Función para calcular la raíz cuadrada
const calcularRaizCuadrada = () => {
    if (operacionActual !== '') {
        const resultado = Math.sqrt(parseFloat(operacionActual));
        actualizarPantalla(resultado);
        agregarAlHistorial(`√${operacionActual} = ${resultado}`);
        operacionActual = resultado.toString();
    }
};

// Función para calcular potencias
const calcularPotencia = () => {
    if (operacionActual !== '') {
        const resultado = Math.pow(parseFloat(operacionActual), 2);
        actualizarPantalla(resultado);
        agregarAlHistorial(`${operacionActual}² = ${resultado}`);
        operacionActual = resultado.toString();
    }
};

// Función para agregar una operación al historial
const agregarAlHistorial = (operacion) => {
    historialOperaciones.push(operacion);
    if (historialOperaciones.length > 5) historialOperaciones.shift(); // Limita el historial a 5 operaciones
    historial.innerHTML = historialOperaciones.join('<br>');
};

// Funcion para borrar el ultimo numero
const borrarUltimoNumero = () => {
    operacionActual = operacionActual.slice(0, -1);
    actualizarPantalla(operacionActual);
}

// Función para calcular el factorial de un numero

const calcularFactorial = () => {
    if (operacionActual !== '') {
        let numero = parseInt(operacionActual);
        if (numero < 0) {
            actualizarPantalla('Error: Factorial de negativo');
            return;
        }
        let factorial = 1;
        for (let i = 1; i <= numero; i++) {
            factorial *= i;
        }
        actualizarPantalla(factorial);
        agregarAlHistorial(`${numero}! = ${factorial}`);
        operacionActual = factorial.toString();
    }
}

// Función para calcular el logaritmo natural (Ln)

const calcularLogaritmoNatural = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        if (numero <= 0) {
            actualizarPantalla('Error: Ln de numero no positivo');
            return;
        }
        const resultado = Math.log(numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`Ln(${numero}) = ${resultado}`);
        operacionActual = resultado.toString();
    }
}

// Función para calcular el logaritmo en base 10 (log)

const calcularLogaritmoBase10 = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        if (numero <= 0) {
            actualizarPantalla('Error: Log de numero no positivo');
            return;
        }
        const resultado = Math.log10(numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`Log(${numero}) = ${resultado}`);
        operacionActual = resultado.toString();
    }
};

// Función para calcular el seno de un número

const calcularSeno = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        const resultado = Math.sin(numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`Sen(${numero}) = ${resultado}`);
        operacionActual = resultado.toString();
    }
};

// Función para calcular el coseno de un número

const calcularCoseno = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        const resultado = Math.cos(numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`Cos(${numero}) = ${resultado}`);
        operacionActual = resultado.toString();
    }
}

// Función para calcular la tangente de un número

const calcularTangente = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        const resultado = Math.tan(numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`Tan(${numero}) = ${resultado}`);
        operacionActual = resultado.toString();
    }
};

// Función para calcular el valor absoluto de un número

const calcularValorAbsoluto = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        const resultado = Math.abs(numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`|${numero}| = ${resultado}`);
        operacionActual = resultado.toString();
    }
}

// Función para calcular el exponencial (e^x)

const calcularExponencial = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        const resultado = Math.exp(numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`e^${numero} = ${resultado}`);
        operacionActual = resultado.toString();
    }
};

// Función para calcular la potencia de 10 (10^x)

const calcularPotenciaDe10 = () => {
    if (operacionActual !== '') {
        const numero = parseFloat(operacionActual);
        const resultado = Math.pow(10, numero);
        actualizarPantalla(resultado);
        agregarAlHistorial(`10^${numero} = ${resultado}`);
        operacionActual = resultado.toString();
    }
};

// Función para agregar el valor de PI (π)

const agregarPi = () => {
    if (operacionActual === '') {
        operacionActual = Math.PI.toString();
        actualizarPantalla(operacionActual);
    }
};

// Función para agregar el valor de Euler (e)

const agregarEuler = () => {
    if (operacionActual === '') {
        operacionActual = Math.E.toString();
        actualizarPantalla(operacionActual);
    }
};

// Función para alternar entre tema oscuro y claro
const alternarTema = () => {
    const body = document.body;
    const calculadora = document.querySelector('.calculadora');
    const botonTema = document.getElementById('toggleTema');
  
    body.classList.toggle('tema-claro');
    calculadora.classList.toggle('tema-claro');
    botonTema.textContent = body.classList.contains('tema-claro') ? '🌞' : '🌙';
  };

  // Función para borrar el historial
const borrarHistorial = () => {
    historialOperaciones.length = 0; // Vacía el array del historial
    historial.innerHTML = ''; // Limpia el contenido del historial en la pantalla
  };

  // Función para redirigir al código en GitHub
const irAGithub = () => {
    window.open('https://github.com/firf18/mi-portafolio/tree/main/calculadora', '_blank');
  };