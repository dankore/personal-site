import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import styled from "styled-components";
import {
  backgroundAlt,
  headingColour,
  textColour,
  mainColour
} from "../variables";

import Hero from "../components/Hero";
import Container from "../components/Container";
import BlogPrompt from "../components/BlogPrompt";
import Work from "../components/Work";
import OtherWork from "../components/OtherWork";

const WhiteBackgroundWrapper = styled.div`
  padding: 75px 0 45px;
`;

const ContactBackgroundWrapper = styled.div`
  background: #3498db;
  padding: 75px 0 45px;
`;

const OtherWrapper = styled.div`
  background: ${backgroundAlt};
  padding: 75px 0 45px;
`;

const SectionHeader = styled.h2`
  color: ${headingColour};
  margin: 0;
  text-align: center;
`;
const ContactSectionHeader = styled.h2`
  color: #fff;
  margin: 0;
  text-align: center;
`;

const ContactSectionDescription = styled.p`
  color: #ffffff;
  margin: 0 0 75px;
  text-align: center;
`;

const SectionDescription = styled.p`
  color: ${textColour};
  margin: 0 0 75px;
  text-align: center;

  a {
    color: ${mainColour};
    text-decoration: none;
  }
`;

const OtherWorkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allMarkdownRemark.edges");

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <Hero />
        <WhiteBackgroundWrapper id="projects">
          <Container>
            <SectionHeader>Projects</SectionHeader>
            <SectionDescription>Highlighted projects</SectionDescription>
            {posts.map(post => {
              if (post.node.path !== "/404/") {
                return (
                  <Work
                    key={post.node.frontmatter.path}
                    title={post.node.frontmatter.title}
                    type={post.node.frontmatter.type}
                    link={post.node.frontmatter.path}
                    image={
                      post.node.frontmatter.thumbnail.childImageSharp
                        .responsiveSizes.src
                    }
                  />
                );
              }
            })}
          </Container>
        </WhiteBackgroundWrapper>
        <OtherWrapper>
          <Container>
            <SectionHeader>Other Work</SectionHeader>
            <SectionDescription>
              See a complete list on my{" "}
              <a href="https://github.com/dankore">GitHub</a>
            </SectionDescription>
            <OtherWorkWrapper>
              <OtherWork
                name="Amal's Delight - Online Donut Shop"
                description="An e-commerse site for a client "
                tags={["Middleman Template", "Netlify CMS", "Ruby", "Ruby and Rails"]}
                link="https://amalsdelight.netlify.com"
              />
              <OtherWork
                name="A Calculator"
                description="A calculator that performs addition, subtraction, division and multiplication."
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://awesomecalculator.netlify.com"
              />
              <OtherWork
                name="A Custom Video Player"
                description="Video player with basic functions like forwarding/reversing, pausing, and more."
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://custom-videoplayer.netlify.com/"
              />
              <OtherWork
                name="A Weight Converter"
                description="Converts Pounds to Grams, Kilograms, & Ounce."
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://pounds-to.netlify.com/"
              />
              <OtherWork
                name="The Current Time in Iowa"
                description="Iowa (U.S.A) time in hours, minutes, and seconds. Also includes day of the week and current date."
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://timeiniowa.netlify.com"
              />
              <OtherWork
                name="My Old Personal Portfolio"
                description="A Personal portfolio site I had built using only HTML and CSS. It contains my other works too."
                tags={["HTML5", "CSS3"]}
                link="https://dankore-portfolio.netlify.com/"
              />
              <OtherWork
                name="A Technical Documentation Site"
                description="I put together definions of HTML, CSS, React, Node, and JavaScript from other sources, to design a technical document in a website format. This is part of freecodecamp.org course but customized."
                tags={["HTML5", "CSS3"]}
                link="https://dankore-technical-documentation-page.netlify.com"
              />
            </OtherWorkWrapper>
          </Container>
        </OtherWrapper>
         <WhiteBackgroundWrapper>
           <Container>
              <SectionHeader>About Me</SectionHeader>
              <p>
                I'm a software engineer who specialises in responsive web designs. Since November 2018, I have been 
                working part-time for my internet startup, HAFH, as a front-end developer, where I help with designs, 
                static pages, SEO, and marketing. <br>
                As the head of the marketing team, we helped grew the startup to more than 740* registered users, 4,000* 
                unique visits, and more than 500,000* SSL requests served since our beta in launch on May 22, 2019. <br>
                I'm also a self-taught developer.<br>

                <em>*As of August, 2019</em>
              </p>
           </Container>
         </WhiteBackgroundWrapper>

        <ContactBackgroundWrapper id="contact">
          <Container>
            <ContactSectionHeader>Contact</ContactSectionHeader>
            <ContactSectionDescription>
              Need a helping hand with a website? I would be happy to help. Get
              in touch!
            </ContactSectionDescription>
            <BlogPrompt />
          </Container>
        </ContactBackgroundWrapper>
      </div>
    );
  }
}

BlogIndex.propTypes = {
  ////PropTypes
  route: React.PropTypes.object
};

export default BlogIndex;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            type
            date(formatString: "DD MMMM, YYYY")
            thumbnail {
              childImageSharp {
                responsiveSizes(maxWidth: 600) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`;
