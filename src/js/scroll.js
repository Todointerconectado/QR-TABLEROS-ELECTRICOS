// Espera a que toda la página cargue antes de ejecutar el script
window.addEventListener("load", () => {
  // Selecciona el contenedor principal donde estarán los links
  const contentLinks = document.querySelector(".content-links");

  // Verifica si el contenido tiene suficiente altura para permitir scroll
  if (contentLinks.scrollHeight > contentLinks.clientHeight) {

    /**
     * Función para manejar las clases de sombra
     * @param {boolean} hover - Si el hover está activo
     * @param {boolean} active - Si el scroll está activo
     */
    const setShadow = (hover, active) => {
      contentLinks.classList.toggle("scroll-hover", hover); // Sombra suave al hover
      contentLinks.classList.toggle("scroll-active", active); // Sombra fuerte al hacer scroll
    };

    let isScrolling; // Guarda el temporizador para detectar cuándo dejó de scrollear

    // Detecta cuando el ratón entra en el área del contenedor
    contentLinks.addEventListener("mouseenter", () => setShadow(true, false));

    // Detecta cuando el ratón sale del área del contenedor
    contentLinks.addEventListener("mouseleave", () => setShadow(false, false));

    // Detecta cuando el usuario hace scroll
    contentLinks.addEventListener("scroll", () => {
      setShadow(false, true); // Activa sombra fuerte mientras se hace scroll

      clearTimeout(isScrolling); // Cancela cualquier temporizador anterior

      // Después de 200ms sin scroll, vuelve a la sombra suave si está hover
      isScrolling = setTimeout(() => setShadow(true, false), 200);
    });
  }
});
