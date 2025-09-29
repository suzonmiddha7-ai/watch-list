export default function genreBox() {
  return `
    <div id="genreBox">
      <button onclick="showMovieType('all')">All</button>
      <button onclick="showMovieType('action')">Action</button>
      <button onclick="showMovieType('adventure')">Adventure</button>
      <button onclick="showMovieType('comedy')">Comedy</button>
      <button onclick="showMovieType('crime')">Crime</button>
      <button onclick="showMovieType('documentary')">Documentary</button>
      <button onclick="showMovieType('drama')">Drama</button>
      <button onclick="showMovieType('fantasy')">Fantasy</button>
      <button onclick="showMovieType('horror')">Horror</button>
      <button onclick="showMovieType('romance')">Romance</button>
      <button onclick="showMovieType('sci-fi')">Sci-Fi</button>
      <button onclick="showMovieType('thriller')">Thriller</button>
    </div>
  `;
}
