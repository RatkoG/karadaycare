import React from "react"
import styled from "styled-components"

const StyledH3 = styled.h3`
  font-family: "Londrina Solid";
  color: ${props => props.theme.colors.pink};
  font-size: 1.4rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const H3 = ({ title, primary }) => {
  return <StyledH3 primary={primary}>{title}</StyledH3>
}
export default H3
