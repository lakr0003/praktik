"use strict";
const headerEl = document.querySelector(".header");
const videos = document.querySelectorAll(".myVid");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }

    // Kun pause videoer
    if (entry.target.tagName === "VIDEO" && !entry.target.paused) {
      entry.target.pause();
    }
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    // hvis px er over 50 vises header
    headerEl.classList.add("header_scroll");
  } else if (window.scrollY <= 50) {
    // hvis px er over 50 vises header
    headerEl.classList.remove("header_scroll");
  }
});

// videos.forEach((video) => {
//   video.addEventListener("mouseover", function () {
//     this.play();
//   });

//   video.addEventListener("mouseleave", function () {
//     this.pause();
//   });
// });

videos.forEach((video) => {
  // Desktop: hover
  video.addEventListener("mouseover", function () {
    if (window.innerWidth > 768) this.play(); // kun på større skærme
  });

  video.addEventListener("mouseleave", function () {
    if (window.innerWidth > 768) this.pause();
  });

  // Mobil / touch: click
  video.addEventListener("click", function () {
    if (this.paused) {
      this.play();
    } else {
      this.pause();
    }
  });
  // Pause automatisk, hvis video ikke længere er synlig
  observer.observe(video);
});

const mybutton = document.getElementById("myBtn");

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  // viser knappen når man scroller længere end 1 viewport højde
  if (window.scrollY > window.innerHeight * 0.8) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
});

mybutton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
