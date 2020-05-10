import styled from "styled-components"

export const StyledSection = styled.section`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: ${({ fullHeight }) => (fullHeight ? "100vh" : "auto")};
`
export const Contained = styled.div`
  max-width: 128rem;
  padding: 0 2rem;
  margin: 0 auto;
  width: 100%;
  position: relative;
`
export const Wrapper = styled.div`
  padding: 4rem 2rem;
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;

  /* @media ${props => props.theme.mediaQueries.smaller} {
    padding: 3rem 1rem;
  } */
`
