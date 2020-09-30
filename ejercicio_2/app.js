

const obtenerChiste = require("./library");

// Usar la funcion obtenerChiste() la cual devuelve la promesa de traer el objeto chiste extraido
obtenerChiste().then(function(chiste){
    console.log(chiste[0].setup +  chiste[0].punchline);
}).catch(function (e){
    console.log("Error " + e.message);
});

