import movieCard from "./movieCard.mjs";

// remove movie
export function removeMovie(list, id) {
    list.splice(id, 1);
}

// add favorites
export function addToFavorites(list, id) {
    list[id].favorite = true;
}

// remove favorites
export function removeFromFavorites(list, id) {
    list[id].favorite = false;
}


// Show or hide the genre box
export function showGenraContainer() {
    const genreContainer = document.querySelector('#genreContainer');
    genreContainer.style.display = genreContainer.style.display === 'block' ? 'none' : 'block';
}

// filter by genre
export function showMovieType_x(list, type) {
    const main = document.getElementById('main');
    if (type === 'all') {
        main.innerHTML = list
            .map((movie, index) => movieCard(movie.title, movie.rating, movie.poster, index))
            .join('');
    } else {
        let filteredMovies = list.filter(movie => movie.genres.includes(type));
        if (filteredMovies.length > 0) {
            main.innerHTML = filteredMovies
                .map((movie, index) => movieCard(movie.title, movie.rating, movie.poster, index))
                .join('');
        } else {
            main.innerHTML = '<h1 class="infoText">No movies of this genre</h1>';
        }
    }
}

export function exporter(data) {
  let json = JSON.stringify(data);
  // Create a Blob from the JSON string with MIME type application/json
  let blob = new Blob([json], { type: "application/json" });
  // Generate a temporary object URL for the Blob
  let url = URL.createObjectURL(blob);
  // Create a hidden anchor (<a>) element to trigger the download
  let a = document.createElement("a");
  a.href = url;               // Set the href to the Blob URL
  a.download = "data.json";   // Specify the filename for the downloaded file
  a.click();
  // Revoke the temporary URL to free up memory
  URL.revokeObjectURL(url);
}

export async function importer() {
  const [fileHandle] = await window.showOpenFilePicker();
  // Read file contant 
  const file = await fileHandle.getFile();
  const content = await file.text();
  return content
}