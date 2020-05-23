import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageHolder = styled.div`
  width: 50%;
  @media ${props => props.theme.mediaQueries.smaller} {
    width: 0%;
  }
`

const Image = styled(Img)`
  position: absolute;
  width: 35rem;
  box-sizing: content-box;
  border: solid 2.1rem #fff;
  border-radius: 2rem;
  box-shadow: 29px 22px 22px 0 rgba(0, 0, 0, 0.3);
  @media ${props => props.theme.mediaQueries.LARGEST} {
    width: 25rem;
  }
  @media ${props => props.theme.mediaQueries.largest} {
    width: 25rem;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    display: none;
    width: 0%;
  }
`
const ImageOne = styled(Image)`
  left: 0;
  top: 0;
`
const ImageTwo = styled(Image)`
  right: -25rem;
  top: -6rem;
  @media ${props => props.theme.mediaQueries.large} {
    left: 11rem;
    top: 1rem;
  }
`

const Images = () => {
  const data = useStaticQuery(graphql`
    {
      image1: file(relativePath: { eq: "kidsinside.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      image2: file(relativePath: { eq: "kidsoutside.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <ImageHolder>
      <ImageOne fluid={data.image2.childImageSharp.fluid} />
      <ImageTwo fluid={data.image1.childImageSharp.fluid} />
    </ImageHolder>
  )
}

export default Images
