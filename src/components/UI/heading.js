import React from "react"
import styled from "styled-components"

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 7rem;
  /* @media ${props => props.theme.mediaQueries.smallest} {
    margin-bottom: 5rem;
  } */
`
const H1 = styled.h1`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 6.4rem;
  font-weight: 900;
  margin-bottom: 3rem;
  /* font-size: 2.5rem;
  text-transform: uppercase;
  display: block;
  font-weight: 700;
  letter-spacing: 0.1rem;
  margin-bottom: 1rem;
  line-height: 1.15; */
  /* color: ${props => props.theme.colors.main}; */
  /* color: ${props => props.FontColor}; */
  /* color:${props => (props.primary ? props.theme.colors.main : "white")}; */
`
const H2 = styled.h2`
  color: ${props => props.theme.colors.headingMain};
  font-family: "Londrina Solid";
  font-size: 4.8rem;
  font-weight: 400;
  text-transform: capitalize;
  margin-bottom: 6rem;
`
const H3 = styled.h3``

const Heading = ({ title, subtitle, desc, primary }) => {
  return (
    <HeadingWrapper>
      <H3>{desc}</H3>
      <H1 primary={primary}>{title}</H1>
      <H2 primary={primary}>{subtitle}</H2>
    </HeadingWrapper>
  )
}
export default Heading
