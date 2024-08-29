import "./styles.css";
import Home from "./home.js";
import Menu from "./menu.js";
import About from "./about.js";

document.addEventListener("DOMContentLoaded", () => {
  renderContent(Home());
});

const navButtons = document.querySelectorAll("nav > button");
for (let navButton of navButtons) {
  navButton.addEventListener("click", () => {
    let content;
    if (navButton.id === "homeButton") {
      content = Home();
    } else if (navButton.id === "menuButton") {
      content = Menu();
    } else if (navButton.id === "aboutButton") {
      content = About();
    } else {
      content = "";
    }
    renderContent(content);
  });
}

function renderContent(content) {
  const contentDiv = document.querySelector("#content");
  contentDiv.innerHTML = content.innerHTML;
}
