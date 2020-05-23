import React from "react"
import styled from "styled-components"
const StyledP = styled.p`
  text-align: center;
  font-size: 2.4rem;
  color: white;
  font-style: italic;
  /* @media ${props => props.theme.mediaQueries.largest} {
    width: 40%;
  } */
`

const Certificate = ({ text }) => {
  return <StyledP>{text}</StyledP>
}
export default Certificate
