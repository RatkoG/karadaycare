import React from "react"
import styled from "styled-components"
import { StyledSection, Contained } from "../components/layout/elements"
import Features from "../components/features/features"

import Sun from "../images/sun.svg"
import Rocket from "../images/rocket.svg"

import Heading from "../components/UI/headingWrapper"
import H2 from "../components/UI/h2"
import H3 from "../components/UI/h3"

const Section = styled(StyledSection)``
const StyledSun = styled(Sun)`
  position: absolute;
  top: 0;
  left: 0;
  width: 18rem;
  height: 18rem;
`
const StyledRocket = styled(Rocket)`
  position: absolute;
  top: 0;
  right: 0;
  width: 18rem;
  height: 18rem;
`
const HeadingText = styled.h3`
  width: 47%;
  font-size: 1.6rem;
  color: ${props => props.theme.colors.text};
  margin: auto;
`

const Program = ({ text }) => {
  return (
    <Section>
      <Contained>
        <StyledSun />
        <StyledRocket />
        <Heading>
          <H3 title="Things for kids " />
          <H2 title="Our program " />
          <HeadingText>
            Flexible schedule ajusted accorgin to the children’s needs and
            interes. The number one goal is leadning.
          </HeadingText>
        </Heading>
        <Features></Features>
      </Contained>
    </Section>
  )
}

export default Program
