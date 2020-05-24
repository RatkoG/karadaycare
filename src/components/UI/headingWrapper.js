import React from "react"
import styled from "styled-components"

const HeadingWrapper = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  /* @media ${props => props.theme.mediaQueries.smallest} {
    margin-bottom: 5rem;
  } */
`

const Heading = ({ children }) => {
  return <HeadingWrapper>{children}</HeadingWrapper>
}
export default Heading
