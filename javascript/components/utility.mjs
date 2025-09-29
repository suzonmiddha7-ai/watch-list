// remove movie
export function removeMovie(list, id) {
    list.splice(id, 1);
}

// add/remove favorites
export function addToFavorites(list, id) {
    // Toggle the favorite flag using the list passed in
    list[id].favorite = !list[id].favorite;
}


// Show or hide the genre box
export function showGenraContainer() {
    const genreContainer = document.querySelector('#genreContainer');
    genreContainer.style.display = genreContainer.style.display === 'block' ? 'none' : 'block';
}