export default function setting() {
  return (
    `
    <div class="settingBox">
        <div id="importExportBox">
            <button id="importBtn" onclick="importMovies()"><i class="fa-solid fa-file-import"></i> Import</button>
            <button id="exportBtn" onclick="exportMovies()"><i class="fa-solid fa-file-export"></i> Export</button>
        </div>
    </div>
    `
  )
}
