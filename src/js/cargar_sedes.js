

fetch("./data/tableros_completo.json")
  .then((response) => response.json())
  .then((data) => {
    const lista = document.getElementById("content-links");
    const sedes = {};

    // Agrupar tableros por sede
    data.datos.forEach((tablero) => {
      const sede = tablero.sede;
      if (!sedes[sede]) sedes[sede] = true;
    });

    // Crear lista de sedes únicas
    Object.keys(sedes).forEach((sede) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const span = document.createElement("span");
      const img = document.createElement("img");

      // Texto dentro del span
      span.textContent = sede;

      // Ícono
      img.src = "./assets/icons/arrow.png";
      img.alt = "arrow";

      // Configuración del link
      a.className = "links";
      a.href = `/cosaca.html?sede=${encodeURIComponent(sede)}`;
      a.target = "_blank";
      a.rel = "noopener noreferrer";

      // Agregar contenido al link
      a.appendChild(span);
      a.appendChild(img);

      // Insertar en la lista
      li.appendChild(a);
      lista.appendChild(li);
    });
  })
  .catch((err) => console.error("Error cargando JSON:", err));
