import React from "react"
import styled from "styled-components"
import { StyledSection, Contained } from "../components/layout/elements"
import Layout from "../components/layout/layout"

import Footer from "../components/footer/footer"
import Title from "../components/UI/Title"
import Fee from "../components/UI/fee"
import H2 from "../components/UI/h2"
import Home from "../sections/home"

const StyledContained = styled(Contained)`
  text-align: center;
  margin: 7rem auto;
  z-index: 10;
`
const SectionTitle = styled(StyledSection)`
  background: ${props => props.theme.colors.blueLight};
  margin-bottom: 5rem;
`

const FeesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 6rem;
`
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const Fees = () => (
  <Layout>
    <Home id="fees">
      <StyledContained>
        <Title title="We are providing subsidy" />
      </StyledContained>
    </Home>
    <StyledSection>
      <Contained>
        <H2 title="Fees" primary />
        <FeesWrapper>
          <Fee
            title="Infant"
            subtitle="2-18 months"
            price="&#36; 800"
            per="per month"
          />
          <Fee
            title="Toddler"
            subtitle="19 months - 3 years"
            price="&#36; 800"
            per="per month"
          />
          <Fee
            title="Preschool"
            subtitle="3-5 years"
            price="&#36; 700 "
            per="per month"
          />
          <Fee title="Kindergarten" price="&#36; 700" per="per month" />
          <Fee
            title="School Age"
            subtitle="All Ages"
            price="&#36; 700 "
            per="per month"
          />
          <Fee title="Part-time" price="&#36; 50" per="per day" />
          <Fee
            title="Hourly"
            price="&#36; 10"
            per="per hour (minimum 2 hours)"
          />
        </FeesWrapper>
      </Contained>
    </StyledSection>
    <Footer />
  </Layout>
)

export default Fees
