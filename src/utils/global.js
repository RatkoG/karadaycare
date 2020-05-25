import { createGlobalStyle } from "styled-components"
export default createGlobalStyle`

html {
      font-size: 62.5%; //1rem = 10px
      box-sizing: border-box;
      line-height: 1.15;

      @media ${props => props.theme.mediaQueries.medium} {
        ${"" /* font-size: 50%; */}
        font-size: 56.25%;
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
		font-family: 'Lato', 'sans-serif';
		width: 100%;
    height: 100%;
    overflow: visible;
	}
`
