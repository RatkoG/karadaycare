import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { StyledSection, Contained } from "../components/layout/elements"
import CloudIcon from "../images/cloud.svg"
import Title from "../components/UI/Title"
const StyledContainer = styled(Contained)`
  display: flex;
  justify-content: space-evenly;
`

const StyledHome = styled(StyledSection)`
  height: 69rem;
  background: ${props => props.theme.colors.blueLight};
  & > svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    fill: white;
  }
`
// const Title = styled.h1`
//   color: ${props => props.theme.colors.headingMain};
//   font-family: "Londrina Solid";
//   font-size: 6.4rem;
//   font-weight: 900;
//   margin-bottom: 3rem;
// `
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

const StyledCloud = styled(CloudIcon)`
  position: absolute;
  opacity: 0.7;
`

const CloudOne = styled(StyledCloud)`
  top: 0;
  left: 0;
`
const CloudTwo = styled(StyledCloud)`
  top: 22px;
  right: -46rem;
`
const CloudThree = styled(StyledCloud)`
  bottom: 9rem;
  left: -40rem;
`
const CloudFour = styled(StyledCloud)`
  height: 8.5rem;
  bottom: 12rem;
  right: -43rem;
`
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
const Home = ({ children }) => {
  return (
    <StyledHome id="home">
      <StyledContainer>
        {/* <Title>WELCOME TO KARA LICENCED DAYCARE</Title> */}
        {/* <Title title="Welcome Kids" />
          <Subtitle>
            We provide SUBSTITY & high quality care and education to young
            children from 2 months trought 13 yearls old.
          </Subtitle> */}
        {children}

        {/* <ChildrenImg /> */}
      </StyledContainer>
      <CloudOne />
      <CloudTwo />
      <CloudThree />
      <CloudFour />
      <>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path
            fill-opacity="1"
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </>
    </StyledHome>
  )
}

export default Home
