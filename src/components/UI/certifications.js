import React from "react"
import styled from "styled-components"
import Certificate from "../UI/certificate"
const StyledWrapper = styled.div`
  width: 80%;
  margin: auto;
`

const StyledRowOne = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 4rem;
`
const StyledRowTwo = styled.div`
  display: flex;
  justify-content: space-around;
`
const Certificates = () => {
  return (
    <StyledWrapper>
      <StyledRowOne>
        <Certificate text="Early Childhood Educator" />
        <Certificate text="First Aid and CPR" />
        <Certificate text="Math Teacher" />
        <Certificate text="Family Child Care Home" />
      </StyledRowOne>
      <StyledRowTwo>
        <Certificate text="Workplace Safety" />
        <Certificate text="Food-Safe" />
        <Certificate text="Psychologist" />
        <Certificate text="Principles of Healthy Child Development" />
      </StyledRowTwo>
    </StyledWrapper>
  )
}
export default Certificates
