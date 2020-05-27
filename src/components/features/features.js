import React from "react"
import styled from "styled-components"
import Girl from "../UI/girl"
import LearningSvg from "../../images/learning.svg"
import EducationSvg from "../../images/education.svg"
import NapSvg from "../../images/nap.svg"
import MealSvg from "../../images/meal.svg"

const FeaturesLayout = styled.div`
  position: relative;
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: space-between;
  margin-top: 10rem;

  @media ${props => props.theme.mediaQueries.small} {
    flex-direction: column;
    justify-content: center;
  }
  @media ${props => props.theme.mediaQueries.small} {
    margin-top: 0rem;
    height: 100%;
  }
`
const FirstCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  @media ${props => props.theme.mediaQueries.tablet} {
    width: 47%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 100%;
  }
  /* @media ${props => props.theme.mediaQueries.medium} {
    width: 70%;
    margin-bottom: 4rem;
  } */
  /* @media ${props => props.theme.mediaQueries.small} {
    margin: 0 auto;
  } */
`
const SecondCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  @media ${props => props.theme.mediaQueries.tablet} {
    width: 47%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    width: 100%;
  }
  /* @media ${props => props.theme.mediaQueries.medium} {
    width: 70%;

  }
  @media ${props => props.theme.mediaQueries.small} {
    margin: 0 auto;
  } */
`

const ProgramLeft = styled.div`
  /* height: 40%; */
  display: flex;
  justify-content: space-between;
  @media ${props => props.theme.mediaQueries.small} {
    flex-direction: row-reverse;
    margin-bottom: 3rem;
  }
`
const ProgramRight = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  @media ${props => props.theme.mediaQueries.small} {
    margin-bottom: 3rem;
  }
`
const Text = styled.div`
  width: 70%;
  text-align: ${props => (props.primary ? "right" : "left")};
  @media ${props => props.theme.mediaQueries.tablet} {
    width: 80%;
  }
  @media ${props => props.theme.mediaQueries.small} {
    text-align: left;
  }
`

const Title = styled.h4`
  color: ${props => props.theme.colors.headingMain};
  font-size: 2rem;
  margin-bottom: 1.2rem;
`
const TextP = styled.p`
  font-size: 1.6rem;
  color: ${props => props.theme.colors.text};
  font-weight: 400;
`

const Icon = styled.div`
  width: 10rem;
  height: 10rem;
  align-self: center;
  & svg {
    width: 100%;
    height: auto;
  }
  @media ${props => props.theme.mediaQueries.large} {
    width: 8rem;
    height: 8rem;
  }
  @media ${props => props.theme.mediaQueries.tablet} {
    width: 6rem;
    height: 6rem;
  }
`
const Span = styled.span`
  font-weight: 700;
`
const Features = () => {
  return (
    <FeaturesLayout>
      <FirstCol>
        <ProgramLeft>
          <Text primary="right">
            <Title>Creative Activities</Title>
            <TextP>
              Not only is art enjoyable, but it also promotes visual-motor
              coordination. We do different types of painting, solving puzzles
              and science experiments.
            </TextP>
          </Text>
          <Icon>
            <LearningSvg />
          </Icon>
        </ProgramLeft>
        <ProgramLeft>
          <Text primary="right">
            <Title>Educational Activities</Title>
            <TextP>
              We go through a lot of mathematical concepts. A variety of
              learning activities are provided to make learning more fun.
            </TextP>
          </Text>
          <Icon>
            <EducationSvg />
          </Icon>
        </ProgramLeft>
      </FirstCol>
      <SecondCol>
        <ProgramRight>
          <Text>
            <Title>Naptime</Title>
            <TextP>
              Children remaining awake may read books, do puzzles, other quiet
              activities while others sleep
            </TextP>
          </Text>
          <Icon>
            <NapSvg />
          </Icon>
        </ProgramRight>
        <ProgramRight>
          <Text>
            <Title>Meals and Snacks</Title>
            <TextP>
              All menu planning follows the recommendations set out in the
              Health Canada documents “Eating Well with
              <Span> Canada’s Food Guide”</Span> or “Nutrition for Healthy Term
              Infants”.
            </TextP>
          </Text>
          <Icon>
            <MealSvg />
          </Icon>
        </ProgramRight>
      </SecondCol>
      <Girl />
    </FeaturesLayout>
  )
}

export default Features
