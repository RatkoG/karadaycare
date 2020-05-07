import React from "react"
import styled from "styled-components"

import {
  StyledSection,
  Contained,
  Wrapper,
} from "../components/layout/elements"

const StyledHome = styled(StyledSection)`
  background: ${props => props.theme.colors.blueLight};
`

// const StyledSection = styled
const Home = () => {
  return <StyledHome fullHeight>HOME SECTION</StyledHome>
}

export default Home
