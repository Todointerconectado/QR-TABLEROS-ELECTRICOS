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
      a.className = "links";
      a.href = `./src/html/sede.html?sede=${encodeURIComponent(sede)}`;
      a.target = "_blank"; // Abrir en otra pestaña
      a.rel = "noopener noreferrer"; // Seguridad y privacidad
      a.textContent = sede;
      li.appendChild(a);
      lista.appendChild(li);
    });
  })
  .catch((err) => console.error("Error cargando JSON:", err));
