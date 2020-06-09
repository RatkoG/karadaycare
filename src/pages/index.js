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

import Title from "../components/UI/Title"
import Subtitle from "../components/UI/Subtitle"
import ChildrenImg from "../components/UI/ChildrenImg"

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
`
const StyledP = styled.p`
  color: ${props => props.theme.colors.headingMain};
  font-size: 3.2rem;
  margin-bottom: 2rem;
  @media ${props => props.theme.mediaQueries.tablet} {
    font-size: 2.2rem;
  }
`

const IndexPage = () => (
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
  </Layout>
)

export default IndexPage
