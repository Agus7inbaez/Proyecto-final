// Objeto que representa a la profesora
const profesora = {
    nombre: 'Lucia',
    asignatura: 'Matemáticas'
};

// Array para almacenar los nombres de los alumnos
let nombresAlumnos = [];

// Función para calcular el promedio
function calcularPromedio() {
    const nombre = document.getElementById('inputNombre').value;
    const nota1 = parseFloat(document.getElementById('inputNota1').value);
    const nota2 = parseFloat(document.getElementById('inputNota2').value);
    const nota3 = parseFloat(document.getElementById('inputNota3').value);

    if (nombre && !isNaN(nota1) && !isNaN(nota2) && !isNaN(nota3)) {
        const promedio = ((nota1 + nota2 + nota3) / 3).toFixed(2);

        if (promedio > 10) {
            mostrarResultado('El promedio no puede ser mayor a 10.', 0);
        } else if (promedio >= 7) {
            mostrarResultado(`${nombre} ha aprobado con un promedio de ${promedio}.`);
            realizarAnimacion('aprobado');
        } else {
            mostrarResultado(`${nombre} ha desaprobado con un promedio de ${promedio}.`);
            realizarAnimacion('desaprobado');
        }

        // Guardar datos en localStorage y mostrarlos en la consola
        guardarDatos(nombre, promedio);
    } else {
        mostrarResultado('Por favor, complete todos los campos correctamente.', 0);
    }
}

// Función para mostrar el resultado en el DOM
function mostrarResultado(mensaje) {
    const resultado = document.getElementById('resultado');
    resultado.textContent = mensaje;
}

// Función para realizar animaciones
function realizarAnimacion(estado) {
    const container = document.querySelector('.container');

    // Animación de anime.js
    anime({
        targets: '.container',
        duration: 1000,
        easing: 'easeInOutQuad',
        backgroundColor: estado === 'aprobado' ? '#5cb85c' : '#d9534f',
        complete: function (anim) {
            console.log(`Animación de ${estado} completada.`);
        }
    });
}

// Función para guardar datos en localStorage y mostrarlos en la consola
function guardarDatos(nombre, promedio) {
    // Verificar si el nombre del alumno ya existe en el array
    if (nombresAlumnos.includes(nombre)) {
        console.log(`El alumno ${nombre} ya existe en la lista.`);
    } else {
        // Agregar el nuevo nombre de alumno al array
        nombresAlumnos.push(nombre);
        console.log(`Nombre del alumno agregado: ${nombre}`);

        // Obtener datos existentes de localStorage o inicializar un array vacío si no hay datos
        let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

        // Agregar el nuevo alumno con su promedio
        alumnos.push({ nombre, promedio });

        // Guardar el array actualizado en localStorage
        localStorage.setItem('alumnos', JSON.stringify(alumnos));

        // Mostrar los datos del alumno guardado en la consola
        console.log(`Alumno guardado: ${nombre}, Promedio: ${promedio}`);
    }
}

// Utilizando fetch
let url = 'https://pokeapi.co/api/v2/pokemon/17/'

fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
