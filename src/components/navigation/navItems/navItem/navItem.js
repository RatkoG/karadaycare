// import React from "react"
// import styled from "styled-components"
// import { Link } from "react-scroll"

// const StyledLink = styled(Link)`
//   font-family: "Londrina Solid";
//   font-weight: 400;
//   color: ${({ mobile }) =>
//     mobile
//       ? props => props.theme.colors.white
//       : props => props.theme.colors.main};
//   color: ${props => props.theme.colors.headingMain};
//   text-decoration: none;
//   text-transform: uppercase;
//   cursor: pointer;
//   padding: 1rem 2rem;
//   font-size: ${({ mobile }) => (mobile ? "2.5rem" : "2rem")};
//   &:hover {
//     color: ${props => props.theme.colors.headingMain};
//   }
//   @media ${props => props.theme.mediaQueries.small} {
//     font-size: 1.3rem;
//   }
// `

// const NavItem = ({ link, clicked, mobile }) => {
//   return (
//     <StyledLink
//       // onClick={clicked}
//       to={`${link.split(" ").join("-").toLowerCase()}`}
//       smooth={true}
//       offset={-50}
//       mobile={mobile}
//     >
//       {link}
//     </StyledLink>
//   )
// }

// export default NavItem
