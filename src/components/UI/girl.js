import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  width: 19rem;
  height: 30rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  overflow: hidden;
  /* @media ${props => props.theme.mediaQueries.medium} {
    display: none;
  } */
`

const Girl = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "girl.png" }) {
        childImageSharp {
          fluid(maxWidth: 250, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <StyledImage
      fluid={data.file.childImageSharp.fluid}
      style={{ position: "absolute" }}
    />
  )
}

export default Girl
