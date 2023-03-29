// to do:
// done - boolean --> til ny string se https://cederdorff.github.io/dat-js/slides/Loops-events-&-closure.pdf
// venter svar fra race - aktivitetsdiagram
// done - skitser
// done - readme.md
// done - css on button
// when esc pressed in modal view --> fuckUp

"use-strict";

window.addEventListener("load", initApp);

async function initApp() {
  const pokemons = await getPokemon(
    "https://cederdorff.github.io/dat-js/05-data/pokemons.json"
  );

  // pokemons.forEach(showPokemon);
  for (const pokemon of pokemons) {
    showPokemon(pokemon);
  }
}






async function getPokemon(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function showPokemon(pokemon) {
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

  document.querySelector("#pokemons article:last-child")
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
  document.onkeydown = function()
      {
       removeBlur();
      }


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
    evolvingString = "This pokemon can evolve"
  } else if (pokemon.canEvolve == false) {
    evolvingString = "This pokemon can't evolve"
  }
  return evolvingString;
}

function blurBackground() {
  document.querySelector("#pokemons").classList.add("blur", "fixed");
  document.querySelector("header").classList.add("blur", "fixed");
  document.querySelector("footer").classList.add("blur", "fixed");
}

function removeBlur() {
  document.querySelector("#pokemons").classList.remove("blur", "fixed");
  document.querySelector("header").classList.remove("blur", "fixed");
  document.querySelector("footer").classList.remove("blur", "fixed");
}