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
import { removeMovie, addToFavorites, showGenraContainer  } from './components/utility.mjs';

// -------------------------------------------------------------
// Movie List
// -------------------------------------------------------------
let movieList = [
    {
        title: "The Foundation",
        poster: "https://resizing.flixster.com/ZBgHAnLHBZULeCH4xBS7UXuDs68=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzQ1YTA2NmYtMmQ5Ni00ZWNlLThhZTItOGUwZjEyMzFlNGMwLnBuZw==",
        rating: "9.5",
        favorite: true
    },
    {
        title: "The Matrix",
        poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStQXDGgtaPKhZ852ock9YERjLN33SyjJjV5GpQDN2kXnxNbGAMgbg2JMA8NkwzgsA1_aLVvi4HdkLsXhEgKtyvmpqp3yBeWlIhnkPu7Q",
        rating: "8.7",
        favorite: false
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

let cat = `<h1>CAt</h1>`

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
}

function showSettings() {
    currentView = 'settings';
    updateMain();
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

window.showAllMovies = showAllMovies;
window.showAllFavoritesMovies = showAllFavoritesMovies;
window.showAddBox = showAddBox;
window.showGenraContainer = showGenraContainer;
window.showSettings = showSettings;
