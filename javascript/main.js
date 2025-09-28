// -------------------------------------------------------------
// Stater
// -------------------------------------------------------------
const app = document.querySelector('#app');

let count = 0;


function main() {
    return (
        `
        <main>
            <h1>Watch List</h1>
            <div>
                <h2>Count: <span>${count}</span></h2>
                <button id="countBtn" onclick="countUp()">COUNT</button>
            </div>
        </main>
        `
    )
}

// Functions
function countUp() {
    count++;
    mainRender();
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
window.countUp = countUp;