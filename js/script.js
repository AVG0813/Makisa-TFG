console.log("JavaScript funcionando");
console.log("JS cargado correctamente");
const formulario = document.getElementById("contactForm");

if(formulario){

    formulario.addEventListener("submit", function(e){

        e.preventDefault();

        const nombre =
            document.getElementById("nombre").value;

        const email =
            document.getElementById("email").value;

        const mensaje =
            document.getElementById("mensaje").value;

        const asunto =
            "Mensaje desde la web de Makisá";

        const cuerpo =
`Nombre: ${nombre}

Correo: ${email}

Mensaje:
${mensaje}`;

        window.location.href =
        `mailto:hola@makisa.com?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    });

}