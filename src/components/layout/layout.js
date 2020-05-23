import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import GlobalStyles from "../../utils/global"
import theme from "../../utils/theme"
import Contained from "./elements"
import Navbar from "../navigation/navbar"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  width: 100%;
`

const StyledMain = styled.main`
/* TESTING IS NOT WORKING NOW */
  /* margin-top: ${({ Mobile }) => (Mobile ? "6rem" : "12rem")}; */
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Layout = ({ noShowOnPage, children, Mobile }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Navbar noShowOnPage={noShowOnPage} Mobile={Mobile} />
      <StyledMain Mobile>{children}</StyledMain>
      <GlobalStyles />
    </Wrapper>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
