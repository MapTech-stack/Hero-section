// Global varailbe

const navbarToggle = document.querySelector(".mobile-toggle");
const primaryNavigaition = document.querySelector(".primary-navigation");

// sub-Menu
const subMenuIcons = document.querySelectorAll(".sub-menu-icon");
const subMenus = document.querySelectorAll(".sub-menu");

navbarToggle.addEventListener("click", () => {
  const visibility = primaryNavigaition.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNavigaition.setAttribute("data-visible", true);
    navbarToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNavigaition.setAttribute("data-visible", false);
    navbarToggle.setAttribute("aria-expanded", false);
  }
});

// mobile menu icon

// mobile menu close icon


// sub menu

let prevIndex = false;

subMenuIcons.forEach((icon, index) => {
  icon.addEventListener("click", () => {
    if (prevIndex !== false) {
      subMenuIcons[prevIndex].src = "images/icon-arrow-down.svg";
      subMenus[prevIndex].classList.add("hidden");
      subMenus[prevIndex].classList.remove("show");
    }

    if (index === prevIndex) {
      prevIndex = false;
    } else {
      icon.src = "images/icon-arrow-up.svg";
      subMenus[index].classList.remove("hidden");
      subMenus[index].classList.add("show");

      prevIndex = index;
    }
  });
});

// hero client img loader
