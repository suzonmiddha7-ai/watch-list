(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const u of s.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(o){if(o.ep)return;o.ep=!0;const s=n(o);fetch(o.href,s)}})();function v(){return`
    <menu class="mainMenu">
        <button id="homeBtn" onclick="showAll()"><i class="fa-solid fa-house"></i></button>
        <button id="favBtn" onclick="showAllFavorites()"><i class="fa-solid fa-heart"></i></button>
        <button id="genreBtn" onclick="showGenreBox()"><i class="fa-solid fa-flask"></i></button>
        <button id="addBtn" onclick="showAddBox()"><i class="fa-solid fa-feather"></i></button>
        <button id="settingsBtn" onclick="showSettings()"><i class="fa-solid fa-gear"></i></button>
    </menu>
  `}function b(){return`
    <div class="searchBox">
        <input type="text" placeholder="Search..." id="searchInput">
        <button id="searchBtn" onclick="searchMovies()"><i class="fa-solid fa-magnifying-glass"></i></button>
    </div>
    `}function l(e="The Foundation",t="9.5",n="https://resizing.flixster.com/ZBgHAnLHBZULeCH4xBS7UXuDs68=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vNzQ1YTA2NmYtMmQ5Ni00ZWNlLThhZTItOGUwZjEyMzFlNGMwLnBuZw==",i){return`
    <div class="movieCard">
        <div class="movieCardBtns">
            <button class="favBtn" onclick="addToFavorites(${i})"><i class="fa-solid fa-heart"></i></button>
            <button class="trashBtn" onclick="removeMovie(${i})" ><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="rating">${t}</div>
        <img src="${n}" class="poster">
        <span class="title">${e}</span>
    </div>
    `}function g(){return`
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
  `}function h(){return`
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
        `}function y(){return`
    <div class="settingBox">
        <div id="importExportBox">
            <button id="importBtn" onclick="importMovies()"><i class="fa-solid fa-file-import"></i> Import</button>
            <button id="exportBtn" onclick="exportMovies()"><i class="fa-solid fa-file-export"></i> Export</button>
        </div>
    </div>
    `}function w(e){let t=JSON.stringify(e),n=new Blob([t],{type:"application/json"}),i=URL.createObjectURL(n),o=document.createElement("a");o.href=i,o.download="data.json",o.click(),URL.revokeObjectURL(i)}async function I(){const[e]=await window.showOpenFilePicker();return await(await e.getFile()).text()}const B=document.getElementById("app");let a=[];function x(){return`
        <nav>${v()}${b()}</nav>
        <main id="main">
            ${a.map((e,t)=>l(e.title,e.rating,e.poster,t)).join("")}
        </main>
        <main id="favorites"></main>
        ${g()}
    `}function c(){B.innerHTML=x()}c();function M(e){a.splice(e,1),c()}function T(e){a[e].favorite=!a[e].favorite,c(),console.log(a)}function f(){const e=document.getElementById("main");e.innerHTML=a.map((t,n)=>l(t.title,t.rating,t.poster,n)).join("")}function k(){const e=document.getElementById("main");e.innerHTML=a.filter(t=>t.favorite).map((t,n)=>l(t.title,t.rating,t.poster,n)).join("")}function L(e){const t=document.getElementById("main");e==="all"?f():t.innerHTML=a.filter(n=>n.genres.includes(e)).map((n,i)=>l(n.title,n.rating,n.poster,i)).join("")}function E(){const e=document.getElementById("genreBox");e.style.display=e.style.display==="flex"?"none":"flex"}let d,p;const r=[];function A(){d=document.getElementById("ratingInput"),p=document.getElementById("ratingValue"),d&&p&&d.addEventListener("input",()=>{p.textContent=d.value})}function F(){document.querySelectorAll(".genreInput").forEach(t=>{t.addEventListener("input",()=>{if(t.checked)r.includes(t.name)||r.push(t.name);else{const n=r.indexOf(t.name);n!==-1&&r.splice(n,1)}console.log(r)})})}async function H(){const e=document.getElementById("titleInput"),t=await navigator.clipboard.readText();e.value=t}async function O(){const e=document.getElementById("posterInput"),t=await navigator.clipboard.readText();e.value=t}function C(){const e=document.getElementById("main");e.innerHTML=h(),A(),F()}function j(){a.push({title:document.getElementById("titleInput").value,poster:document.getElementById("posterInput").value,rating:document.getElementById("ratingInput").value,favorite:!1,genres:[...r]}),c()}function m(){const e=document.getElementById("main"),t=document.getElementById("searchInput");e.innerHTML=a.filter(n=>n.title.toLowerCase().includes(t.value.toLowerCase())).map((n,i)=>l(n.title,n.rating,n.poster,i)).join("")}const N=document.getElementById("searchInput");N.addEventListener("input",m);function S(){const e=document.getElementById("main");e.innerHTML=y()}function P(){I().then(e=>{a=JSON.parse(e),c()})}function $(){w(a)}window.addToFavorites=T;window.removeMovie=M;window.showAllFavorites=k;window.showAll=f;window.showGenreBox=E;window.showMovieType=L;window.addToMovieList=j;window.showAddBox=C;window.searchMovies=m;window.pasteTitle=H;window.pastePoster=O;window.showSettings=S;window.importMovies=P;window.exportMovies=$;
