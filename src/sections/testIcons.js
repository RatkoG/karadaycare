import React from "react"

import styled from "styled-components"
import GitHub from "../images/learning.svg"
import LinkedIn from "../images/nap.svg"
import Twitter from "../images/education.svg"
import Instagram from "../images/meal.svg"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 7rem;
`
const StyledSvg = styled.a`
  border: 0.2rem solid ${props => props.theme.colors.orange};
  border-radius: 50%;
  margin: 0 1.5rem;
  width: 7rem;
  height: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s ease-out;
  & svg {
    width: 2.5rem;
    fill: ${props => props.theme.colors.text};
  }
  &:hover {
    background: ${props => props.theme.colors.text};
    svg {
      fill: white;
    }
  }
`

const TestingIcons = () => {
  return (
    <StyledWrapper>
      <StyledSvg target="_blank" aria-label="Github">
        <GitHub />
      </StyledSvg>
      <StyledSvg target="_blank" aria-label="Linkedin">
        <LinkedIn />
      </StyledSvg>
      <StyledSvg target="_blank" aria-label="Instagram">
        <Instagram />
      </StyledSvg>
      <StyledSvg target="_blank" aria-label="Twitter">
        <Twitter />
      </StyledSvg>
    </StyledWrapper>
  )
}
export default TestingIcons
