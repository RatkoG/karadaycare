import React from "react"
import styled from "styled-components"
import { StyledSection, Contained } from "../components/layout/elements"
import Icon from "../components/UI/icon"
import HouseSvg from "../images/house.svg"
import AbacusSvg from "../images/abacus.svg"
import ListSvg from "../images/list.svg"
import PlaySvg from "../images/playground.svg"

const StyledContained = styled(Contained)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 5rem auto;
`

const Icons = () => {
  return (
    <StyledSection>
      <StyledContained>
        <Icon icon={HouseSvg()} text="Happy Place" />
        <Icon icon={AbacusSvg()} text="Active Learning" />
        <Icon icon={ListSvg()} text="Nutritious Food" />
        <Icon icon={PlaySvg()} text="Great Playground" />
      </StyledContained>
    </StyledSection>
  )
}

export default Icons
