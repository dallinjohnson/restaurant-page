import team from "./resources/team.jpg";
import Block from "./block.js";
import Hero from "./hero.js";

export default function About() {
  const contentDiv = document.createElement("div");

  const hero = Hero(team);
  contentDiv.appendChild(hero);
  contentDiv.appendChild(
    Block(
      "Our Story",
      "Hazel's Coffee Co. began as a small dream to create a cozy, welcoming space for coffee lovers in our community. We’ve grown since our early days, but our commitment to quality, sustainability, and community remains at the heart of everything we do."
    )
  );

  contentDiv.appendChild(
    Block(
      "Meet the Team",
      "Our team is made up of passionate coffee enthusiasts who are dedicated to making every visit to Hazel's Coffee Co. special. From our talented baristas to our friendly staff, we’re here to make your day a little brighter, one cup at a time."
    )
  );

  contentDiv.appendChild(
    Block(
      "Our Commitment to Quality",
      "Quality is our top priority at Hazel's Coffee Co. We source the finest beans, work with local artisans for our pastries, and ensure that every detail of your experience meets the highest standards. We’re here to deliver exceptional coffee, every time."
    )
  );

  contentDiv.appendChild(
    Block(
      "Sustainability Commitment",
      "We’re dedicated to making a positive impact on the environment. Our sustainability efforts include using eco-friendly packaging, reducing waste, and supporting coffee growers with fair trade practices. At Hazel's Coffee Co., we believe that great coffee shouldn’t come at the expense of the planet."
    )
  );

  return contentDiv;
}
