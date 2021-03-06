import React from "react"
import styled from "styled-components"

const TitleStyle = styled.h1`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 6.4rem;
  font-weight: 900;
  @media ${props => props.theme.mediaQueries.tablet} {
    font-size: 4.2rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 3.9rem;
  }
`

const Title = ({ title, primary }) => {
  return <TitleStyle primary={primary}>{title}</TitleStyle>
}
export default Title
