export default function Hero(backgroundSrc) {
  const hero = document.createElement("div");
  hero.classList.add("hero");

  const heroImage = document.createElement("img");
  heroImage.src = backgroundSrc;

  hero.appendChild(heroImage);

  return hero;
}
