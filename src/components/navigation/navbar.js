import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { Contained } from "../layout/elements"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import InfoNavbar from "../navigation/infoNavbar"
import Logo from "../UI/logo"
import DesktopMenu from "./desktopMenu"
import MobileMenu from "./mobileMenu/mobileMenu"

import CloudIcon from "../../images/cloud.svg"

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  max-width: 100vw;
  top: 0px;
  left: 0px;
  z-index: 20;
  background: ${props => props.theme.colors.blueLight};
`
const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow-x: hidden;
  justify-content: space-between;
  height: ${({ Mobile }) => (Mobile ? "6rem" : "7rem")};
  overflow: inherit;
`
const StyledCloud = styled(CloudIcon)`
  position: absolute;
  left: -3rem;
`

const InfoSection = styled.div`
  font-size: 2rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${props => props.theme.mediaQueries.large} {
    font-size: 1.9rem;
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1.2rem;
  }

  & svg {
    fill: currentColor;
    width: 1em;
    height: 1em;
    margin-right: 0.5rem;
  }
`
const Navbar = ({ noShowOnPage }) => {
  const [Mobile, setMobile] = useState(false)

  const changeMobile = () => {
    window.matchMedia("(max-width:37.5em)").matches
      ? setMobile(true)
      : setMobile(false)
  }
  useEffect(() => {
    changeMobile()
    window.addEventListener("resize", changeMobile)
    return () => window.removeEventListener("resize", changeMobile)
  }, [])
  return (
    <StyledHeader>
      <Contained>
        {Mobile ? null : (
          <InfoSection>
            <InfoNavbar />
          </InfoSection>
        )}

        <Wrapper Mobile={Mobile}>
          <StyledCloud />
          <AnchorLink to="/#home">
            <Logo />
          </AnchorLink>
          {Mobile ? (
            <MobileMenu />
          ) : (
            <DesktopMenu noShowOnPage={noShowOnPage} />
          )}
        </Wrapper>
      </Contained>
    </StyledHeader>
  )
}

export default Navbar
