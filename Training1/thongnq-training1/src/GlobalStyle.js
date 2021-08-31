import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`


    *, *:before, *:after{
        box-sizing: border-box;
    }

    html{
        display: block;
        margin: 0;
        padding: 0;
    }

    body{
        line-break: strict;
        font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
        font-size: 14px;
        line-height: 1.43;
        color: #484848;
        background-color: #fff;
        margin: 0;
        -webkit-font-smooth: antialiased;
    }
`