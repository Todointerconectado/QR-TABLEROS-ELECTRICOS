function getParametro(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

document.addEventListener("DOMContentLoaded", () => {
  const sedeSeleccionada = getParametro("sede");
  const lista = document.getElementById("content-links");

  fetch("./data/tableros_completo.json")
    .then((response) => response.json())
    .then((data) => {
      const tableros = data.datos.filter(
        (tablero) => tablero.sede === sedeSeleccionada
      );

      if (tableros.length === 0) {
        lista.innerHTML = "<li>No se encontraron tableros para esta sede.</li>";
        return;
      }

      tableros.forEach((tablero) => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        const span = document.createElement("span");
        const img = document.createElement("img");

        // Texto del tablero
        span.textContent = tablero["id del tablero"];

        // Flechita
        img.src = "./assets/icons/arrow.png";
        img.alt = "arrow";

        // Config del enlace
        a.className = "links";
        a.href = tablero.url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";

        // Orden de elementos dentro del <a>
        a.appendChild(span);
        a.appendChild(img);

        li.appendChild(a);
        lista.appendChild(li);
      });
    })
    .catch((err) => console.error("Error cargando JSON:", err));
});
