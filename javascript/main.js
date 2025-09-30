// -------------------------------------------------------------
// Imports
// -------------------------------------------------------------
import menu from './components/menu.mjs';
import search from './components/search.mjs';
import movieCard from './components/movieCard.mjs';
import addBox from './components/addBox.mjs';
import genreBox from "./components/genreBox.mjs";
import setting from './components/setting.mjs';
// Functions
import { removeMovie, addToFavorites, showGenraContainer, showMovieType_x, importer, exporter  } from './components/utility.mjs';

// -------------------------------------------------------------
// Movie List
// -------------------------------------------------------------
let movieList = [
    {
        title: "The Foundation",
        poster: "https://resizing.flixster.com/ZBgHAnLHBZULeCH4xBS7UXuDs68=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzQ1YTA2NmYtMmQ5Ni00ZWNlLThhZTItOGUwZjEyMzFlNGMwLnBuZw==",
        rating: "9.5",
        favorite: true,
        genres: ["action", "adventure", "sci-fi"]
    },
    {
        title: "The Matrix",
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStQXDGgtaPKhZ852ock9YERjLN33SyjJjV5GpQDN2kXnxNbGAMgbg2JMA8NkwzgsA1_aLVvi4HdkLsXhEgKtyvmpqp3yBeWlIhnkPu7Q",
        rating: "8.7",
        favorite: false,
        genres: ["fantasy"]
    }
];

// -------------------------------------------------------------
// Track current view  ('all' | 'favorites')
// -------------------------------------------------------------
let currentView = 'all';

// -------------------------------------------------------------
// Render helpers
// -------------------------------------------------------------
function renderAllMovies() {
    return movieList
        .map((movie, index) =>
            movieCard(movie.title, movie.rating, movie.poster, index)
        )
        .join('');
}

function renderFavoriteMovies() {
    return movieList
        .filter(movie => movie.favorite)
        .map((movie, index) =>
            movieCard(movie.title, movie.rating, movie.poster, index)
        )
        .join('');
}


function updateMain() {
    const main = document.querySelector('#main');
    switch (currentView) {
        case 'all':
            main.innerHTML = renderAllMovies();
            break;
        case 'favorites':
            main.innerHTML = renderFavoriteMovies();
            break;
        case 'add':
            main.innerHTML = addBox();
            break;
        case 'settings':
            main.innerHTML = setting();
            break;
    }
}

// -------------------------------------------------------------
// Page shell
// -------------------------------------------------------------
const app = document.querySelector('#app');

function main() {
    return `
        <nav>${menu()}${search()}</nav>
        <main id="main">
            ${renderAllMovies()}
        </main> 
        <div id="genreContainer">${genreBox()}</div>
    `;
}

// Initial render
function mainRender() {
    app.innerHTML = main();
}
mainRender();

//-------------------------------------------------------------
let ratingInput
let ratingValue
const genreList = [] // keeps unique genre selections

function bindRatingInput() {
    ratingInput = document.getElementById('ratingInput')
    ratingValue = document.getElementById('ratingValue')
    if (ratingInput && ratingValue) {
        ratingInput.addEventListener('input', () => {
            ratingValue.textContent = ratingInput.value
        })
    }
}

function bindGenreInputs() {
    const genreInputs = document.querySelectorAll('.genreInput')
    genreInputs.forEach(input => {
        input.addEventListener('input', () => {
            if (input.checked) {
                if (!genreList.includes(input.name)) genreList.push(input.name)
            } else {
                const idx = genreList.indexOf(input.name)
                if (idx !== -1) genreList.splice(idx, 1)
            }
            console.log(genreList)
        })
    })
}

async function pasteTitle() {
    const titleInput = document.getElementById('titleInput')
    const title = await navigator.clipboard.readText()
    titleInput.value = title
}

async function pastePoster() {
    const posterInput = document.getElementById('posterInput')
    const poster = await navigator.clipboard.readText()
    posterInput.value = poster
}

function addToMovieList() {
    movieList.push({
        title: document.getElementById("titleInput").value,
        poster: document.getElementById("posterInput").value,
        rating: document.getElementById("ratingInput").value,
        favorite: false,
        genres: [...genreList] // copy the array
    })
    mainRender()
    console.log(movieList)
}


// -------------------------------------------------------------
// View switchers
// -------------------------------------------------------------
function showAllMovies() {
    currentView = 'all';
    updateMain();
}

function showAllFavoritesMovies() {
    currentView = 'favorites';
    updateMain();
}

function showAddBox() {
    currentView = 'add';
    updateMain();
    // bind events only AFTER elements exist
    bindRatingInput()
    bindGenreInputs()
}

function showSettings() {
    currentView = 'settings';
    updateMain();
}

// -------------------------------------------------------------
// Import/Export
// -------------------------------------------------------------
function importMovies() {
    importer().then(data => {
        movieList = JSON.parse(data)
        mainRender()
    }) 
}

function exportMovies() {
    exporter(movieList)
}


// -------------------------------------------------------------
// Global Functions (for onclick handlers)
// -------------------------------------------------------------
window.removeMovie = function (index) {
    removeMovie(movieList, index);
    updateMain(); // re-render current view
};

window.addToFavorites = function (index) {
    addToFavorites(movieList, index);
    updateMain(); // stay on current view
};

// ------------------------------------------------------------------
// Search functions
// ------------------------------------------------------------------

function searchMovies() {
    const main = document.getElementById('main')
    const searchInput = document.getElementById('searchInput')
    main.innerHTML = movieList
        .filter(movie => movie.title.toLowerCase().includes(searchInput.value.toLowerCase()))
        .map((movie, index) => movieCard(movie.title, movie.rating, movie.poster, index))
        .join('')
}

const searchInput = document.getElementById('searchInput')
searchInput.addEventListener('input', searchMovies)


window.showAllMovies = showAllMovies;
window.showAllFavoritesMovies = showAllFavoritesMovies;
window.showAddBox = showAddBox;
window.showGenraContainer = showGenraContainer;
window.showSettings = showSettings;
window.showMovieType = function (type) {
    showMovieType_x(movieList, type);
};

window.pasteTitle = pasteTitle
window.pastePoster = pastePoster
window.addToMovieList = addToMovieList

window.importMovies = importMovies
window.exportMovies = exportMovies

window.searchMovies = searchMovies