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
  z-index: 3;
`

const StyledHome = styled(StyledSection)`
  min-height: ${props => (props.primary ? "75vh" : " 40vh")};
  background: ${props => props.theme.colors.blueLight};
  & > svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    fill: white;
  }
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

const StyledCloud = styled(CloudIcon)`
  position: absolute;
  opacity: 0.7;
`

const CloudOne = styled(StyledCloud)`
  top: 0;
  left: 40rem;
  @media ${props => props.theme.mediaQueries.large} {
    left: 10rem;
  }
  /* @media ${props => props.theme.mediaQueries.medium} {
    left: -3rem;
  } */
`
const CloudTwo = styled(StyledCloud)`
  top: 6rem;
  right: 3rem;
  /* @media ${props => props.theme.mediaQueries.medium} {
    right: -16rem;
  } */
`
const CloudThree = styled(StyledCloud)`
  bottom: 9rem;
  right: 16rem;
  /* @media ${props => props.theme.mediaQueries.medium} {
    right: -10rem;
  } */
`
const CloudFour = styled(StyledCloud)`
  bottom: 2rem;
  left: 13rem;
  /* @media ${props => props.theme.mediaQueries.medium} {
    left: -6rem;
  } */
`
const CloudBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`

const WaveBox = styled.div`
  position: absolute;
  bottom: -2px;
  width: 100%;
  fill: white;
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

const Home = ({ children, primary }) => {
  return (
    <StyledHome id="home" primary={primary}>
      <StyledContainer>{children}</StyledContainer>
      <CloudBox>
        <CloudOne />
      </CloudBox>
      <CloudBox>
        <CloudTwo />
      </CloudBox>
      <CloudBox>
        <CloudThree />
      </CloudBox>
      <CloudBox>
        <CloudFour />
      </CloudBox>
      <WaveBox>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path
            fill-opacity="1"
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </WaveBox>
    </StyledHome>
  )
}

export default Home
