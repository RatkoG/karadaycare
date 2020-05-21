import React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 23%;
  height: 30rem;
  padding: 2rem;
  align-items: center;
  border-radius: 20px;
  margin: 0 2rem;
  margin-bottom: 3rem;
  box-shadow: 10px 15px 55px 0 rgba(0, 0, 0, 0.3);
  /* flex-wrap: wrap; */
`

const StyledTitle = styled.h1`
  font-size: 4rem;
  color: ${props => props.theme.colors.headingMain};
`
const StyledSubtitle = styled.h2`
  color: ${props => props.theme.colors.orange};
`
const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 8rem;
  justify-content: space-between;
`
const PriceWrapper = styled.div`
  text-align: center;
  height: 50%;
`
const StyledPrice = styled.p`
  font-family: "Londrina Solid";
  color: ${props => props.theme.colors.headingMain};
  font-size: 4rem;
`
const StyledPer = styled.p`
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
`
const Fee = ({ title, subtitle, price, per }) => {
  return (
    <StyledCard>
      <TitleWrapper>
        <StyledTitle>{title}</StyledTitle>
        <StyledSubtitle>{subtitle}</StyledSubtitle>
      </TitleWrapper>
      <PriceWrapper>
        <StyledPrice>{price}</StyledPrice>
        <StyledPer>{per}</StyledPer>
      </PriceWrapper>
    </StyledCard>
  )
}
export default Fee
