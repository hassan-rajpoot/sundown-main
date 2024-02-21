const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function page4Animation() {
  var elemC = document.querySelector("#elem-container");
  var fixed = document.querySelector("#fixed-image");
  elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
  });
  elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
  });

  var elems = document.querySelectorAll(".elem");
  elems.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
      var image = e.getAttribute("data-image");
      fixed.style.backgroundImage = `url(${image})`;
    });
  });
}
function swiperAnimation() {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      centeredSlides: false, // Not centering slides
      spaceBetween: 0, // No space between slides
      loop: false, // Disable looping
      keyboard: {
          enabled: true // Enable keyboard control
      },
      mousewheel: {
          forceToAxis: true, // Scroll slide by slide
          releaseOnEdges: true, // Release when reaching the edge
      },
      freeMode: false, // Disable free mode
  });
}

function menuAnimation() {
  var menu = document.querySelector("nav h3");
  var full = document.querySelector("#full-scr");
  var navimg = document.querySelector("nav img");
  var flag = 0;
  menu.addEventListener("click", function () {
    if (flag == 0) {
      full.style.top = 0;
      navimg.style.opacity = 0;
      flag = 1;
    } else {
      full.style.top = "-100%";
      navimg.style.opacity = 1;
      flag = 0;
    }
  });
}

function loaderAnimation() {
  var loader = document.querySelector("#loader");
  setTimeout(function () {
    loader.style.top = "-100%";
  }, 4200);
}

swiperAnimation();
page4Animation();
menuAnimation();
loaderAnimation();

function showContent(imageId, clickedElement) {
  // Hide all paragraphs
  let paragraphs = document.querySelectorAll(".inner2 p");
  paragraphs.forEach(function (p) {
    p.style.display = "none";
  });

  let paragraphId = imageId + "-content";
  let selectedParagraph = document.getElementById(paragraphId);
  if (selectedParagraph) {
    selectedParagraph.style.display = "block";
  }

  let images = document.querySelectorAll(".right-img img");
  images.forEach(function (img) {
    img.style.display = "none";
  });

  let selectedImage = document.getElementById(imageId);
  if (selectedImage) {
    selectedImage.style.display = "block";
  }

  let allHeaders = document.querySelectorAll(".inner1 h1");
  allHeaders.forEach(function (header) {
    header.style.opacity = "0.5";
  });

  clickedElement.style.opacity = "1.0";
}

showContent("design", document.querySelector(".inner1 h1:first-child"));
