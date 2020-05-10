import React from "react"
import styled from "styled-components"
import { StyledSection, Contained } from "../components/layout/elements"
import Heading from "../components/UI/headingWrapper"
import H2 from "../components/UI/h2"

const Section = styled(StyledSection)`
  background-color: ${props => props.theme.colors.orange};
`
const StyledContained = styled(Contained)`
  margin: 5rem auto;
`

const Certified = () => {
  return (
    <Section>
      <StyledContained>
        <Heading>
          <H2 title="We are certified" primary={false} />
        </Heading>
      </StyledContained>
    </Section>
  )
}

export default Certified
