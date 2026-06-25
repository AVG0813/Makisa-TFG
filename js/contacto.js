// Captura el evento submit del formulario de contacto
document
  .getElementById("contactoForm")
  .addEventListener("submit", async (e) => {

    // Evita el envío tradicional del formulario y la recarga de la página
    e.preventDefault();

    // Obtiene los datos introducidos por el usuario
    const nombre = document.querySelector("[name='nombre']").value;
    const email = document.querySelector("[name='email']").value;
    const mensaje = document.querySelector("[name='mensaje']").value;

    try {

      // Envía los datos al backend (servidor node.js) mediante una petición HTTP POST
      //La función nativa fetch() en JavaScript permite realizar peticiones asíncronas a servidores de forma nativa
      const respuesta = await fetch(
        "http://localhost:3000/contacto",
        {
          method: "POST",
          headers: {
            // Indica que los datos se enviarán en formato JSON
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            nombre,
            email,
            mensaje
          })
        }
      );

      // Si la inserción en la base de datos se realiza correctamente,
      // redirige al usuario a la página de confirmación
      if (respuesta.ok) {
        window.location.href = "gracias.html";
      } else {
        alert("Error al guardar el mensaje");
      }

    } catch (error) {

      // Gestión de errores de conexión o comunicación con el servidor
      console.error(error);
      alert("No se pudo conectar con el servidor");

    }

});