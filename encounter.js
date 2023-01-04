function getRandomNumberForPokeAPI(){
    // The "808" is just a safe maximum for how many Pokemon are currently in the API.
    // When they add more Pokemon, that number should go up.
    // Some newer Pokemon (numbers 808 and above) might be missing some data - 
    // if that's the case, just change this number back to 808 instead of 894.
    let suitableNumber = Math.floor(Math.random() * 894);
    console.log('Generated number to use in PokeAPI call is ' + suitableNumber);
    return suitableNumber;
}

function showPokemonData(data) {
    let nameDiv = document.getElementById("pokemonName")
    let type1Div = document.getElementById("pokemonType1")
    let type2Div = document.getElementById("pokemonType2")
    let imageDiv = document.getElementById("pokemonImage")

    let name = data.name
    let type1 = data.types[0] ? data.types[0].type.name : null
    let type2 = data.types[1] ? data.types[1].type.name : null // may be null
    
    // Some newer Pokemon don't have a default image, but they do have tiny icons. Something is better than nothing!
    let sprite = data.sprites.front_default ? data.sprites.front_default : data.sprites.versions["generation-viii"].icons.front_default

    nameDiv.innerText = name
    type1Div.innerText = type1
    if (type2){
        type2Div.style.display = "block";
        type2Div.innerText = type2;
    } else {
        type2Div.style.display = "none";
    }

    imageDiv.getElementsByTagName("IMG")[0].src = sprite;
}
function getPokemonData(){
    // 1. update with the correct url for POKEAPI:
    const POKEAPI = "https://pokeapi.co/api/v2/pokemon/"
    
    // 2. use fetch with POKEAPI + getRandomNumberForPokeAPI to call the API
    // and call showPokemonData with the data returned from the fetch

    fetch(POKEAPI + getRandomNumberForPokeAPI())
    .then(body => {return body.json()})
    .then(data => {
        showPokemonData(data)
    })
}
document.getElementById("create-encounter").addEventListener("click", getPokemonData)