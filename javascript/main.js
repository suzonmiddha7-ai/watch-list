// -------------------------------------------------------------
// Imports
// -------------------------------------------------------------
import menu from './components/menu.mjs';
import search from './components/search.mjs';
import movieCard from './components/movieCard.mjs';

// Tests List 
let movieList = [
    {
        title: "The Foundation",
        poster: "https://resizing.flixster.com/ZBgHAnLHBZULeCH4xBS7UXuDs68=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzQ1YTA2NmYtMmQ5Ni00ZWNlLThhZTItOGUwZjEyMzFlNGMwLnBuZw==",
        rating: "9.5",
        favorite: true
    }
]

// -------------------------------------------------------------
// Stater
// -------------------------------------------------------------
const app = document.querySelector('#app');


function main() {
    return (
        `
        <nav>${menu()}${search()}</nav>
        <main>
            ${movieList.map((movie, index) => movieCard(movie.title, movie.rating, movie.poster, index))}
        </main>
        `
    )
}

// -------------------------------------------------------------
// Render function
// -------------------------------------------------------------
function mainRender() {
    app.innerHTML = main();
}
// initial render
mainRender();


// -------------------------------------------------------------
// Global Function
// -------------------------------------------------------------
