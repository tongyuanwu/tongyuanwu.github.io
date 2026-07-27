document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("navbar");
  const links = Array.from(document.querySelectorAll("[data-section-link]"));
  const sections = links
    .map((link) => document.getElementById(link.dataset.sectionLink))
    .filter((section) => section !== null);

  if (!nav || links.length === 0 || sections.length === 0) {
    return;
  }

  const setActiveSection = (sectionId) => {
    links.forEach((link) => {
      const isActive = link.dataset.sectionLink === sectionId;
      const item = link.closest(".nav-item");
      if (item) {
        item.classList.toggle("active", isActive);
      }
      if (isActive) {
        link.setAttribute("aria-current", "location");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  let ticking = false;
  const updateActiveSection = () => {
    const threshold = window.scrollY + nav.offsetHeight + 120;
    let currentSection = sections[0];

    sections.forEach((section) => {
      if (section.offsetTop <= threshold) {
        currentSection = section;
      }
    });

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      currentSection = sections[sections.length - 1];
    }

    setActiveSection(currentSection.id);
    ticking = false;
  };

  const alignToCurrentHash = () => {
    const sectionId = decodeURIComponent(window.location.hash.substring(1));
    const target = document.getElementById(sectionId);

    if (!target) {
      return;
    }

    const previousScrollBehavior = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "auto";
    const targetTop = target.getBoundingClientRect().top + window.scrollY - nav.offsetHeight - 16;
    window.scrollTo(0, Math.max(0, targetTop));
    document.documentElement.style.scrollBehavior = previousScrollBehavior;
    updateActiveSection();
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    },
    { passive: true },
  );

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.getElementById(link.dataset.sectionLink);
      if (target) {
        event.preventDefault();
        window.history.pushState(null, "", `#${target.id}`);
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        setActiveSection(target.id);
      }

      const toggler = document.querySelector(".navbar-toggler");
      if (toggler && window.matchMedia("(max-width: 575.98px)").matches) {
        window.setTimeout(() => {
          if (toggler.getAttribute("aria-expanded") === "true") {
            toggler.click();
          }
        }, 400);
      }
    });
  });

  updateActiveSection();

  if (window.location.hash) {
    window.addEventListener("load", alignToCurrentHash, { once: true });
  }
  window.addEventListener("hashchange", alignToCurrentHash);
});
