// Call pokeapi to get a random pokemon return a promise from the call to pokeapi
function getRandomPokeUrl() {
    return `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 808)}`
}

function listPokemon() {
   let numPokemon = parseInt(prompt("How many Pokemon would you like to see?"))
   return getPokemonTeam(numPokemon)
}

async function getPokemonTeam(teamSize) {
    // Call getRandomPoke as many times as indicated by the user
    // Print each to the screen
    try {
        for (let i = 0; i < teamSize; i++) {
            let response = await fetch(getRandomPokeUrl())
            let pokemon = await response.json()
            showPokemon(pokemon)
        }
    } catch(error) {
        console.log(error)
    }
}

// Shows a pokemon on the page
function showPokemon(pokemon) {
    // select the ul from the HTML and store in ulement
    let ulElem = document.querySelector('ul');
    let newListItem = document.createElement('li');
    // set the contend of the new li to the pokemon name
    newListItem.innerHTML = pokemon.name;
    // add the new li to the ul
    ulElem.appendChild(newListItem);
    // append the li to the DOM
    ulElem.appendChild(newListItem)
}

// Call to get team with an integar value for the number of pokemon to 
// get from the api. This number comes from a prompt answered by the user.

document.getElementById("list-pokemon").addEventListener("click", listPokemon)
console.log("called get team")


