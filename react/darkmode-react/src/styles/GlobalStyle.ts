import { css } from "@emotion/react";
import { THEME_STYLE } from "./theme";

export const GlobalStyles = (theme: THEME_STYLE) =>(css`
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
    background: ${theme.body};
    color: ${theme.text};
  }
`);

// background: ${props => props.theme.body};
// color: ${props => props.theme.text};
