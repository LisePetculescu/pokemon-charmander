"use-strict";

window.addEventListener("load", initApp);

async function initApp() {
  const charmander2 = await getPokemon(
    "https://raw.githubusercontent.com/LisePetculescu/pokemon-charmander/main/charmander.json"
  );
  showPokemon(charmander2);
}

function showPokemon(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `  
    <article>
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.image}">
      <li>${pokemon.description}</li> 
      <li>Ability: ${pokemon.ability}</li> 
      <li>Dexindex: ${pokemon.dexindex}</li>
      <li>Type: ${pokemon.type}</li> 
    </article>`
  );
  console.log(pokemon.name);
  console.log(pokemon);
  document.querySelector("#pokemons").addEventListener("click", pokemonClicked);

  function pokemonClicked() {
    document.querySelector("#dialogBox").innerHTML = /*HTML*/ `  
    <article>
      <h2>${pokemon.name}</h2>
      <img src="${pokemon.image}">
      <li>Description: ${pokemon.description}</li> 
      <li>Ability: ${pokemon.ability}</li> 
      <li>Footprint:<img src="${pokemon.footprint}"></li>
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
      <li>Speed: ${pokemon.statsSpeed}</li>
    </article>
    <form method="dialog">
      <button>Back</button>
    </form> `;
    document.querySelector("#dialogBox").showModal();
    document.querySelector("#dialogBox").scrollTo({top: 0, behavior: 'smooth'}); 
  }
}

async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
