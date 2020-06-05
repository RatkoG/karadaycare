import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
const StyledButton = styled(AnchorLink)`
  cursor: pointer;
  font-size: 1.5rem;
  user-select: none;
  color: rgb(255, 255, 255);
  font-family: inherit;
  font-weight: 900;
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  background: ${props => props.theme.colors.orange};
  text-transform: uppercase;
  margin: auto;
  text-decoration: none;
  letter-spacing: 1.5px;
  transition: all 0.2s ease-out;
  &:hover {
    transform: translateY(-3px);
  }
  &:active {
    transform: translateY(1px);
  }
  @media ${props => props.theme.mediaQueries.medium} {
    font-size: 1rem;
    padding: 1rem 2.5rem;
  }
  @media ${props => props.theme.mediaQueries.smallest} {
    margin-bottom: 5rem;
  }
`

const ButtonLink = ({ children, ...rest }) => (
  <StyledButton {...rest}>{children}</StyledButton>
)
export default ButtonLink
