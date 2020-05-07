import React, { useState, useEffect } from "react"

import styled from "styled-components"
import { Contained } from "../layout/elements"
import InfoNavbar from "../navigation/infoNavbar"
import Logo from "../UI/logo"
import NavItems from "../navigation/navItems/navItems"
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
  height: 7rem;
  overflow: inherit;
`
const StyledCloud = styled(CloudIcon)`
  position: absolute;
  left: -3rem;
`
const Navbar = () => {
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
        <InfoNavbar />
        <Wrapper>
          <StyledCloud />
          <Logo />
          <NavItems />
        </Wrapper>
      </Contained>
    </StyledHeader>
  )
}

export default Navbar
