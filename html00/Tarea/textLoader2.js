export function loadTextData(filePath) {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    const textData = xhttp.responseText;
    const lines = textData.trim().split("\n");
    renderTextTable(lines);
  };

  xhttp.open("GET", filePath);
  xhttp.send();
}

function renderTextTable(lines) {
  let table = "<tr><th>Personajes Videojuegos</th></tr>";
  for (let i = 0; i < lines.length; i++) {
    table += `<tr><td>${lines[i].trim()}</td></tr>`;
  }
  document.getElementById("demo").innerHTML = table;
}
