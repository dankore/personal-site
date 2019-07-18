import React from "react";

import Wrapper from "./Wrapper";
import Link from "./Link";
import SocialMedia from "../SocialMedia";

function Footer() {
  return (
    <Wrapper>
      <span>Follow Me</span>
      <SocialMedia />
      <Link href="#top">Back to Top</Link>
      <p>&copy; {new Date().getFullYear()} by Adamu M. Dankore</p>
    </Wrapper>
  );
}

export default Footer;
