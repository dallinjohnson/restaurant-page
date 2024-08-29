export default function Block(headingText, descriptionText) {
  const block = document.createElement("div");
  block.classList.add("block");

  const heading = document.createElement("h2");
  heading.innerHTML = headingText;
  const description = document.createElement("p");
  description.innerHTML = descriptionText;

  block.appendChild(heading);
  block.appendChild(description);

  return block;
}
