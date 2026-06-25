//diccionario clave-valor que contiene la información de los productos

const productos = {

    "flor-fucsia": {
        nombre: "Flor Fucsia",
        categoria: "Aretes",
        precio: "$35.000 COP",
        imagen: "img/productos/arete-flor-fucsia-1.jpeg",
        descripcion:
            "Aretes artesanales inspirados en formas botánicas y elaborados cuidadosamente a mano."
    },

    "topo-rosa-blanco": {
        nombre: "Topo Rosa y Blanco",
        categoria: "Aretes",
        precio: "$20.000 COP",
        imagen: "img/productos/topo-rosa-blanco.jpeg",
        descripcion:
            "Topos artesanales inspirados en la naturaleza."
    },

    "topo-azul-negro": {
        nombre: "Topo Azul y Negro",
        categoria: "Aretes",
        precio: "$20.000 COP",
        imagen: "img/productos/topo-azul-negro-1.jpeg",
        descripcion:
            "Pieza artesanal hecha a mano."
    },

    "topo-rojo-amarillo": {
        nombre: "Topo Rojo y Amarillo",
        categoria: "Aretes",
        precio: "$20.000 COP",
        imagen: "img/productos/topo-rojo-amarillo.jpeg",
        descripcion:
            "Topos inspirados en la diversidad de colores de la naturaleza."
    },

    "arete-verde": {
        nombre: "Arete Verde",
        categoria: "Aretes",
        precio: "$35.000 COP",
        imagen: "img/productos/arete-verde.jpeg",
        descripcion:
            "Aretes artesanales de inspiración botánica."
    },

    "pulsera-verde": {
        nombre: "Pulsera Verde",
        categoria: "Pulseras",
        precio: "$20.000 COP",
        imagen: "img/productos/pulsera-verde-1.jpeg",
        descripcion:
            "Pulsera artesanal hecha a mano."
    },

    "sticker-passiflora-edulis": {
        nombre: "Sticker Passiflora edulis",
        categoria: "Stickers",
        precio: "$3.000 COP",
        imagen: "img/productos/sticker-Passiflora-edulis.png",
        descripcion:
            "Ilustración botánica en formato sticker."
    },

    "sticker-tocoyena-formosa": {
        nombre: "Sticker Tocoyena formosa",
        categoria: "Stickers",
        precio: "$3.000 COP",
        imagen: "img/productos/sticker-tocoyena-formosa.png",
        descripcion:
            "Sticker botánico inspirado en la naturaleza."
    },

    "sticker-ximenia-americana": {
        nombre: "Sticker Ximenia americana",
        categoria: "Stickers",
        precio: "$3.000 COP",
        imagen: "img/productos/sticker-ximenia-americana.png",
        descripcion:
            "Sticker ilustrado y hecho con amor por los detalles."
    },

    "sticker-coleccion-botanica": {
        nombre: "Colección Botánica",
        categoria: "Stickers",
        precio: "$6.000 COP",
        imagen: "img/productos/tira-completa-stickers.png",
        descripcion:
            "Colección completa de stickers botánicos."
    },

    "separador-info": {
        nombre: "Separador Botánico",
        categoria: "Separadores",
        precio: "$8.000 COP",
        imagen: "img/productos/separador-info.png",
        descripcion:
            "Edición informativa de la colección botánica."
    },

    "separador-1": {
        nombre: "Separador Botánico I",
        categoria: "Separadores",
        precio: "$8.000 COP",
        imagen: "img/productos/separador-1.png",
        descripcion:
            "Separador artesanal con ilustración botánica."
    },

    "separador-2": {
        nombre: "Separador Botánico II",
        categoria: "Separadores",
        precio: "$8.000 COP",
        imagen: "img/productos/separador-2.png",
        descripcion:
            "Separador artesanal inspirado en la naturaleza."
    }
};

// Obtener los parámetros de la URL
//Mediante URLSearchParams se recupera el identificador enviado desde el catálogo

const params = new URLSearchParams(window.location.search);

// Recuperar el identificador del producto
const id = params.get("id");

// Buscar el producto correspondiente
const producto = productos[id];

// Si el producto existe, cargar la información
if (producto) {

    document.getElementById("producto-imagen").src =
        producto.imagen;

    document.getElementById("producto-nombre").textContent =
        producto.nombre;

    document.getElementById("producto-categoria").textContent =
        producto.categoria;

    document.getElementById("producto-precio").textContent =
        producto.precio;

    document.getElementById("producto-descripcion").textContent =
        producto.descripcion;
}
 else {

    document.querySelector(".producto-detalle").innerHTML = `
        <div class="producto-no-encontrado">
            <h2>Producto no encontrado</h2>
            <p>El producto que buscas no existe.</p>
            <a href="catalogo.html" class="btn">
                Volver al catálogo
            </a>
        </div>
    `;
}