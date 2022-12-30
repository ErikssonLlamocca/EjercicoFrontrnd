//Pokemon Favorites
const containerpokemon = document.getElementById("containerpokemon")
const token = localStorage.getItem('token');

//funcion para obtener los pokemon favoritos
async function getFavoritos(token) {
    const response = await fetch(`http://localhost:3000/api/usuarios/${token}/favoritos`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    const data = await response.json();
    return data;
  }
  // obtener datos del pokemon
  async function obtenerdatosdepokemon(pokemon) {
    let datosPokemon; // Declarar objeto "datosPokemon" fuera del bloque "try"
    try {
      // Hacer petición a la API de PokeAPI para obtener información del pokemon
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
  
      // Almacenar datos del pokemon en variables
      datosPokemon = { // Asignar valores al objeto "datosPokemon"
        numero: data.id,
        imagenIcono: `img/${data.types[0].type.name}.png`,
        sprites: data.sprites.other['official-artwork'].front_default,
        nombre: data.name,
        moves: [`${data.moves[0].move.name}`,`${data.moves[1].move.name}`],
        tipo: data.types[0].type.name
      };
    } catch (error) {
      console.error(error);
    }
    return datosPokemon; // Devolver objeto "datosPokemon"
  }
  function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  async function mostrarDatosPokemon(pokemon) {
    // obtenemos los datos del pokemon

    const datosPokemon = await obtenerdatosdepokemon(pokemon);
    let nombre="";
    nombre = capitalize(datosPokemon.nombre)
    containerpokemon.appendChild(crearCardPokemon(`${datosPokemon.numero}`,datosPokemon.imagenIcono,datosPokemon.sprites,nombre,datosPokemon.moves,datosPokemon.tipo, "eliminar")) 

  }
  
  let listafavoritos;

  getFavoritos(token).then(favoritos => {
    listafavoritos = favoritos;
    for (let i = 0; i < listafavoritos.length; i++) {
        mostrarDatosPokemon(listafavoritos[i])
      }
  });
    
  


  
 function crearCardPokemon(numero,imagenicono,imgpoke, nombre, ataques=[],tipo, boton) {
    const cardPokemon = document.createElement("section");
    cardPokemon.classList.add("col-2", `pokemons-${tipo}`);
  
    const contenedorNumero = document.createElement("section");
    contenedorNumero.classList.add("p-2");
    const numeroPokemon = document.createElement("p");
    numeroPokemon.classList.add("rounded", "float-start");
    numeroPokemon.textContent = `#${numero}`;
    contenedorNumero.appendChild(numeroPokemon);
  
    const contenedorImagen = document.createElement("section");
    const imagenIcono = document.createElement("img");
    imagenIcono.src = imagenicono;
    imagenIcono.classList.add("pokeball2", "rounded", "rounded", "float-end");
    contenedorImagen.appendChild(imagenIcono);
    contenedorNumero.appendChild(contenedorImagen);
    cardPokemon.appendChild(contenedorNumero);
  
    const containerPokemonImg = document.createElement("section");
    containerPokemonImg.classList.add("img-fuego");
    const pokemonImg = document.createElement("img");
    pokemonImg.src = imgpoke;
    pokemonImg.classList.add("tipo-planta");
    containerPokemonImg.appendChild(pokemonImg);
    cardPokemon.appendChild(containerPokemonImg);
  
    const nombrePokemon = document.createElement("section");
    nombrePokemon.style.textAlign="center"
    const tituloNombre = document.createElement("h2");
    tituloNombre.textContent = nombre;
    nombrePokemon.appendChild(tituloNombre);
    cardPokemon.appendChild(nombrePokemon);
  
    const ataquesPokemon = document.createElement("section");
    ataquesPokemon.classList.add("row", "pt-2", "p-2");
    const listaAtaques = document.createElement("section");
    listaAtaques.classList.add("col-6", "p-2");
    ataques.forEach((ataque) => {
      const parrafoAtaque = document.createElement("p");
      parrafoAtaque.textContent = ataque;
      listaAtaques.appendChild(parrafoAtaque);
    });
    ataquesPokemon.appendChild(listaAtaques);
  
    const contenedorBoton = document.createElement("section");
    contenedorBoton.classList.add("col-6", "p-2");
    const botonPokemon = document.createElement("button");
    botonPokemon.type = "submit";
    botonPokemon.textContent = boton;
    botonPokemon.classList.add("btn", "btn-light", "rounded", "float-end");
    contenedorBoton.appendChild(botonPokemon);
    ataquesPokemon.appendChild(contenedorBoton);
    cardPokemon.appendChild(ataquesPokemon);
  
    return cardPokemon;
  }
  
  /* async function crearCardPokemonsFavoritos(listafavoritos) {
    const container = document.createElement("select");
    container.classList.add("row");
    for (const pokemon of listafavoritos) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
      const data = await response.json();
      const numero = data.id;
      const tipos = data.types;
      const imagenIcono = `img/${data.types[0].type.name}.png`;
      const sprites = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
      const nombre = data.name;
      const moves = [`${data.moves[0]}`,`${data.moves[1]}`];
      const boton = "Eliminar de favoritos";
      const cardPokemon = crearCardPokemon(numero, imagenIcono, sprites, nombre, moves, boton);
      container.appendChild(cardPokemon);
    }
    return container;
  } */
/*   async function monstrar() {
    const listaFavoritos = await getFavoritos(token);
    containerpokemon.appendChild(crearCardPokemonsFavoritos(listafavoritos));
    
  }
  monstrar() */
/*   getFavoritos(token).then(favoritos => {
    const listafavoritos = favoritos;
    const selectPokemonsFavoritos = crearCardPokemonsFavoritos(listafavoritos);
    containerpokemon.appendChild(selectPokemonsFavoritos);
  }); */