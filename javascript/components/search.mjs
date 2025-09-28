export default function search() {
  return (
    `
    <div class="searchBox">
        <input type="text" placeholder="Search..." id="searchInput">
        <button id="searchBtn" onclick="searchMovies()"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    `
  )
}
