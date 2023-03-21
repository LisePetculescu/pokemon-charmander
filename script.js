"use-strict";

const charmander = {
name: "Charmander",
description: "Lille orange gut/gutinde, med ild i halen",
ability: "Blaze",
image: "https://img.pokemondb.net/artwork/large/charmander.jpg",
footprint: "https://pm1.narvii.com/5781/12d7b8412b625610a414e6fb2aeab6cecc9aa433_hq.jpg",
dexindex: 0004,
type: "fire",
subtype: "none", //tekst,
weaknesses: "water, Ground, Rock",
gender: "Female or Male, Gender ratio: 87.5% male, 12.5% female",
weight: 8482, //vægt i gram
height: 60.96, //højde i cm
generation: 1,
spilversion: "Pokémon Red and Blue",
canEvolve: true,
statsHP: 3.9, //tal 0-10
statsAttack: 5.2, //tal 0-10,
statsDefence: 4.3, //tal 0-10,
statsSpecialAttack: 6, //tal 0-10,
statsSpecialDefence: 5, //tal 0-10,
statsSpeed: 6.5, //0-10,
};  

function showPokemon(pokemon) {
const myPokemon = /*html*/ `
<li>Name: ${pokemon.name}</li>
<li>Description: ${pokemon.description}</li> 
<li>Ability: ${pokemon.ability}</li> 
<li>Image: (source: https://pokemondb.net/pokedex/charmander) <img src="${pokemon.image}"></li>
<li>Footprint: (source: https://aminoapps.com/c/pokemon/page/blog/charmander-004/ZzhB_u5eKmlYWVJlNdGePD8Q62E50M) <img src="${pokemon.footprint}"></li>
<li>Dexindex: ${pokemon.dexindex}</li>
<li>Type: ${pokemon.type}</li> 
<li>SubType: ${pokemon.subtype}</li>
<li>Weaknesses: ${pokemon.weaknesses} </li>
<li>Gender: ${pokemon.gender}</li>
<li>Weight: ${pokemon.weight}</li>
<li>Height: ${pokemon.height}</li>
<li>Generation: ${pokemon.generation}</li>
<li>Spilversion: ${pokemon.spilversion}</li>
<li>Can it evolve: ${pokemon.canEvolve}</li>
<li>HP: ${pokemon.statsHP}</li>
<li>Attack: ${pokemon.statsAttack}</li>
<li>Defence: ${pokemon.statsDefence}</li>
<li>Special Attack: ${pokemon.statsSpecialAttack}</li>
<li>Special Defence: ${pokemon.statsSpecialDefence}</li>
<li>Speed: ${pokemon.statsSpeed}</li> `;
document.querySelector("#pokemons").insertAdjacentHTML("beforeend", myPokemon);
console.log(pokemon.name);
}
showPokemon(charmander);