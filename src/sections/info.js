import React from "react"
import styled from "styled-components"
import Logo from "../components/UI/logo"
import {
  StyledSection,
  Contained,
  Wrapper,
} from "../components/layout/elements"
// import InfoNavbar from "../components/navigation/infoNavbar"
import Boy from "../components/UI/boy"

import LocationIcon from "../images/location.svg"
import ClockIcon from "../images/clock.svg"
import MobileIcon from "../images/mobile.svg"
import EmailIcon from "../images/email.svg"

const StyledTest = styled.a`
  text-decoration: none;
  color: ${props => props.theme.colors.headingMain};
  &:first-child {
    z-index: 10;
  }
`
const StylerP = styled.p`
  display: inline;
  color: ${props => props.theme.colors.headingMain};
`

const Section = styled(StyledSection)`
  margin-top: auto;
`
const StyledContained = styled(Contained)`
  margin: 5rem auto;
  text-align: center;
`

const InfoSection = styled.div`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  & a,
  p {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    margin-right: 0.5rem;
  }
`

const Title = styled.h1`
  color: ${props => props.theme.colors.green};
  font-family: "Londrina Solid";
  font-size: 6.4rem;
  margin: 2rem 0;
  @media ${props => props.theme.mediaQueries.smaller} {
    font-size: 3.9rem;
  }
`

const Info = () => {
  return (
    <Section>
      <StyledContained>
        <Logo />
        <Title>Family Daycare</Title>
        <InfoSection>
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
          <StyledTest href={"mailto:karafdc@gmail.com"}>
            <EmailIcon />
            karafdc@gmail.com
          </StyledTest>
          <StylerP>
            <ClockIcon />
            Mon to Fri - 7:30am to 5:30pm
          </StylerP>
        </InfoSection>
        <Boy />
      </StyledContained>
    </Section>
  )
}

export default Info
