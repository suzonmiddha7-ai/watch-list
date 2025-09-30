export default function movieCard(title = "The Foundation", rating = "9.5", poster = "https://resizing.flixster.com/ZBgHAnLHBZULeCH4xBS7UXuDs68=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzQ1YTA2NmYtMmQ5Ni00ZWNlLThhZTItOGUwZjEyMzFlNGMwLnBuZw==", index) {
  return (
    `
    <div class="movieCard">
        <div class="movieCardBtns">
            <button class="favBtn" onclick="addToFavorites(${index})"><i class="fa-solid fa-heart"></i></button>
            <button class="unfavBtn" onclick="removeFromFavorites(${index})"><i class="fa-solid fa-heart-circle-xmark"></i></button>
            <button class="trashBtn" onclick="removeMovie(${index})" ><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="rating">${rating}</div>
        <img src="${poster}" class="poster">
        <span class="movieCardTitle">${title}</span>
    </div>
    `
  )
}
