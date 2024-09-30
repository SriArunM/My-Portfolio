const menubar = document.querySelector("#menu");
const Navbar = document.querySelector(".navbar");
menubar.onclick = () => {
  menubar.classList.toggle("bx-x");
  Navbar.classList.toggle("active");
};
const section = document.querySelectorAll("section");
const navlink = document.querySelectorAll("header nav a");
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top > offset && top < offset + height) {
      sec.classList.add("start-animation");
      navlink.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  var header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 100);
  menubar.classList.remove("bx-x");
  Navbar.classList.remove("active");
};
// Toggle Menu
document.getElementById("menu").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
});

// Button functionality
const hireMeBtn = document.querySelector(".btn-section .btn:nth-child(1)");
const letsTalkBtn = document.querySelector(".btn-section .btn:nth-child(2)");

hireMeBtn.addEventListener("click", function () {
  window.location.href = "mailto:msriarunm@gmail.com?subject=Hiring Inquiry";
});

letsTalkBtn.addEventListener("click", function () {
  window.location.href = "mailto:msriarunm@gmail.com?subject=Let's Talk";
});

// Contact Form Submission (For future integration with backend)
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Your message has been sent!");
  // You can add AJAX to send form data to a backend here
});
