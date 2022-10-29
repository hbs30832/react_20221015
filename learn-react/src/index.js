import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import Accordian from "./components/UI/Accordian";

import { createGlobalStyle } from "styled-components";
import Scroll from "./components/UI/Scroll";
// import Carousel from "./components/UI/Carousel";

const GlobalStyle = createGlobalStyle`
    body {
      height : 300vh;
    }
    * {
        margin : 0;
        padding : 0;
        box-sizing: border-box;
    }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyle />
    <Scroll />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
