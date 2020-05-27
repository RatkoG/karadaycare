import React from "react"
import styled from "styled-components"

import LocationIcon from "../../images/location.svg"
import ClockIcon from "../../images/clock.svg"
import MobileIcon from "../../images/mobile.svg"

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
  <>
    <StyledTest
      href={
        "https://www.google.com/maps/place/1619+Acadia+Dr,+Saskatoon,+SK+S7H+5K7/@52.10612,-106.598212,18z/data=!4m5!3m4!1s0x5304f160b689ea41:0xc6dad17b28d38a99!8m2!3d52.105969!4d-106.5987159?hl=en"
      }
      target="_blank"
    >
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
  </>
)

export default InfoNavbar
