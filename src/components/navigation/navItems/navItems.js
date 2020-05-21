import React from "react"
import styled from "styled-components"
// import { Link } from "react-scroll"
import { Link } from "gatsby"
// if (typeof window !== "undefined") {
//   // eslint-disable-next-line global-require
//   require("smooth-scroll")('a[href*="#"]')
// }
import { AnchorLink } from "gatsby-plugin-anchor-links"
const LINKS = ["Home", "About us", "Program", "Fees", "Contact"]

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
  justify-content: center;
  list-style: none;
  margin: 0;
`

const NavLi = styled.li`
  font-family: "Londrina Solid";
  font-weight: 400;
  color: ${({ mobile }) =>
    mobile
      ? props => props.theme.colors.white
      : props => props.theme.colors.main};
  color: ${props => props.theme.colors.headingMain};
  text-transform: uppercase;
  cursor: pointer;
  padding: 1rem 2rem;
  font-size: ${({ mobile }) => (mobile ? "2.5rem" : "2rem")};
  &:hover {
    color: ${props => props.theme.colors.headingMain};
  }
  & > a {
    text-decoration: none;
  }
`

const NavItems = ({ mobile, clicked }) => {
  return (
    <StyledNav mobile={mobile}>
      <NavUl>
        <NavLi>
          <AnchorLink to="/#home" stripHash>
            Home
          </AnchorLink>
        </NavLi>
        <NavLi>
          <AnchorLink to="/about">About Us</AnchorLink>
        </NavLi>
        <NavLi>
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
