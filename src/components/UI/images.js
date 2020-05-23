import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const ImageHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 52rem;
  width: 50%;
  @media ${props => props.theme.mediaQueries.tablet} {
    height: 42rem;
    width: 60%;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    display: none;
  }
`

const Image = styled(Img)`
  width: 33rem;
  box-sizing: content-box;
  border: solid 2.1rem #fff;
  border-radius: 2rem;
  box-shadow: 29px 22px 22px 0 rgba(0, 0, 0, 0.3);

  @media ${props => props.theme.mediaQueries.tablet} {
    width: 25rem;
  }
`
const ImageOne = styled(Image)`
  /* left: 0;
  top: 0; */
`
const ImageTwo = styled(Image)`
  margin-left: auto;
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
