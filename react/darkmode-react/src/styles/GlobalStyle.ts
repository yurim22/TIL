import { css } from "@emotion/react";

export const GlobalStyles = css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto,
      Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
`;

// background: ${props => props.theme.body};
// color: ${props => props.theme.text};
