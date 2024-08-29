import Block from "./block.js";

export default function Menu() {
  const contentDiv = document.createElement("div");
  contentDiv.appendChild(
    Block(
      "Coffee Selection",
      "Explore our wide range of coffee offerings, from classic espresso drinks to seasonal specialties. Whether you prefer a strong black coffee or a creamy latte, we’ve got something for every taste. Made with love, just for you."
    )
  );

  contentDiv.appendChild(
    Block(
      "Signature Drinks",
      "Our signature drinks are crafted to bring out the best flavors in our beans. Try our Hazel’s Special, a rich and nutty blend, or the Vanilla Dream, a sweet and smooth treat. These drinks are unique to Hazel's Coffee Co. and are sure to become your favorites."
    )
  );

  contentDiv.appendChild(
    Block(
      "Pastries & Snacks",
      "Complement your coffee with one of our delicious pastries or snacks. From warm, buttery croissants to hearty, wholesome muffins, our selection is perfect for any time of day. We also offer gluten-free and vegan options to suit all dietary needs."
    )
  );

  contentDiv.appendChild(
    Block(
      "Seasonal Specials",
      "Our menu changes with the seasons to bring you fresh, exciting flavors all year round. Check out our latest seasonal specials, featuring locally sourced ingredients and creative twists on your favorite drinks and treats."
    )
  );

  return contentDiv;
}
