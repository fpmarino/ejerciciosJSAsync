const obtenerPokemon = require("./library");

// Codigo funcion callback
function nombrePokemon(pokemon){
    console.log("Nombre: "+pokemon.name);
    console.log("Habilidades: ");
    pokemon.abilities.forEach(skill => {
        console.log("-"+skill.ability.name);
    });
    
}


// Fin codigo

// Usar la funcion obtenerPokemon(pokemon,funcionCallback) en donde:
// - nombrePokemon es un string con el nombre del pokemon
// - funcionCallback es una función que recibe el objeto con los datos del pokemon extraido

obtenerPokemon('caterpie', nombrePokemon);
