
const obtenerPersonaFake = require("./library");

// Usar la funcion obtenerPersonaFake() la cual devuelve la promesa de traer el objeto persona extraido
obtenerPersonaFake().then((p) => {
    console.log("Nombre: " + persona.name.first + " " + persona.name.last);
    console.log("Genero: " + persona.gender);
    console.log("Pais: " + persona.location.country);
    console.log("Estado: " + persona.location.state);
    console.log("Calle: " + persona.location.street.name);
    console.log("Numero: " + persona.location.street.number);
    console.log("CP: " + persona.location.postcode);
    console.log("Email: " + persona.email);
    console.log("Usuario: " + persona.login.username);
    console.log("Contraseña: " + persona.login.password);
});