import { injectGlobal } from 'styled-components';

// Global styles
injectGlobal`
  html,
  body {
    height: 100%;
  }

	body {
    box-sizing: border-box;
    color: #1f2228;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
		margin: 0;
    overflow-y: hidden;
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
