import React, { useState } from "react";
import "./App.css";
import { Global } from "@emotion/react";
import { GlobalStyles } from "./styles/GlobalStyle";

type THEME = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<THEME>("light");

  const toggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <>
      <Global styles={GlobalStyles} />
      <button onClick={toggleTheme}>Toggle theme</button>
      <h1>It's a {theme} theme!</h1>
    </>
  );
}

export default App;
