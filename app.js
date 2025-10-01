let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar-right a");

window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(".navbar-right a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
