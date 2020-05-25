import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Home from "../sections/home"
import Icons from "../sections/icons"
import WhyUs from "../sections/whyus"
import Program from "../sections/program"
import Certified from "../sections/certified"
import Info from "../sections/info"
import Footer from "../components/footer/footer"
// import Title from "../components/UI/Title"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

import Title from "../components/UI/Title"
import Subtitle from "../components/UI/Subtitle"
import ChildrenImg from "../components/UI/ChildrenImg"

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const StyledP = styled.p`
  color: ${props => props.theme.colors.headingMain};
  font-size: 3.2rem;

  @media ${props => props.theme.mediaQueries.medium} {

  @media ${props => props.theme.mediaQueries.tablet} {
    font-size: 2.2rem;

  }
`

const IndexPage = ({ primary }) => (
  <Layout>
    <Home primary>
      <TextWrapper>
        <Title title="Welcome Kids" />
        <StyledP>2 months - 13 years</StyledP>
        <Subtitle title="Our Location" />
        <StyledP>Saskatoon, EAST Side</StyledP>
        <Subtitle title="Operation Hours" />
        <StyledP>Mon to Fri - 7:30am to 5:30pm</StyledP>
      </TextWrapper>
      <ChildrenImg />
    </Home>
    <Icons />
    <WhyUs />
    <Program />
    <Certified />
    <Info />
    <Footer />
    {/* <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
