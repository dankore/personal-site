import React from "react";

import Link from "./Link";
import GatsbyLink from "./GatsbyLink";

function Nav() {
  return (
    <nav>
      <GatsbyLink to="/">Home</GatsbyLink>
      <GatsbyLink to="/#projects">Projects</GatsbyLink>
      <GatsbyLink to="/#contact">Contact</GatsbyLink>
    </nav>
  );
}

export default Nav;
