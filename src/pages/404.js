import React from "react"
import styled from "styled-components"
import Layout from "../components/layout/layout.js"
// import SEO from "../components/seo"

import { StyledSection, Contained } from "../components/layout/elements"

const Section = styled(StyledSection)`
  background-color: ${props => props.theme.colors.blueLight};
  flex-direction: column;
`
const H1 = styled.h1`
  color: ${props => props.theme.colors.orange};
  font-size: 6.4rem;
  margin-bottom: 2rem;
`
const StyledP = styled.p`
  color: ${props => props.theme.colors.headingMain};
  font-size: 3.4rem;
`
const NotFoundPage = () => (
  <Layout>
    {/* <SEO title="404: Not found" /> */}
    <Section fullHeight>
      <H1>NOT FOUND</H1>
      <StyledP>
        You just hit a route that doesn&#39;t exist... the sadness.
      </StyledP>
    </Section>
  </Layout>
)

export default NotFoundPage
