import React from "react"
import { StyledSection, Contained } from "../layout/elements"
import styled from "styled-components"
import { Link } from "gatsby"

const Section = styled(StyledSection)`
  margin-top: auto;
  background: ${props => props.theme.colors.blueLight};
`
const CopyRight = styled.p`
  color: ${props => props.theme.colors.headingMain};
  font-size: 1.2rem;
  margin-right: auto;
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
`
const Links = styled(Link)`
  color: ${props => props.theme.colors.headingMain};
  font-size: 1.2rem;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 2rem;
  }
`
const Footer = () => {
  return (
    <Section>
      <Contained>
        <Wrapper>
          <CopyRight>
            KARA Family Day Care &copy; 2020 All Rights Reserved{" "}
          </CopyRight>
          <Links to="/testPage"> Terms &amp; Conditions </Links>
          <Links to="/privacy"> Privacy Policy </Links>
        </Wrapper>
      </Contained>
    </Section>
  )
}
export default Footer
