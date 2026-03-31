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

  const heroButton = document.querySelector("section a.bg-blue-600");
  if (heroButton) {
    heroButton.remove();
  }

  const header = document.querySelector("header");
  const footer = document.querySelector("footer");
  const footerBg = window.getComputedStyle(footer).backgroundColor;

  if (header) {
    header.style.backgroundColor = footerBg;
  }

  const serviceIcons = document.querySelectorAll("#services .material-symbols-outlined");
  serviceIcons.forEach(function (icon) {
    icon.style.color = "#47C714";
  });

  const serviceCards = document.querySelectorAll("#services .rounded-lg");

  serviceCards.forEach(function (card) {
    const title = card.querySelector("h3");
    const icon = card.querySelector(".material-symbols-outlined");

    if (title && icon && title.textContent.trim() === "Digital Marketing") {
      icon.textContent = "ads_click";
    }
  });

  const style = document.createElement("style");
  style.textContent =`
    @media (min-width: 1024px) {
      #solutions .grid {
        grid-template-columns: repeat(4, 1fr) !important;
      }
    }
  `;
  document.head.appendChild(style);
})();