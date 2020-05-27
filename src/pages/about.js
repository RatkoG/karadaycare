import React from "react"
// import { Link } from "gatsby"
import { StyledSection, Contained } from "../components/layout/elements"
import styled from "styled-components"
import Layout from "../components/layout/layout"
import Home from "../sections/home"
import Title from "../components/UI/Title"
import Info from "../sections/info"
import Footer from "../components/footer/footer"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const StyledContained = styled(Contained)`
  text-align: center;
  margin: 7rem auto;
`
const Paragraph = styled.p`
  text-align: center;
  color: ${props => props.theme.colors.text};
  font-size: 1.6rem;
  line-height: 1.6;
  padding: 1rem;
  margin: auto;
  width: 70%;
  @media ${props => props.theme.mediaQueries.small} {
    width: 90%;
  }
`
const About = () => (
  <Layout>
    <Home>
      <StyledContained>
        <Title title="About us" />
      </StyledContained>
    </Home>
    <StyledSection>
      <Contained>
        <Paragraph>
          We proudly like to share with you that we have over 20 years of
          experience working with and educating kids.
        </Paragraph>
        <Paragraph>
          With our experience and Master's Degrees of Mathematics and Psychology
          and many other Certificates, we have designed a program that benefits
          your children to grow as students and people, in school, and life
          beyond.
        </Paragraph>
        <Paragraph>
          We are a Licenced Family Child Care Home through the Saskatchewan
          Ministry of Education.
        </Paragraph>
        <Paragraph>
          We are committed to supporting families by maintaining open
          communication and encourage parental involvement in our programming
          and care activities. Our objective is to care for your child the same
          way you would.
        </Paragraph>
        <Paragraph>
          We are providing a PET-FREE and SMOKE-FREE environment.
        </Paragraph>
      </Contained>
    </StyledSection>
    <Info />
    <Footer />
  </Layout>
)

export default About
