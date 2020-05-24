import React from "react"
import styled from "styled-components"
import { StyledSection, Contained } from "../components/layout/elements"
// import Pattern from "../images/pattern.svg"
import Pattern from "../images/patternTest.png"
import Images from "../components/UI/images"

const Section = styled(StyledSection)`
background-image:  linear-gradient(to right, ${props =>
  props.theme.colors.whiteWhySection},${props =>
  props.theme.colors.whiteWhySection}),url(${Pattern});
  /* background-image: url(${Pattern});
  background-color: ${props => props.theme.colors.whiteIsh}; */
  /* opacity: 8; */

`
const StyledContained = styled(Contained)`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;
  @media ${props => props.theme.mediaQueries.tablet} {
    flex-direction: column-reverse;

  }
  /* @media ${props => props.theme.mediaQueries.tablet} {
    align-items: center;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    justify-content: center;
  } */
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  @media ${props => props.theme.mediaQueries.largest} {
    width: 60%;
  }
  @media ${props => props.theme.mediaQueries.tablet} {
    width: 100%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 100%;
  }
`

const H1 = styled.h2`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 4.8rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 6rem;
  /* @media ${props => props.theme.mediaQueries.small} {
    font-size: 4.5rem;
    margin-bottom: 3rem;
  } */
  /* @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 3rem;
  } */
`
const Paragraph = styled.p`
  text-align: center;
  background-color: ${props => props.theme.colors.whiteIsh};
  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
  line-height: 2;
  padding: 1rem;
  /* @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 1.3rem;
  } */
`

const WhyUs = () => {
  return (
    <Section>
      <StyledContained>
        <Images />
        <Content>
          <H1>We Belive We Are Unique</H1>
          <Paragraph>
            We are committed to creating a safe, warm, loving environment for
            children where they can learn and grow physically, emotionally,
            creatively, intellectually, and socially at their own pace. We want
            to help your child increase their confidence, and self esteem by
            treating them as unique individuals, and allowing them to express
            themselves in a variety of facets. We strive to make your child’s
            time at daycare the best experience it can be for them as well as
            you, the parents. We will help children to obtain new knowledge to
            socialize easily. Our role is to provide interesting, play-based
            indoor and outdoor experiences with high level of responsibilities
            for each child. I believe that children’s family is the first and
            the most important environment for nurturing them.
          </Paragraph>
        </Content>
      </StyledContained>
    </Section>
  )
}

export default WhyUs
