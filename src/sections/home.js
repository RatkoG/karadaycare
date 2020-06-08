import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

import { StyledSection, Contained } from "../components/layout/elements"
import CloudIcon from "../images/cloud.svg"
const StyledContainer = styled(Contained)`
  display: flex;
  justify-content: space-evenly;
  z-index: 8;
`

const StyledHome = styled(StyledSection)`
  /* min-height: ${props => (props.primary ? "95vh" : " 60vh")}; */
  min-height: 80rem;
  background: ${props => props.theme.colors.blueLight};
  & > svg {
    position: absolute;
    bottom: 0;
    width: 100%;
    fill: white;
  }
`

const StyledImg = styled(Img)`
  width: 80%;
  height: 100%;
`

// const StyledCloud = styled(CloudIcon)`
//   position: absolute;
//   opacity: 0.7;
// `
const CloudBox = styled.div`
  position: absolute;
  width: 40rem;
  /* height: 20rem; */

  & svg {
    width: 100%;
    height: 100%;
    opacity: 0.6;
  }
`

const CloudOne = styled(CloudBox)`
  top: 10rem;
  left: 20rem;
  @media ${props => props.theme.mediaQueries.large} {
    left: 10rem;
  }
  /* @media ${props => props.theme.mediaQueries.medium} {
    left: -3rem;
  } */
`
const CloudTwo = styled(CloudBox)`
  top: 6rem;
  right: 3rem;
  /* @media ${props => props.theme.mediaQueries.medium} {
    right: -16rem;
  } */
`
const CloudThree = styled(CloudBox)`
  bottom: 9rem;
  right: 16rem;
  /* @media ${props => props.theme.mediaQueries.medium} {
    right: -10rem;
  } */
`
const CloudFour = styled(CloudBox)`
  bottom: 2rem;
  left: 13rem;
  /* @media ${props => props.theme.mediaQueries.medium} {
    left: -6rem;
  } */
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
      <CloudOne>
        <CloudIcon />
      </CloudOne>
      <CloudTwo>
        <CloudIcon />
      </CloudTwo>
      <CloudThree>
        <CloudIcon />
      </CloudThree>
      <CloudFour>
        <CloudIcon />
      </CloudFour>

      <WaveBox>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 150">
          <path
            fillOpacity="1"
            d="M0,64L80,80C160,96,320,128,480,122.7C640,117,800,75,960,58.7C1120,43,1280,53,1360,58.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </WaveBox>
    </StyledHome>
  )
}

export default Home
