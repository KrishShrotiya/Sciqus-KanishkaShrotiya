(function () {
  const body = document.body;
  const sidebar = document.querySelector("[data-sidebar]");
  const menuToggles = document.querySelectorAll("[data-menu-toggle]");
  const menuClosers = document.querySelectorAll("[data-menu-close], [data-menu-backdrop]");

  function setMenu(open) {
    if (!sidebar) {
      return;
    }

    sidebar.classList.toggle("is-open", open);
    body.classList.toggle("is-menu-open", open);

    menuToggles.forEach((toggle) => {
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  menuToggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const isOpen = sidebar && sidebar.classList.contains("is-open");
      setMenu(!isOpen);
    });
  });

  menuClosers.forEach((closer) => {
    closer.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenu(false);
    }
  });

  document.querySelectorAll(".sidebar-menu a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.querySelectorAll("[data-carousel]").forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".carousel-slide"));
    const dots = Array.from(carousel.querySelectorAll("[data-carousel-dot]"));

    if (!slides.length || !dots.length) {
      return;
    }

    let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));

    function showSlide(nextIndex) {
      activeIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });

      dots.forEach((dot, index) => {
        dot.classList.toggle("is-active", index === activeIndex);
        dot.setAttribute("aria-pressed", String(index === activeIndex));
      });
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => showSlide(index));
    });

    showSlide(activeIndex);
  });

  document.querySelectorAll("[data-slider]").forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll(".slider-slide"));
    const previous = slider.querySelector("[data-slider-prev]");
    const next = slider.querySelector("[data-slider-next]");

    if (!slides.length || !previous || !next) {
      return;
    }

    let activeIndex = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));

    function showSlide(nextIndex) {
      activeIndex = (nextIndex + slides.length) % slides.length;

      slides.forEach((slide, index) => {
        slide.classList.toggle("is-active", index === activeIndex);
      });

      slider.dataset.current = String(activeIndex + 1);
    }

    previous.addEventListener("click", () => showSlide(activeIndex - 1));
    next.addEventListener("click", () => showSlide(activeIndex + 1));
    showSlide(activeIndex);
  });

  document.querySelectorAll("[data-tab-group]").forEach((group) => {
    const tabs = Array.from(group.querySelectorAll("[data-tab]"));
    const panels = Array.from(group.querySelectorAll("[data-tab-panel]"));

    if (!tabs.length || !panels.length) {
      return;
    }

    function activateTab(tab) {
      const panelId = tab.getAttribute("aria-controls");

      tabs.forEach((item) => {
        const isActive = item === tab;
        item.classList.toggle("is-active", isActive);
        item.setAttribute("aria-selected", String(isActive));
        item.tabIndex = isActive ? 0 : -1;
      });

      panels.forEach((panel) => {
        panel.classList.toggle("is-active", panel.id === panelId);
      });
    }

    tabs.forEach((tab, index) => {
      tab.addEventListener("click", () => activateTab(tab));
      tab.addEventListener("keydown", (event) => {
        if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
          return;
        }

        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        activateTab(tabs[nextIndex]);
      });
    });

    activateTab(tabs.find((tab) => tab.classList.contains("is-active")) || tabs[0]);
  });
}());
