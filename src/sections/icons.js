import React from "react"
import styled from "styled-components"
import { StyledSection, Contained } from "../components/layout/elements"

import HouseSvg from "../images/house.svg"
import AbacusSvg from "../images/abacus.svg"
import ListSvg from "../images/list.svg"
import PlaySvg from "../images/playground.svg"

const StyledContained = styled(Contained)`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 34rem;
  /* align-content: space-around; */
`
const H3 = styled.h3`
  color: ${props => props.theme.colors.orange};
  font-size: 3.2rem;
  font-family: "Londrina Solid";
  font-weight: 400;
  @media ${props => props.theme.mediaQueries.medium} {
   font-size:2.4rem;
  }
  /* @media ${props => props.theme.mediaQueries.medium} {
    font-size: 2.7rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    font-size: 2.4rem;
  } */
`
const Icon = styled.div`
  width: 13rem;
  height: 13rem;
  margin-bottom: 2rem;
  /* /* @media ${props => props.theme.mediaQueries.large} {
    width: 10rem;
    height: 10rem;
  } */
  @media ${props => props.theme.mediaQueries.medium} {
    width: 8rem;
    height: 8rem;
  }
  & svg {
    width: 100%;
    height: auto;
  }
`
const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;

  @media ${props => props.theme.mediaQueries.smaller} {
    width: 50%;
  }
`

const Icons = () => {
  return (
    <StyledSection>
      <StyledContained>
        <Box>
          <Icon>
            <HouseSvg />
          </Icon>
          <H3>Happy Place</H3>
        </Box>
        <Box>
          <Icon>
            <AbacusSvg />
          </Icon>
          <H3>Active Learning</H3>
        </Box>
        <Box>
          <Icon>
            <ListSvg />
          </Icon>
          <H3>Nutritious Food</H3>
        </Box>
        <Box>
          <Icon>
            <PlaySvg />
          </Icon>
          <H3>Great Playground</H3>
        </Box>
      </StyledContained>
    </StyledSection>
  )
}

export default Icons
