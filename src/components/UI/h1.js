import React from "react"
import styled from "styled-components"

const StyledH1 = styled.h1`
  font-family: "Londrina Solid";
  /* color: ${props => props.theme.colors.headingMain}; */
  color: ${props => (props.primary ? props.theme.colors.headingMain : "white")};
  font-size: 4.8rem;
  font-weight: 400;
  text-transform: uppercase;
  margin-bottom: 1rem;
`

const H1 = ({ title, primary }) => {
  return <StyledH1 primary={primary}>{title}</StyledH1>
}
export default H1
