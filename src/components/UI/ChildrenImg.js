import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImg = styled(Img)`
  width: 50rem;
  height: 100%;
  align-self: center;

  /* @media ${props => props.theme.mediaQueries.medium} {
    width: 32rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  } */
`
const ChildrenImg = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "children.png" }) {
        childImageSharp {
          fluid(quality: 80, maxHeight: 300) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return <StyledImg fluid={file.childImageSharp.fluid} />
}

export default ChildrenImg
