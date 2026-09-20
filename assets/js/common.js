(() => {
  const initializeNavigation = () => {
    const navigation = document.querySelector(".site-nav");
    const toggle = navigation?.querySelector(".nav-toggle");
    const menu = navigation?.querySelector("#site-menu");

    if (!navigation || !toggle || !menu) return;

    document.body.classList.add("js-nav");

    const setOpen = (isOpen, returnFocus = false) => {
      navigation.classList.toggle("is-open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
      if (returnFocus) toggle.focus();
    };

    toggle.addEventListener("click", () => {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    document.addEventListener("keydown", (event) => {
      if (
        event.key === "Escape" &&
        toggle.getAttribute("aria-expanded") === "true"
      ) {
        setOpen(false, true);
      }
    });

    document.addEventListener("click", (event) => {
      if (
        !navigation.contains(event.target) &&
        toggle.getAttribute("aria-expanded") === "true"
      ) {
        setOpen(false);
      }
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeNavigation, {
      once: true,
    });
  } else {
    initializeNavigation();
  }
})();

if (window.jQuery) {
  window.jQuery(function ($) {
    $("a.abstract").click(function () {
      $(this).parent().parent().find(".abstract.hidden").toggleClass("open");
    });
    $("a.bibtex").click(function () {
      $(this).parent().parent().find(".bibtex.hidden").toggleClass("open");
    });
  });
}
