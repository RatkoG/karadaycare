import React from "react"
import styled from "styled-components"

const StyledH2 = styled.h2`
  font-family: "Londrina Solid";
  color: ${props => props.theme.colors.headingMain};
  font-size: 4.8rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 1rem;
`

const H2 = ({ title, primary }) => {
  return <StyledH2 primary={primary}>{title}</StyledH2>
}
export default H2