export default function menu() {
  return `
    <menu class="mainMenu">
        <button id="homeBtn" onclick="showAllMovies()"><i class="fa-solid fa-house"></i></button>
        <button id="favBtn" onclick="showAllFavoritesMovies()"><i class="fa-solid fa-heart"></i></button>
        <button id="genreBtn" onclick="showGenraContainer()"><i class="fa-solid fa-flask"></i></button>
        <button id="addBtn" onclick="showAddBox()"><i class="fa-solid fa-feather"></i></button>
        <button id="settingsBtn" onclick="showSettings()"><i class="fa-solid fa-gear"></i></button>
    </menu>
  `;
}