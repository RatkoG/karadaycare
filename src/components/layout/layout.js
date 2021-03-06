import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "styled-components"
import styled from "styled-components"

import GlobalStyles from "../../utils/global"
import theme from "../../utils/theme"
import SEO from "../utils/seo"
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
  display: flex;
  flex-direction: column;
  flex: 1;
`

const Layout = ({ noShowOnPage, children, Mobile }) => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <SEO />
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
