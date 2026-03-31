// Jose Rodriguez
// ITMD 441-01

(function () {
  "use strict";

  const heroHeading = document.querySelector("section h1");
  heroHeading.textContent = "Uplift Your Brand with Stellar Marketing";

  const heroParagraph = document.querySelector("section p");
  heroParagraph.innerHTML =
    'Utilize cutting-edge strategies from <strong><em>Stellar Marketing</em></strong> to help your business thrive and excel.';

  const heroSection = document.querySelector("section");
  heroSection.style.backgroundImage = "url('https://picsum.photos/id/683/1280/720')";
  heroSection.style.backgroundSize = "cover";
  heroSection.style.backgroundPosition = "center";

  const heroButton = document.querySelector("section .inline-block");
  if (heroButton) {
    heroButton.remove();
  }

  const nav = document.querySelector("nav");
  const footer = document.querySelector("footer");

  const footerBg = window.getComputedStyle(footer).backgroundColor;
  nav.style.backgroundColor = footerBg;

})();