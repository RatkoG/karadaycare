import React from "react"
import styled from "styled-components"

import LocationIcon from "../../images/location.svg"
import ClockIcon from "../../images/clock.svg"
import MobileIcon from "../../images/mobile.svg"

const InfoSection = styled.div`
  background: ${props => props.theme.colors.blueLight};
  font-size: 2rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    z-index: 10;
    margin-right: auto;
  }
`
const StylerP = styled.p`
  display: inline;
  margin-left: 1.5rem;
  color: ${props => props.theme.colors.headingMain};
`

const InfoNavbar = () => (
  <InfoSection>
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
  </InfoSection>
)

export default InfoNavbar
