import React from "react"
import styled from "styled-components"
// import { Link } from "react-scroll"
// import { Link } from "gatsby"
// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }
import { AnchorLink } from "gatsby-plugin-anchor-links"

const StyledNav = styled.nav`
  display: flex;
  overflow: hidden;
  flex: 1;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  justify-content: ${({ mobile }) => (mobile ? "center" : "flex-end")};
  align-items: center;
`

const NavUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${({ mobile }) => (mobile ? "column" : "row")};
  justify-content: ${({ mobile }) => (mobile ? "center" : "flex-end")};
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

const NavLi = styled.li`
  font-family: "Londrina Solid";
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem 2rem;

  font-size: 2.5rem;
  & > a {
    text-decoration: none;
    color: ${({ mobile }) =>
      mobile
        ? props => props.theme.colors.white
        : props => props.theme.colors.headingMain};
    &:hover {
      color: ${props => props.theme.colors.white};
    }
  }

  @media ${props => props.theme.mediaQueries.medium} {
    padding: 1rem 1.1rem;
    font-size: 1.8rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 2.5rem;
  }
`

const NavItems = ({ mobile, clicked }) => {
  const clickEvent = e => {
    console.log(e.target, e.currentTarget)
    if (e.currentTarget) {
      // swmenuOpened: false
    }
  }
  return (
    <StyledNav mobile={mobile}>
      <NavUl mobile={mobile}>
        <NavLi onClick={clicked}>
          <AnchorLink to="/#home" stripHash>
            Home
          </AnchorLink>
        </NavLi>
        <NavLi>
          <AnchorLink to="/about">About Us</AnchorLink>
        </NavLi>
        <NavLi onClick={clicked}>
          <AnchorLink to="/#program" stripHash>
            Program
          </AnchorLink>
        </NavLi>
        <NavLi>
          <AnchorLink to="/fees">Fees</AnchorLink>
        </NavLi>
        <NavLi>
          <AnchorLink to="/contact">Contact</AnchorLink>
        </NavLi>
      </NavUl>
    </StyledNav>
  )
}

export default NavItems
