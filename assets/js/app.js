var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" },
    { tarea: "Visitar a la abuela" }
];

// Inicializar la tabla con las tareas existentes
actualizarTabla();

// Función para actualizar la tabla de tareas
function actualizarTabla() {
    var cuerpoTabla = document.getElementById("cuerpo-tabla");
    cuerpoTabla.innerHTML = "";
    tareas.forEach((tarea, index) => {
        cuerpoTabla.innerHTML += `
            <tr>
                <td>${tarea.tarea}</td>
                <td><button type="button" class="btn btn-danger" onclick="eliminar(${index})">Finalizar</button></td>
            </tr>`;
    });
}

// Función para eliminar una tarea del arreglo y actualizar la tabla
function eliminar(indice) {
    tareas.splice(indice, 1);
    actualizarTabla();
}

// Función para mostrar u ocultar el formulario
function mostrarFormulario() {
    var formulario = document.getElementById("formulario");
    formulario.style.display = (formulario.style.display === "none" || formulario.style.display === "") ? "block" : "none";
}

// Función para agregar una nueva tarea al arreglo y actualizar la tabla
function agregarTarea() {
    var nuevaTarea = document.getElementById("nuevaTarea").value.trim();
    if (nuevaTarea) {
        tareas.push({ tarea: nuevaTarea });
        actualizarTabla();
        document.getElementById("formulario").style.display = "none";
        document.getElementById("nuevaTarea").value = "";
    } else {
        alert("Por favor, ingresa una tarea."); // Mensaje de alerta si el input está vacío
    }
}

