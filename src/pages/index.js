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
              To see a complete list, visit my{" "}
              <a href="https://github.com/dankore">GitHub</a>
            </SectionDescription>
            <OtherWorkWrapper>
              <OtherWork
                name="Calculator"
                description="A Simple calculator that performs basic arithmetics"
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://awesomecalculator.netlify.com"
              />
              <OtherWork
                name="Custom Video Player"
                description="Video player with basic functions like forwarding/reversing, pause, and more"
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://custom-videoplayer.netlify.com/"
              />
              <OtherWork
                name="Canvas"
                description="Canvas"
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://canvas-drawing.netlify.com"
              />
              <OtherWork
                name="Time in Iowa"
                description="Iowa (U.S.A) time in hours, minutes, and seconds. Also includes day of the week and date"
                tags={["JavaScript", "HTML5", "CSS3"]}
                link="https://timeiniowa.netlify.com"
              />
              <OtherWork
                name="Personal Portfolio"
                description="Personal portfolio site I had built using only HTML and CSS. It contains my other works"
                tags={["HTML5", "CSS3"]}
                link="https://dankore-portfolio.netlify.com/#welcome-section"
              />
              <OtherWork
                name="Technical Documentation Site"
                description="Put other lessons about HTML, CSS, React, Node, and JavaScript from other sources, to design a technical document in a website format."
                tags={["HTML5", "CSS3"]}
                link="https://dankore-technical-documentation-page.netlify.com"
              />
            </OtherWorkWrapper>
          </Container>
        </OtherWrapper>
        <ContactBackgroundWrapper id="contact">
          <Container>
            <SectionHeader>Contact</SectionHeader>
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
