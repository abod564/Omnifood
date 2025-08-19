// TEST'S
const me = "Abdelrahman Elfeky";
const h1 = document.querySelector(".heading-1");
const myage = 21;
console.log("Hello World!");
console.log(myage);
console.log(h1);

// CURRENT YEAR
const year = document.querySelector(".year");
const currentyear = new Date().getFullYear();
year.textContent = currentyear;

// BUTTON NAV

const navbtn = document.querySelector(".nav-btn");
const header = document.querySelector(".header");

navbtn.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});

// STICKY NAVIGATION

const sectionHero = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHero);
