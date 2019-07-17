import React from "react";
import Link from "gatsby-link";

import Wrapper from "./Wrapper";
import LogoWrapper from "./LogoWrapper";
import NavWrapper from "./NavWrapper";
import Logo from "./logo.jpg";
import Nav from "../Nav";

function Header() {
  return (
    <Wrapper id="top">
      <LogoWrapper>
        <Link to="/">
          <img src={Logo} alt="Adamu M. Dankore" />
        </Link>
      </LogoWrapper>
      <NavWrapper>
        <Nav />
      </NavWrapper>
    </Wrapper>
  );
}

export default Header;
