import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`

html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;
      @media ${props => props.theme.mediaQueries.largest} {
          font-size: 60%;
      }
      @media ${props => props.theme.mediaQueries.large} {
        font-size: 57.5%;
      }
      @media ${props => props.theme.mediaQueries.small} {
          font-size: 55%;
      }
    }
		* {
      outline: none;
      box-sizing: inherit;
      margin:0;
    }
		*,
    *::before,
    *::after {
      box-sizing: inherit;
    }
	body {
		font-family: 'Lato', 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", '!default';
		width: 100%;
    height: 100%;
		overflow: visible;
		${
      "" /* --primary: ${props => props.theme.colors.main};
		--shadow-color: rgba(0, 0, 0, 0.1);
		--navbar: rgba(255, 255, 255, 0.95); */
    }
	}
`
