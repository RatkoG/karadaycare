import React from "react"
import styled from "styled-components"
import {
  StyledSection,
  Contained,
  Wrapper,
} from "../components/layout/elements"
import Heading from "../components/UI/headingWrapper"
import H2 from "../components/UI/h2"
import Certificates from "../components/UI/certifications"
import Stamp from "../images/stamp.svg"

const Section = styled(StyledSection)`
  background-color: ${props => props.theme.colors.orange};
`
const StyledContained = styled(Contained)`
  margin: 5rem auto;
`

const StyledStamp = styled(Stamp)`
  position: absolute;
  top: 0;
  right: 0;
  width: 15rem;
  height: 15rem;
`

const Certified = () => {
  return (
    <Section>
      <StyledContained>
        <Heading>
          <H2 title="We are certified" primary={false} />
        </Heading>
        <Certificates />
        <StyledStamp />
      </StyledContained>
    </Section>
  )
}

export default Certified
