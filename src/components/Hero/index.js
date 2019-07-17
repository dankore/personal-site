import React from "react";

import Wrapper from "./Wrapper";
import Container from "./Container";
import Column from "./Column";
import H1 from "./H1";
import P from "./P";
import HeroLinks from "../HeroLinks";
import Img from "./Img";
import Me from "./adamu.png";
import ParticlesBG from "../ParticlesBG";

function Hero(props) {
  return (
    <Wrapper>
      <ParticlesBG />
      <Container>
        <Column>
          <H1>Adamu M. Dankore</H1>
          <P>
            Front-end Software Engineer. Currently, I'm a Front-end Developer at{" "}
            <a
              href="https://homeawayfromhome.online/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Home Away Frome Home
            </a>
            .
          </P>
          <HeroLinks />
        </Column>
        <Column>
          <Img src={Me} alt="Picture of Adamu M. Dankore" />
        </Column>
      </Container>
    </Wrapper>
  );
}

export default Hero;
