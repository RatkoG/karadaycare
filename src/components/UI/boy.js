import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledImage = styled(Img)`
  width: 30rem;
  height: auto;
  bottom: -5rem;
  right: 6rem;
  overflow: hidden;
  /* @media ${props => props.theme.mediaQueries.large} {
    width: 20rem;
  }
  @media ${props => props.theme.mediaQueries.small} {
    display: none;
  } */
`

const Boy = () => {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "kidthumbsup.png" }) {
        childImageSharp {
          fluid(maxWidth: 350, maxHeight: 400) {
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

export default Boy
