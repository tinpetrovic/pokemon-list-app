import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
    } 

    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        margin: 0;
        padding: 0;
    }

    body {
        background: #303030;
        color: #fff;
        letter-spacing: 1.5px;
        line-height: 1.1;
    }
`;