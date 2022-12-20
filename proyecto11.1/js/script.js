let pokemons = [
    {id: 1, name: "charmander", type: "fire", base_damage: 10, base_hp: 12, speed: 30},
    {id: 2, name: "squirtle", type: "water", base_damage: 9, base_hp: 14, speed: 26},
    {id: 3, name: "bulbasaur", type: "leaf", base_damage: 8, base_hp: 16, speed: 26},
    {id: 4, name: "pikachu", type: "electric", base_damage: 12, base_hp: 8, speed: 32},
    {id: 5, name: "pidgey", type: "air", base_damage: 10, base_hp: 10, speed: 35},
    {id: 6, name: "goldeen", type: "water", base_damage: 9, base_hp: 12, speed: 32},
    {id: 7, name: "bellsprout", type: "leaf", base_damage: 10, base_hp: 12, speed: 30},
    {id: 8, name: "magnemite", type: "electric", base_damage: 9, base_hp: 14, speed: 30},
    {id: 9, name: "ponyta", type: "fire", base_damage: 12, base_hp: 18, speed: 36},
    {id: 10, name: "evee", type: "normal", base_damage: 10, base_hp: 12, speed: 30},
]




//1. Ordernar los pokemons por base_damage de menor a mayor.

  function ordenarporBaseDamage(pokemons) {
    return pokemons.sort((a, b) => {
      return a.base_damage - b.base_damage;
    });
  }



//2. Crear una funcion para ordernar los pokemons dependiendo de el argumento que se ingrese en la funcion. Pueden ingresar: type, base_damage, base_hp o speed.
function ordenarPorAtributo(atributo){
    if (typeof pokemons[0][atributo] === "string"){
        return  pokemons.sort((a,b) => {return a[atributo].localeCompare(b[atributo])})
    } else if (typeof  pokemons[0][atributo] === "number"){
        return  pokemons.sort((a,b) => {return a[atributo] - b[atributo]})
    } else {
        return "Por favor utiliza un atributo válido"
    }
}




//3. Crear una funcion que filtre el objeto pokemons y devuelva un arreglo con los pokemons filtrados. La funcion debe aceptar un argumento para filtrar por type de pokemon.
function ordenarPorType(tipo){
    return pokemons.filter(pokemon => pokemon.type===tipo);
}  





//4. Crear un objeto llamado Pokemon Master que tenga los siguientes atributos: id: number, name: string, created_date: string, y pokemon: array of objects.
 let pokemon_Master = {
    id:1,
    name:"Red",
    created_date: "16 de octubre de 2022",
    pokemon: [
    { name: 'Venusaur', type: ['grass','poison'], base_damage: 13, base_hp: 25, speed: 55 },
    { name: 'Charizard', type: ['fire','flying'], base_damage: 14, base_hp: 28, speed: 60 },
    { name: 'Blastoise', type: ['water'], base_damage: 14, base_hp: 30, speed: 50 },
    { name: 'Gengar', type: ['ghost','poison'], base_damage: 15, base_hp: 15, speed: 65 },
    { name: 'Dragonite', type: ['dragon','flying'], base_damage: 19, base_hp: 13, speed: 70 },
    { name: 'Primeape', type: ['Fighting'], base_damage: 19, base_hp: 13, speed: 70 }]
 }

 console.log(pokemon_Master);



//5. Crear una funcion que de manera aleatoria agregue un nuevo pokemon al atributo pokemon de Pokemon Master.
 function agregarPokemon(pokemon_Master,pokemons) {
   let pokemonindice= Math.floor(Math.random()*(pokemons.length-1)+1);
   pokemon_Master.pokemon.push(pokemons[pokemonindice]);   
 }




//6. Crear una funcion que agregue de manera aleatoria los atributos min_damage y max_damage a nuestro arreglo de pokemons teniendo en cuenta lo siguiente:
// min_damage debe ser un numero entero aleatorio entre 1 y 2 y max_damage debe ser un numero entero aleatorio entre 3 y 5
 function agregarMinMaxDamage(pokemons) {
    for (const index in pokemons) {
        let min = Math.floor(Math.random()*(3-1)+1);
        let max = Math.floor(Math.random()*(6-3)+3);
        pokemons[index].min_damage= min;
        pokemons[index].max_damage= max;
    }
 }



//7. Crear una funcion que determine el daño que hara un pokemon elegido de la lista ante una posible pelea, para ello considerar que el daño que hara el pokemon es:
// daño = base_damage + un valor aleatorio entre el min_damage y el max_damage
function dañoRealizado(pokemons,elegido) {
    let pokemonelegido= pokemons.filter(pokemon=>pokemon.name===elegido);
   let daño= ((pokemonelegido[0].base_damage)+Math.floor(Math.random()*(pokemonelegido[0].max_damage-pokemonelegido[0].min_damage+1)+pokemonelegido[0].min_damage));
    return daño;
} 




//8. Nuestro Pokemon Master quiere estar preparado para pelear, para ello necesita que lo apoyes a ordenar sus pokemons. Colocar tres pokemons con la funcion del ejercicio 5.
// El quiere que sus pokemons se ordenen de manera que el que tenga un mayor valor posible de base_damage + max_damage sea el que este primero en la lista y asi sucesivamente.
function ordernarByMaxDamage(pokemon_Master) {
 
return pokemon_Master.pokemon.sort((a,b) => {return(b.base_damage+b.max_damage)- (a.base_damage+a.max_damage)})
}



