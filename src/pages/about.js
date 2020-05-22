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
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32. The standard chunk of Lorem Ipsum used since the
          1500s is reproduced below for those interested. Sections 1.10.32 and
          1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also
          reproduced in their exact original form, accompanied by English
          versions from the 1914 translation by H. Rackham
        </Paragraph>
      </Contained>
    </StyledSection>
    <Info />
    <Footer />
  </Layout>
)

export default About
