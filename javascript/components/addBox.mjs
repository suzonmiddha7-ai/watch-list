export default function() {
    return (
        `
        <div class="addBox">
            <div class="addBoxContent">
                <div class="inputBox">
                    <input type="text" placeholder="Title" id="titleInput">
                    <button onclick="pasteTitle()"><i class="fa-solid fa-feather"></i></button>
                </div>
                <div class="inputBox">
                    <input type="text" placeholder="Poster" id="posterInput">
                    <button onclick="pastePoster()"><i class="fa-solid fa-feather"></i></button>
                </div>
                <div class="rangeBox">
                    <input type="range" min="1" max="10" step="0.5" value="10" id="ratingInput">
                    <span id="ratingValue">10</span>
                </div>
                <div>
                    <div>
                        <input type="checkbox" name="action" class="genreInput">
                        <label for="genreInput">Action</label>
                    </div>
                    <div>
                        <input type="checkbox" name="adventure" class="genreInput">
                        <label for="genreInput">Adventure</label>
                    </div>
                    <div>
                        <input type="checkbox" name="comedy" class="genreInput">
                        <label for="genreInput">Comedy</label>
                    </div>
                    <div>
                        <input type="checkbox" name="crime" class="genreInput">
                        <label for="genreInput">Crime</label>
                    </div>
                    <div>
                        <input type="checkbox" name="fantasy" class="genreInput">
                        <label for="genreInput">Fantasy</label>
                    </div>
                    <div>
                        <input type="checkbox" name="drama" class="genreInput">
                        <label for="genreInput">Drama</label>
                    </div>
                    <div>
                        <input type="checkbox" name="sci-fi" class="genreInput">
                        <label for="genreInput">Sci-Fi</label>
                    </div>
                    <div>
                        <input type="checkbox" name="thriller" class="genreInput">
                        <label for="genreInput">Thriller</label>
                    </div>
                    <div>
                        <input type="checkbox" name="romance" class="genreInput">
                        <label for="genreInput">Romance</label>
                    </div>
                    <div>
                        <input type="checkbox" name="horror" class="genreInput">
                        <label for="genreInput">Horror</label>
                    </div>
                    <div>
                        <input type="checkbox" name="documentary" class="genreInput">
                        <label for="genreInput">Documentary</label>
                    </div>
                </div>
            </div>
            <button id="addBtnX" onclick="addToMovieList()"><i class="fa-solid fa-truck-fast"></i></button>
        </div>
        `
    )
}