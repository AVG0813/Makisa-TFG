const botones = document.querySelectorAll(".filtros button");
const productos = document.querySelectorAll(".card");

botones.forEach(boton => {

    boton.addEventListener("click", () => {

        document
            .querySelector(".filtro-activo")
            .classList.remove("filtro-activo");

        boton.classList.add("filtro-activo");

        const filtro = boton.dataset.filtro;

        productos.forEach(producto => {

            if (
                filtro === "todos" ||
                producto.dataset.categoria === filtro
            ) {
                producto.style.display = "block";
            } else {
                producto.style.display = "none";
            }

        });

    });

});