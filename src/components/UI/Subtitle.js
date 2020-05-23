import React from "react"
import styled from "styled-components"

const TitleStyle = styled.h2`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 4.2rem;
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 3.9rem;
  }
`

const Subtitle = ({ title, primary }) => {
  return <TitleStyle primary={primary}>{title}</TitleStyle>
}
export default Subtitle
