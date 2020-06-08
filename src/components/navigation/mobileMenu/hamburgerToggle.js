import React from "react"
import styled from "styled-components"

const Hamburger = styled.button`
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;

  &:hover {
    opacity: 0.7;
  }

  & .is-active:hover {
    opacity: 0.7;
  }

  & .is-active .hamburger-inner,
  & .is-active .hamburger-inner::before,
  & .is-active .hamburger-inner::after {
    background-color: #fff;
  }

  .hamburger-box {
    width: 40px;
    height: 24px;
    display: inline-block;
    position: relative;
  }

  .hamburger-inner {
    display: block;
    top: 50%;
    margin-top: -2px;
  }

  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    width: 40px;
    height: 4px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    transition-property: transform;
    transition-duration: 0.15s;
    transition-timing-function: ease;
  }

  .hamburger-inner::before,
  .hamburger-inner::after {
    content: "";
    display: block;
  }

  .hamburger-inner::before {
    top: -10px;
  }

  .hamburger-inner::after {
    bottom: -10px;
  }

  & .hamburger-inner {
    top: 4px;

    &::before {
      top: 10px;
      transition-property: transform, opacity;
      transition-timing-function: ease;
      transition-duration: 0.15s;
    }

    &::after {
      top: 20px;
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
        transform: translate3d(0, -20px, 0) rotate(-90deg);
      }
    }
  }
`
const HamburgerBox = styled.span``
const HamburgerInner = styled.span``

const HamburgerMenu = ({ toggleChange, menuOpened }) => {
  const isActive = "is-active"
  return (
    <Hamburger
      className="hamburger hamburger--slider"
      type="button"
      className={menuOpened ? isActive : ""}
      onClick={toggleChange}
    >
      <HamburgerBox className="hamburger-box">
        <HamburgerInner className="hamburger-inner"></HamburgerInner>
      </HamburgerBox>
    </Hamburger>
  )
}

export default HamburgerMenu
