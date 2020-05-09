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
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
`

const H1 = styled.h2`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 4.8rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 6rem;
`
const Paragraph = styled.p`
  text-align: center;
  background-color: ${props => props.theme.colors.whiteIsh};
  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
  line-height: 1.6;
  padding: 1rem;
`

const WhyUs = () => {
  return (
    <Section>
      {/* <Pattern /> */}
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
