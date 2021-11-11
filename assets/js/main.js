

const pokeDex = [
    {
        name: 'Kanto',
        pokemons: [
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
                type: ['water'],
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
    },
    {
        name: 'Johto',
        pokemons: [
            {
                id: 1,
                name: 'Chikorita',
                img: './assets/img/PokeJohto/chikorita.jpg',
                type: ['grass'],
            },
            {
                id: 2,
                name: 'Bayleef',
                img: './assets/img/PokeJohto/bayleef.jpg',
                type: ['grass'],
            },
            {
                id: 3,
                name: 'Meganium',
                img: './assets/img/PokeJohto/meganium.jpg',
                type: ['grass'],
            },
            {
                id: 4,
                name: 'Cyndaquil',
                img: './assets/img/PokeJohto/cyndaquil.jpg',
                type: ['fire'],
            },
            {
                id: 5,
                name: 'Quilava',
                img: './assets/img/PokeJohto/quilava.jpg',
                type: ['fire'],
            },
            {
                id: 6,
                name: 'Typhlosion',
                img: './assets/img/PokeJohto/typhlosion.jpg',
                type: ['fire'],
            },
            {
                id: 7,
                name: 'Totodile',
                img: './assets/img/PokeJohto/totodile.jpg',
                type: ['water'],
            },
            {
                id: 8,
                name: 'Croconaw',
                img: './assets/img/PokeJohto/croconaw.jpg',
                type: ['water'],
            },
            {
                id: 9,
                name: 'Feraligatr',
                img: './assets/img/PokeJohto/feraligatr.jpg',
                type: ['water'],
            },
            {
                id: 21,
                name: 'Pichu',
                img: './assets/img/PokeJohto/pichu.jpg',
                type: ['electric'],
            },
            {
                id: 22,
                name: 'Pikachu',
                img: './assets/img/PokeJohto/pikachu.jpg',
                type: ['electric'],
            },
            {
                id: 23,
                name: 'Raichu',
                img: './assets/img/PokeJohto/raichu.jpg',
                type: ['electric'],
            },
            {
                id: 103,
                name: 'Sunkern',
                img: './assets/img/PokeJohto/sunkern.jpg',
                type: ['grass'],
            },
            {
                id: 104,
                name: 'Sunflora',
                img: './assets/img/PokeJohto/sunflora.jpg',
                type: ['grass'],
            },
            {
                id: 156,
                name: 'Elekid',
                img: './assets/img/PokeJohto/elekid.jpg',
                type: ['electric'],
            },
            {
                id: 157,
                name: 'Electabuzz',
                img: './assets/img/PokeJohto/electabuzz.jpg',
                type: ['electric'],
            },
            {
                id: 206 ,
                name: 'Ponyta',
                img: './assets/img/PokeJohto/ponyta.jpg',
                type: ['fire'],
            },
            {
                id: 166,
                name: 'Krabby',
                img: './assets/img/PokeJohto/krabby.jpg',
                type: ['water'],
            },
            {
                id: 167,
                name: 'Kingler',
                img: './assets/img/PokeJohto/kingler.jpg',
                type: ['water'],
            },
            {
                id: 138,
                name: 'Meowth',
                img: './assets/img/PokeJohto/meowth.jpg',
                type: ['normal'],
            },
            {
                id: 139,
                name: 'Persian',
                img: './assets/img/PokeJohto/persian.jpg',
                type: ['normal'],
            },
            {
                id: 208,
                name: 'Cubone',
                img: './assets/img/PokeJohto/cubone.jpg',
                type: ['ground'],
            },
            {
                id: 209,
                name: 'Marowak',
                img: './assets/img/PokeJohto/marowak.jpg',
                type: ['ground'],
            },
            {
                id: 210,
                name: 'Kangaskhan',
                img: './assets/img/PokeJohto/kangaskhan.jpg',
                type: ['normal'],
            },
            {
                id: 53,
                name: 'Mareep',
                img: './assets/img/PokeJohto/mareep.jpg',
                type: ['electric'],
            },
            {
                id: 54,
                name: 'Flaaffy',
                img: './assets/img/PokeJohto/flaaffy.jpg',
                type: ['electric'],
            },
            {
                id: 55,
                name: 'Ampharos',
                img: './assets/img/PokeJohto/ampharos.jpg',
                type: ['electric'],
            },
            {
                id: 127,
                name: 'Vulpix',
                img: './assets/img/PokeJohto/vulpix.jpg',
                type: ['fire'],
            },
            {
                id: 128,
                name: 'Ninetales',
                img: './assets/img/PokeJohto/ninetales.jpg',
                type: ['fire'],
            },
            {
                id: 108,
                name: 'Wobbuffet',
                img: './assets/img/PokeJohto/wobbuffet.jpg',
                type: ['psychic'],
            },
            {
                id: 243,
                name: 'Raikou',
                img: './assets/img/PokeJohto/raikou.jpg',
                type: ['electric'],
            },
            {
                id: 254,
                name: 'Suicune',
                img: './assets/img/PokeJohto/suicune.jpg',
                type: ['water'],
            },
            {
                id: 244,
                name: 'Entei',
                img: './assets/img/PokeJohto/entei.jpg',
                type: ['fire'],
            },
            {
                id: 256,
                name: 'Celebi',
                img: './assets/img/PokeJohto/celebi.jpg',
                type: ['psychic', 'grass'],
            },
            {
                id: 252,
                name: 'Lugia',
                img: './assets/img/PokeJohto/lugia.jpg',
                type: ['psychic', 'flying'],
            },
        ]
    }
]

const handleAddZeros = (id) => {
    while (id.toString().length < 3)
        id = '0' + id;
    return id;
}

const handleUpperCase = (types) => {
    return types.map((type) => { 
        type = type.charAt(0).toUpperCase() + type.slice(1);
        return type;
    }).join(', ');
}


const handleType = (type) => {
    const types = [
        'grass',
        'water',
        'fire',
        'electric',
        'psychic'
    ]

    if (types.includes(type)) {
        return type;
    }
    else
        return 'other';
}

const renderPokemon = (pokemons) => {
    let htmls = pokemons.map(poke => `
        <div class = "poke-wrapper poke__type--${handleType(poke.type[0])}" >
            <img class="poke__img" src="${poke.img}">
            <h3 class="poke__name">Name: ${poke.name}</h3>
            <p class="poke__number">Number: #${handleAddZeros(poke.id)}</p>
            <p class="poke__type }">Type: <span class="test">${handleUpperCase(poke.type)}</span></p>
        </div>
    `)
    return htmls
}

const religion = [
    { 
        name: 'Johto',
        gen: 'pokeJohto',
    },

    { 
        name: 'Kanto',
        gen: 'pokeKanto',
    },
]

const render = (religion) => {
    const pokeBlock = document.querySelector('.poke-block');
    pokeBlock.style.marginTop = 100 + 'px';
    let htmls = `
        <h1 class="religion-name">${religion.name}</h1>
        ${renderPokemon(religion.pokemons)}
    `
    pokeBlock.innerHTML = htmls;
}

let home = document.querySelector('#home');
let kanto = document.querySelector('#kanto');
let johto = document.querySelector('#johto');

home.onclick = () => {
    const pokeBlock = document.querySelector('.poke-block');
    pokeBlock.style.marginTop = 0 + 'px';
    let htmls = `
        <img src="./assets/img/WorldMap.jpg" alt="">
    `
    pokeBlock.innerHTML = htmls;
}

kanto.onclick = () => {
    render(pokeDex[0]);
}

johto.onclick = () => {
    render(pokeDex[1]);
}