import React from "react"
import styled from "styled-components"

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
`

const H3 = styled.h3`
  color: ${props => props.theme.colors.orange};
  font-size: 3.2rem;
  font-family: "Londrina Solid";
  font-weight: 400;
`
const IconSvg = styled.div`
  width: 13rem;
  height: 13rem;
  & > svg {
    width: 100%;
  }
`
const Icon = props => {
  return (
    <IconBox>
      <IconSvg>{props.icon}</IconSvg>
      <H3>{props.text}</H3>
    </IconBox>
  )
}

export default Icon
