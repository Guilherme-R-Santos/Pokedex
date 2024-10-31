const pokemonList = document.getElementById('pokemonList')
const pokemonDetails = document.getElementById('pokemonDetails')
const backToTopButton = document.getElementById('backToTop')
const searchBar = document.getElementById('search-bar')
const homeButton = document.getElementById('home')
const PreviousButton = document.getElementById('previous')
const NextButton = document.getElementById('next')
const pokemonToDetail = document.getElementsByClassName('pokemon')
let currentPokemonIndex = 0;
const limit = 20;
let offset = 0;
const maxRecords = 1302;

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
            </li>
        `).join('');

        pokemonList.innerHTML += newHtml;

        Array.from(document.getElementsByClassName('pokemon')).forEach((pokemonElement, index) => {
            pokemonElement.addEventListener('click', () => {
                currentPokemonIndex = index; // Update the current index
                displayPokemonDetails(pokemons[index], pokemons);
            });
        });
    });
}

function displayPokemonDetails(pokemon, pokemons) {
    const detailHtml = `
    <div class="Pokemon-details ${pokemon.type}">
            <div class="detailsImg">
            <img class="detailImg ${pokemon.type}" src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            <p class="number">#${pokemon.number} <span class="name">${pokemon.name}</span></p> 
            <p class="Text">Types:</p>
            <ol class="DetailsTypes">
                ${pokemon.types.map((type) => `<li class="DetailType ${type}">${type}</li>`).join('')}
            </ol>
            <p class="Text">Abilities:</p>
            <ol class="abilities">
                ${pokemon.abilities.map((ability) => `<li>${ability}</li>`).join('')}
            </ol>
            <p class="Text">Base experience: ${pokemon.baseExperience}</p>
            <p class="Text">Height: ${pokemon.height}</p>
            <p class="Text">Weight: ${pokemon.weight}</p>
            <table class="stats">
                <thead>
                    <tr>
                        <th>Stat</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    ${pokemon.stats.map((stat) => `
                        <tr>
                            <td>${stat.name}</td>
                            <td>${stat.value}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
            <div class="navigation">
                <button id="back">Back</button>
                <button id="previousPokemonDetail">Previous Pokemon</button>
                <button id="nextPokemonDetail">Next Pokemon</button>
            </div>
        </div>
    `;
    pokemonDetails.innerHTML = detailHtml;

    pokemonList.innerHTML = '';

    backToTopButton.style.display = 'none';

    // Back button functionality
    const backButton = document.getElementById('back');
    backButton.addEventListener('click', () => {
        pokemonDetails.innerHTML = '';
        pokemonList.innerHTML = '';
        loadPokemonItens(offset, limit);

        backToTopButton.style.display = 'block';
    });

    const previousDetailButton = document.getElementById('previousPokemonDetail');
    previousDetailButton.addEventListener('click', () => {
        if (currentPokemonIndex - 1 >= 0) {
            currentPokemonIndex -= 1; // Move to the previous Pokémon
            displayPokemonDetails(pokemons[currentPokemonIndex], pokemons);
        }
    }); 

    // Next button functionality
    const nextButton = document.getElementById('nextPokemonDetail');
    nextButton.addEventListener('click', () => {
        if (currentPokemonIndex + 1 < pokemons.length) {
            currentPokemonIndex += 1; // Move to the next Pokémon
            displayPokemonDetails(pokemons[currentPokemonIndex], pokemons);
        }
    });
}

// Initial load
loadPokemonItens(offset, limit);


searchBar.addEventListener('input', (event) => {
    const value = event.target.value.toLowerCase()

    const pokemons = pokemonList.querySelectorAll('.pokemon')

    pokemons.forEach((pokemon) => {
        const name = pokemon.querySelector('.name').textContent.toLowerCase()

        if (name.includes(value)) {
            pokemon.style.display = ''
        } else {
            pokemon.style.display = 'none'
        }
    })
})

homeButton.addEventListener('click', () => {
    offset = 0
    pokemonDetails.innerHTML = '';
    pokemonList.innerHTML = ''
    loadPokemonItens(offset, limit)
})

PreviousButton.addEventListener('click', () => {
    if (offset >= limit) {
        offset -= limit
        pokemonList.innerHTML = ''
        pokemonDetails.innerHTML = '';
        loadPokemonItens(offset, limit)
    }
})

NextButton.addEventListener('click', () => {
    const qtdRecordWithNextPage = offset + limit

    if (qtdRecordWithNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        offset += limit
        pokemonList.innerHTML = ''
        pokemonDetails.innerHTML = '';
        loadPokemonItens(offset, newLimit)

    } else {
        offset += limit
        pokemonList.innerHTML = ''
        pokemonDetails.innerHTML = '';
        loadPokemonItens(offset, limit)
    }
})

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})