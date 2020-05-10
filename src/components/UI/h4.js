import React from "react"
import styled from "styled-components"

const StyledH4 = styled.h4`
  color: ${props => props.theme.colors.headingMain};
  font-size: 2rem;
  font-weight: 400;
  text-transform: uppercase;
`

const H4 = ({ title, primary }) => {
  return <StyledH4 primary={primary}>{title}</StyledH4>
}
export default H4
