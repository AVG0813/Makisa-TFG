const botones = document.querySelectorAll(".filtros button");
const productos = document.querySelectorAll(
    ".productos-catalogo .card-link"
);

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        const activo =
            document.querySelector(".filtro-activo");

        if (activo) {
            activo.classList.remove("filtro-activo");
        }

        boton.classList.add("filtro-activo");

        const filtro = boton.dataset.filtro;

        productos.forEach(producto => {

            const categoria =
                producto.querySelector(".card")
                        .dataset.categoria;

            if (
                filtro === "todos" ||
                categoria === filtro
            ) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }

        });

    });

});

const parametros = new URLSearchParams(window.location.search);
const categoriaURL = parametros.get("categoria");

if (categoriaURL) {

    const boton = document.querySelector(
        `[data-filtro="${categoriaURL}"]`
    );

    if (boton) {
        boton.click();
    }
}