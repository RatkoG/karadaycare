import React from "react"
import styled from "styled-components"
import { StyledSection, Contained } from "../components/layout/elements"
// import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Title from "../components/UI/Title"
import Home from "../sections/home"
import Info from "../sections/info"
import Footer from "../components/footer/footer"
// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"
const StyledContained = styled(Contained)`
  text-align: center;
  margin: 7rem auto;
`

const Contact = () => (
  <Layout>
    <Home>
      <StyledContained>
        <Title title="Contact Us" />
      </StyledContained>
    </Home>
    <StyledSection>
      <iFrame
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.5583470509396!2d-106.60090458420794!3d52.10596897973793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f160b689ea41%3A0xc6dad17b28d38a99!2s1619%20Acadia%20Dr%2C%20Saskatoon%2C%20SK%20S7H%205K7!5e0!3m2!1sen!2sca!4v1590163632492!5m2!1sen!2sca"
        width="100%"
        height="500"
      ></iFrame>
    </StyledSection>
    <Info />
    <Footer />
  </Layout>
)

export default Contact
