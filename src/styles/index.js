import { injectGlobal } from 'styled-components';

const globalStyles = injectGlobal`
  html,
  body {
    height: 100%;
  }

	body {
    box-sizing: border-box;
    color: #1f2228;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 14px;
		margin: 0;
    overflow-y: hidden;

    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    font-feature-settings: 'liga';
	}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  a[href]:not([class]) {
    color: #3685d6;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  a > svg {
    vertical-align: text-bottom;
  }
`;

export default globalStyles;
