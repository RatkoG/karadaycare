import React from "react"
import styled from "styled-components"
import { StyledSection, Contained, Wrapper } from "../layout/elements"
import LocationIcon from "../../images/location.svg"
import ClockIcon from "../../images/clock.svg"
import MobileIcon from "../../images/mobile.svg"

const ColorSection = styled(StyledSection)`
  background: ${props => props.theme.colors.blueLight};
  font-size: 2rem;
  height: 5rem;
`
const FlexContained = styled(Contained)`
  display: flex;
  justify-content: space-between;

  & svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    margin-right: 0.5rem;
  }
`
const StyledTest = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.headingMain};
  &:first-child {
    flex-grow: 1;
  }
`
const StylerP = styled.p`
  display: inline;
  margin-left: 1.5rem;
  color: ${props => props.theme.colors.headingMain};
`

const InfoNavbar = () => (
  <ColorSection>
    <FlexContained>
      <StyledTest href={"#"}>
        <LocationIcon />
        1619 Acadia Drive, Saskatoon, SK, S7H 5K7
      </StyledTest>
      <StyledTest href={"tel:6399989330"}>
        <MobileIcon />
        639 998 9330
      </StyledTest>
      <StylerP>
        <ClockIcon />
        Mon to Fri - 7:30am to 5:30pm
      </StylerP>
    </FlexContained>
  </ColorSection>
)

export default InfoNavbar
