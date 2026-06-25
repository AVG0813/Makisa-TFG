// Botones de filtro del catálogo
//se obtienen todos los botones de filtro del catálogo provenientes del HTML
const botones = document.querySelectorAll(".filtros button");

// Productos del catálogo
const productos = document.querySelectorAll(".productos-catalogo .card-link");

// Evento para cada botón
botones.forEach(boton => {

    boton.addEventListener("click", () => {

        // Quitar filtro activo anterior
        const activo = document.querySelector(".filtro-activo");
        if (activo) activo.classList.remove("filtro-activo");

        // Activar botón actual (activa CSS para resaltar el botón seleccionado)
        boton.classList.add("filtro-activo");

        // Filtro seleccionado
        const filtro = boton.dataset.filtro.toLowerCase();

        // Filtrar productos
        productos.forEach(producto => {
// Se obtiene la categoría del producto desde el atributo data-categoria del elemento card
// Se utiliza toLowerCase() para hacer la comparación insensible a mayúsculas/minúsculas
// Se utiliza un operador ternario para manejar el caso en que card sea null
// Se utiliza style.display para mostrar u ocultar el producto según el filtro seleccionado


            const card = producto.querySelector(".card");
            //Si existe card → usa dataset; Si no existe → usa ""

            const categoria = card ? card.dataset.categoria.toLowerCase() : "";

            if (filtro === "todos" || categoria === filtro) {
                producto.style.display = ""; // deja que CSS decida
            } else {
                producto.style.display = "none";
            }
        });

    });

});

// Filtro por URL (categoria)
//URLSearchParams es una clase nativa de JavaScript que permite obtener y manipular los parámetros de la URL
const parametros = new URLSearchParams(window.location.search);
const categoriaURL = parametros.get("categoria");

if (categoriaURL) {

    const boton = document.querySelector(`[data-filtro="${categoriaURL}"]`);

    if (boton) boton.click();
}