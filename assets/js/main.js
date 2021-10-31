
const pokeKanto = [
    {
        id: 1,
        name: 'Bulbasaur',
        img: './assets/img/PokeKanto/bulbasaur.jpg',
        type: ['grass', 'poison'],
    },
    {
        id: 2,
        name: 'Ivysaur',
        img: './assets/img/PokeKanto/ivysaur.jpg',
        type: ['grass', 'poison'],
    },
    {
        id: 3,
        name: 'Venusaur',
        img: './assets/img/PokeKanto/venusaur.jpg',
        type: ['grass', 'poison'],
    },
    {
        id: 4,
        name: 'Charmander',
        img: './assets/img/PokeKanto/charmander.jpg',
        type: ['fire'],
    },
    {
        id: 5,
        name: 'Charmeleon',
        img: './assets/img/PokeKanto/charmeleon.jpg',
        type: ['fire'],
    },
    {
        id: 6,
        name: 'Charizard',
        img: './assets/img/PokeKanto/charizard.jpg',
        type: ['fire', 'flying'],
    },
    {
        id: 7,
        name: 'Squirtle',
        img: './assets/img/PokeKanto/squirtle.jpg',
        type: ['grass', 'poison'],
    },
    {
        id: 8,
        name: 'Wartortle',
        img: './assets/img/PokeKanto/wartortle.jpg',
        type: ['water'],
    },
    {
        id: 9,
        name: 'Blastoise',
        img: './assets/img/PokeKanto/blastoise.jpg',
        type: ['water'],
    },
    {
        id: 25,
        name: 'Pikachu',
        img: './assets/img/PokeKanto/pikachu.jpg',
        type: ['electric'],
    },
    {
        id: 26,
        name: 'Raichu',
        img: './assets/img/PokeKanto/raichu.jpg',
        type: ['electric'],
    },
    {
        id: 54,
        name: 'Psyduck',
        img: './assets/img/PokeKanto/psyduck.jpg',
        type: ['water'],
    },
    {
        id: 55,
        name: 'Golduck',
        img: './assets/img/PokeKanto/golduck.jpg',
        type: ['water'],
    },
    {
        id: 58,
        name: 'Growlithe',
        img: './assets/img/PokeKanto/growlithe.jpg',
        type: ['fire'],
    },
    {
        id: 59,
        name: 'Arcanine',
        img: './assets/img/PokeKanto/arcanine.jpg',
        type: ['fire'],
    },
    {
        id: 114 ,
        name: 'Tangela',
        img: './assets/img/PokeKanto/tangela.jpg',
        type: ['water'],
    },
    {
        id: 133,
        name: 'Eevee',
        img: './assets/img/PokeKanto/eevee.jpg',
        type: ['normal'],
    },
    {
        id: 134,
        name: 'Vaporeon',
        img: './assets/img/PokeKanto/vaporeon.jpg',
        type: ['water'],
    },
    {
        id: 135,
        name: 'Jolteon',
        img: './assets/img/PokeKanto/jolteon.jpg',
        type: ['electric'],
    },
    {
        id: 136,
        name: 'Flareon',
        img: './assets/img/PokeKanto/flareon.jpg',
        type: ['fire'],
    },
    {
        id: 143,
        name: 'Snorlax',
        img: './assets/img/PokeKanto/snorlax.jpg',
        type: ['normal'],
    },
    {
        id: 144,
        name: 'Articuno',
        img: './assets/img/PokeKanto/articuno.jpg',
        type: ['water', 'flying'],
    },
    {
        id: 146,
        name: 'Moltres',
        img: './assets/img/PokeKanto/moltres.jpg',
        type: ['fire', 'flying'],
    },
    {
        id: 147,
        name: 'Dratini',
        img: './assets/img/PokeKanto/dratini.jpg',
        type: ['dragon'],
    },
    {
        id: 148,
        name: 'Dragonair',
        img: './assets/img/PokeKanto/dragonair.jpg',
        type: ['dragon'],
    },
    {
        id: 149,
        name: 'Dragonite',
        img: './assets/img/PokeKanto/dragonite.jpg',
        type: ['dragon', 'flying'],
    },
    {
        id: 150,
        name: 'Mewtwo',
        img: './assets/img/PokeKanto/mewtwo.jpg',
        type: ['psychic'],
    },
    {
        id: 151,
        name: 'Mew',
        img: './assets/img/PokeKanto/mew.jpg',
        type: ['psychic'],
    },
]



const renderPokemon = (pokemons) => {
    var pokeBlock = document.querySelector('.poke-block');
    var htmls = pokemons.map(poke => `
        <div class = "poke-wrapper">
            <img src="${poke.img}">
            <h3>Name: ${poke.name}</h3>
            <p>Number: ${poke.id}</p>
            <p>Type: ${poke.type.join(', ')}</p>
        </div>
    `)
    pokeBlock.innerHTML = htmls.join('');
}

renderPokemon(pokeKanto);