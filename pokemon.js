let pokemon_container = document.getElementById("container");

const typeSelector = document.getElementById("poke-type");

const poke_count = 10;

///////////////////// () //////////////////////////
const fetchPokemons = async () => {
  pokemon_container.innerHTML = ''
  for (let i = 1; i <= poke_count; i++) {
    randomNum = Math.ceil(Math.random() * 150)
    await getpokemon(randomNum);
  }
};


const getpokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url); //grabs information from url
  const data = await response.json(); //the information from the api aka pokemon;
  console.log(data)
  //  pokemon.types.type.name)
  addPokemons(data)
  // data.map(pokemons => pokemons.types)
};


///////////////////// () //////////////////////////
const gettypevalue = () => {
  let type = typeSelector.value
  fetchPokemonsType(type);
}

const fetchPokemonsType = async (type) => {
  pokemon_container.innerHTML = ''
  await getpokemonbyType(type);
};

const getpokemonbyType = async (type) => {
  const url = `https://pokeapi.co/api/v2/type/${type}`;
  const response = await fetch(url); 
  const data = await response.json();
  console.log(data.pokemon[0])
  // addPokemons(data);
}


const addPokemons = (pokemon) => {
  const pokemonEl = document.createElement('div');
  pokemonEl.classList.add('pokemon');
  // console.log(pokemon.types[0].type.name)
  backColor = colors[`${pokemon.types[0].type.name}`]
  pokemonEl.style.backgroundColor = backColor
  const pokemonHtml = `
    <div class="img-container">
        <img src="${pokemon.sprites.front_default}" alt="Bulbasaur">
    </div>
    <div class="info">
      <span class="number">#${pokemon.id}</span>
      <h3 class="name">${pokemon.name}</h3>
      <small class="type">Type:<span> ${pokemon.types[0].type.name.toUpperCase()}</span></small>
      <h4>XP: ${pokemon.base_experience}</h4>
    </div>
`;
  pokemonEl.innerHTML = pokemonHtml;
  pokemon_container.appendChild(pokemonEl);
};


///////////////////// (searching by id) ////////////////////////

const searchPokemons = () => {
  let searchVal = document.getElementById("poki-search").value;
  pokemon_container.innerHTML = ''
  getpokemon(searchVal);
  // console.log(searchVal);
};


///////////////////// () //////////////////////////


colors = {
  normal : "#a8a878",
  fire: "#e49a97",
  water: "#92a6dc",
  grass: "#598140",
  electric: "#f8d030",
  ice: "#98d8d8",
  figthing: "#c03028",
  poison: "#a040a0",
  ground: "#e0c068",
  flying: "#9c89c8",
  psychic: "#f85888",
  bug: "#a8b820",
  rock: "#b8a038",
  ghost: "#705898",
  dark: "#705848",
  dragon: "#7038f8",
  steel: "#b8b8d0",
  fairy: "#f0b6bc"
}

