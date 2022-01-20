import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      <a href="#home" key={links[0]} >{links[0]}</a>
      <a href="#about" key={links[1]} >{links[1]}</a>
      <a href="#projects" key={links[2]} >{links[2]}</a>
    </nav>);
}

export default NavBar;
