import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
// import Wave from "../images/wave.svg"

import { StyledSection, Contained } from "../components/layout/elements"

const StyledContainer = styled(Contained)`
  display: flex;
`

const StyledHome = styled(StyledSection)`
  height: 69rem;
  background: ${props => props.theme.colors.blueLight};
`
const Title = styled.h1`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 6.4rem;
  font-weight: 900;
  margin-bottom: 3rem;
`
const Subtitle = styled.h2`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 3.2rem;
`
const StyledTextSection = styled.div`
  text-align: center;
`
const StyledImageSection = styled.div`
  height: 3rem;
  background: red;
  width: 50%;
`

const StyledImg = styled(Img)`
  width: 80%;
  height: 100%;
`
// const StyledWave = styled(Wave)`
//   display: block;
// `

const ChildrenImg = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "children.png" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 400) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <StyledImg fluid={file.childImageSharp.fluid} />
}

// const StyledSection = styled
const Home = () => {
  return (
    <StyledHome id="home">
      <StyledContainer>
        <StyledTextSection>
          <Title>WELCOME TO KARA LICENCED DAYCARE</Title>
          <Subtitle>
            We provide SUBSTITY & high quality care and education to young
            children from 2 months trought 13 yearls old.
          </Subtitle>
        </StyledTextSection>
        <ChildrenImg />
      </StyledContainer>
    </StyledHome>
  )
}

export default Home
