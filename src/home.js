import coffeeShop from "./resources/coffee-shop.jpg";
import Block from "./block.js";
import Hero from "./hero.js";

export default function Home() {
  const contentDiv = document.createElement("div");

  const hero = Hero(coffeeShop);
  contentDiv.appendChild(hero);
  contentDiv.appendChild(
    Block(
      "Welcome to Hazel's Coffee Co.",
      "Experience the warmth and comfort of your neighborhood coffee shop. At Hazel's Coffee Co., we believe in creating a space where friends gather, ideas flourish, and every cup of coffee is crafted with passion. Whether you’re here for a quick pick-me-up or a leisurely afternoon, our doors are always open to welcome you with a smile."
    )
  );

  contentDiv.appendChild(
    Block(
      "Our Coffee Philosophy",
      "We take pride in sourcing the finest beans from around the world, each selected for its unique flavor profile and ethical origins. Our expert baristas ensure every cup is brewed to perfection, delivering a rich, full-bodied experience in every sip. At Hazel's Coffee Co., coffee is more than just a drink—it’s a journey."
    )
  );

  contentDiv.appendChild(
    Block(
      "Artisan Treats & Pastries",
      "Pair your coffee with one of our freshly baked pastries, handcrafted daily by our talented bakers. From buttery croissants to decadent muffins, our menu offers a variety of options to satisfy your cravings. We also cater to dietary preferences with gluten-free and vegan choices."
    )
  );

  contentDiv.appendChild(
    Block(
      "Community & Events",
      "Hazel's Coffee Co. is more than just a coffee shop—it’s a hub for community connections. Join us for weekly events, from open mic nights to local art showcases, and be part of a vibrant community that shares your love for creativity and coffee. Check our events calendar to see what’s brewing this month."
    )
  );

  return contentDiv;
}
