// Importación de dependencias necesarias
const express = require("express");
//framework para Node.js que simplifica la creación de servidores web y APIs
const cors = require("cors");
// Permite que páginas alojadas en un origen distinto puedan comunicarse con el servidor
const mysql = require("mysql2");
//crea una instancia de Express
//Se crea la aplicación principal que gestionará todas las peticiones HTTP recibidas por el servidor.
const app = express();

// Middleware para permitir peticiones externas y procesar JSON
app.use(cors());
// Permite que el frontend pueda comunicarse con el backend.
app.use(express.json());
//Convierte automáticamente el JSON recibido en un objeto JavaScript.
/*
 * Configuración de la conexión con la base de datos MySQL
 */
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "makisa"
});

/*
 * Establece la conexión con MySQL al iniciar el servidor
 */
conexion.connect((error) => {

    if (error) {
        console.error("Error MySQL:", error);
        return;
    }

    console.log("Conectado a MySQL");

});

/*
 * Endpoint que recibe los datos enviados desde
 * el formulario de contacto del sitio web
 */
app.post("/contacto", (req, res) => {

    console.log("PETICION RECIBIDA");
    // Express convierte el JSON temporal recibido a req.body gracias al middleware express.json()
    console.log(req.body);

    // Obtiene los datos enviados por el cliente
    const { nombre, email, mensaje } = req.body;

    /*
     * Consulta SQL parametrizada para insertar
     * un nuevo contacto en la base de datos
     */
    const sql = `
        INSERT INTO contactos
        (nombre, email, mensaje)
        VALUES (?, ?, ?)
    `;

    conexion.query(
        sql,
        [nombre, email, mensaje],
        (error, resultado) => {

            // Gestión de errores durante la inserción
            if (error) {
                console.error(error);

                return res.status(500).json({
                    error: "Error al guardar"
                });
            }

            // Respuesta enviada al cliente si el registro se guarda correctamente
            res.json({
                mensaje: "Consulta guardada correctamente"
            });

        }
    );

});

/*
 * Inicio del servidor Express en el puerto 3000
 */
app.listen(3000, () => {
    console.log("Servidor iniciado en puerto 3000");
});