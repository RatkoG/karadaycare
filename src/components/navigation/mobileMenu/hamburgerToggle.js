import React from "react"
import styled from "styled-components"

const StyledButton = styled.button`
  font: inherit;
  display: inline-block;
  overflow: visible;
  margin: 0;
  padding: 15px;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  text-transform: none;
  color: inherit;
  border: 0;
  background-color: transparent;

  &:hover {
    opacity: 0.7;
  }
  &.is-active {
    .hamburger-inner,
    .hamburger-inner::before,
    .hamburger-inner::after {
      background-color: #fff;
    }
  }
  .hamburger-inner {
    top: 2;

    &::before {
      top: -10;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.15s;
    }

    &::after {
      top: 20;
    }
  }

  &.is-active {
    .hamburger-inner {
      transform: translate3d(0, 10px, 0) rotate(45deg);

      &::before {
        transform: rotate(-45deg) translate3d(-5.71429px, -6px, 0);
        opacity: 0;
      }

      &::after {
        top: 20px;
        transform: translate3d(0, -20px, 0) rotate(-90deg);
      }
    }
  }
`

const StyledBox = styled.span`
  /* .hamburger-box { */
  position: relative;
  display: inline-block;
  width: 40px;
  height: 24px;
  /* } */
`
const StyledInner = styled.span`
  /* .hamburger-inner { */
  top: 50%;
  display: block;
  margin-top: -2px;

  &,
  &::before,
  &::after {
    width: 40px;
    height: 4px;
    border-radius: 4px;
    background-color: #fff;
    position: absolute;
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
  }

  &::before,
  &::after {
    content: "";
    display: block;
  }

  &::before {
    top: -10px;
  }

  &::after {
    bottom: -10px;
  }
  /* } */
`
const HamburgerMenu = () => {
  return (
    <StyledButton className="">
      <StyledBox className="hamburger-box">
        <StyledInner className="hamburger-inner"></StyledInner>
      </StyledBox>
    </StyledButton>
  )
}

export default HamburgerMenu

// $hamburger-padding-x           : 15px !default;
// $hamburger-padding-y           : 15px !default;
// $hamburger-layer-width         : 40px !default;
// $hamburger-layer-height        : 4px !default;
// $hamburger-layer-spacing       : 6px !default;
// $hamburger-layer-color         : #000 !default;
// $hamburger-layer-border-radius : 4px !default;
// $hamburger-hover-opacity       : 0.7 !default;
// $hamburger-active-layer-color  : $hamburger-layer-color !default;
// $hamburger-active-hover-opacity: $hamburger-hover-opacity !default;

// To use CSS filters as the hover effect instead of opacity,
// set $hamburger-hover-use-filter as true and
// change the value of $hamburger-hover-filter accordingly.
// $hamburger-hover-use-filter   : false !default;
// $hamburger-hover-filter       : opacity(50%) !default;
// $hamburger-active-hover-filter: $hamburger-hover-filter !default;

{
  /* <button class="hamburger" type="button">
  <span class="hamburger-box">
    <span class="hamburger-inner"></span>
  </span>
</button>   */
}

// <button class="hamburger hamburger--collapse" type="button">
//   <span class="hamburger-box">
//     <span class="hamburger-inner"></span>
//   </span>
// </button>
