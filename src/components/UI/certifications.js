import React from "react"
import styled from "styled-components"
import Certificate from "../UI/certificate"
const StyledWrapper = styled.div`
  width: 80%;
  margin: auto;
`

const StyledRowOne = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Certificates = () => {
  return (
    <StyledWrapper>
      <StyledRowOne>
        <Certificate text="Early Childhood Educator" />
        <Certificate text="First Aid and CPR" />
        <Certificate text="Math Teacher" />
        <Certificate text="Family Child Care Home" />
        <Certificate text="Workplace Safety" />
        <Certificate text="Food-Safe" />
        <Certificate text="Psychologist" />
        <Certificate text="Principles of Healthy Child Development" />
      </StyledRowOne>
    </StyledWrapper>
  )
}
export default Certificates
