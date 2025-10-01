const contentLinks = document.querySelector(".content-links");

if (contentLinks.scrollHeight > contentLinks.clientHeight) {
  const setShadow = (hover, active) => {
    contentLinks.classList.toggle("scroll-hover", hover);
    contentLinks.classList.toggle("scroll-active", active);
  };

  let isScrolling;
  contentLinks.addEventListener("mouseenter", () => setShadow(true, false));
  contentLinks.addEventListener("mouseleave", () => setShadow(false, false));

  contentLinks.addEventListener("scroll", () => {
    setShadow(false, true);
    clearTimeout(isScrolling);
    isScrolling = setTimeout(() => setShadow(true, false), 200);
  });
}
