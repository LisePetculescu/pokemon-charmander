"use-strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemons = await getPokemons(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );
  pokemons.sort(sortByDexindex);
  console.log(pokemons);

  // pokemons.forEach(showPokemons);
  for (const pokemon of pokemons) {
    showPokemons(pokemon);
  }
}

async function getPokemons(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemons(pokemon) {
  document.querySelector("#pokemons").insertAdjacentHTML(
    "beforeend",
    /*HTML*/ `  
    <article class="grid-item">
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.image}">
    <ul>  
      <li>Ability: ${pokemon.ability}</li> 
      <li>Dexindex: ${pokemon.dexindex}</li>
      <li>Type: ${pokemon.type}</li> 
    </ul>
    </article>`
  );
  console.log(pokemon.name);
  console.log(pokemon);
  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", pokemonClicked);

  document
    .querySelector("#pokemons article:last-child")
    .addEventListener("click", blurBackground);

  function pokemonClicked() {
    showPokemonDetail(pokemon);
  }
}

function showPokemonDetail(pokemon) {
  document.querySelector("#dialogBox").innerHTML = /*HTML*/ `  
    <article>
      <h2>${pokemon.name}</h2>
      <hr>
      <img id="pokePic" src="${pokemon.image}">
      <p>${pokemon.description}</p> 
      <hr>
      <li>Ability: ${pokemon.ability}</li> 
      <li>Footprint:<br><img id="footPic" src="${pokemon.footprint}"></li>
      <li>Dexindex: ${pokemon.dexindex}</li>
      <li>Type: ${pokemon.type}</li> 
      <li>SubType: ${pokemon.subtype}</li>
      <li>Weaknesses: ${pokemon.weaknesses} </li>
      <li>Gender: ${pokemon.gender}</li>
      <li>Weight (g): ${pokemon.weight}</li>
      <li>Height (cm): ${pokemon.height}</li>
      <li>Generation: ${pokemon.generation}</li>
      <li>Spilversion: ${pokemon.spilversion}</li>
      <li id="evolve">Can it evolve: ${pokemon.canEvolve}</li>
      <li>HP: ${pokemon.statsHP}</li>
      <li>Attack: ${pokemon.statsAttack}</li>
      <li>Defence: ${pokemon.statsDefence}</li>
      <li>Special Attack: ${pokemon.statsSpecialAttack}</li>
      <li>Special Defence: ${pokemon.statsSpecialDefence}</li>
      <li>Speed: ${pokemon.statsSpeed}</li>
    </article>
    <br>
    <form method="dialog">
      <button id="backBTN">Back</button>
    </form> `;

  document.querySelector("#backBTN").addEventListener("click", removeBlur);

  document.addEventListener("keydown", keyDown);

  // no booleans :P
  let evolvingString = makeNewEvolveString(pokemon);
  document.querySelector("#evolve").textContent = evolvingString;

  document.querySelector("#dialogBox").showModal();
  document.querySelector("#dialogBox").scrollTo({ top: 0, behavior: "smooth" });
}

// Helping function(s)
function makeNewEvolveString(pokemon) {
  let evolvingString = "";
  if (pokemon.canEvolve == true) {
    evolvingString = "This pokemon can evolve";
  } else if (pokemon.canEvolve == false) {
    evolvingString = "This pokemon can't evolve";
  }
  return evolvingString;
}

function blurBackground() {
  document.querySelector("body").classList.add("blur", "fixed");
}

function removeBlur() {
  document.querySelector("body").classList.remove("blur", "fixed");
}

function keyDown(event) {
  if (event.keyCode == 27 || event.keyCode == "Escape") {
    removeBlur();
  } else if (event.keyCode !== 27 || event.keyCode !== "Escape") {
    console.log(event.keyCode);
  }
}
function sortByDexindex(pokemonA, pokemonB) {
  return pokemonA.dexindex - pokemonB.dexindex;
}
