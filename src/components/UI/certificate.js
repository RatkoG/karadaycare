import React from "react"
import styled from "styled-components"
const StyledP = styled.p`
  font-size: 2.4rem;
  color: white;
  font-style: italic;
`

const Certificate = ({ text }) => {
  return <StyledP>{text}</StyledP>
}
export default Certificate
