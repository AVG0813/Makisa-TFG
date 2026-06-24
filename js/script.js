// Mensajes de comprobación para verificar que el archivo JavaScript se carga correctamente
console.log("JavaScript funcionando");
console.log("JS cargado correctamente");

// Obtiene la referencia al formulario de contacto
const formulario = document.getElementById("contactForm");

// Comprueba que el formulario existe antes de añadir eventos
if(formulario){

    // Evento que se ejecuta al enviar el formulario
    formulario.addEventListener("submit", function(e){

        // Evita el envío tradicional y la recarga de la página
        e.preventDefault();

        // Obtiene los datos introducidos por el usuario
        const nombre =
            document.getElementById("nombre").value;

        const email =
            document.getElementById("email").value;

        const mensaje =
            document.getElementById("mensaje").value;

        // Asunto predeterminado del correo
        const asunto =
            "Mensaje desde la web de Makisá";

        // Construye el contenido del correo con los datos del formulario
        const cuerpo =
`Nombre: ${nombre}

Correo: ${email}

Mensaje:
${mensaje}`;

        // Abre el cliente de correo predeterminado del usuario
        // rellenando automáticamente asunto y mensaje
        window.location.href =
        `mailto:hola@makisa.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    });

}