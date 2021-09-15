import {createGlobalStyle} from "styled-components";
import styled from "styled-components"

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

export const Wrapper = styled.div`
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    background-color: #F3EBF6;
    font-family: inherit;
    padding: 70px;
`

export const Content = styled.div`
    background-color: #FFFFFF;
    width: 600px;
    height: 600px;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    margin: 0 auto;
    position: relative;

    .sign{
        padding-top: 40px;
        color: #8C55AA;
        font-family: inherit;
        font-weight: bold;
        font-size: 23px;
        text-align: center;
    }


    

    table {
        margin: 30px auto;
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 90%;
        border-radius: 20px;
        padding: 20px;

        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        overflow: hidden;

    }

    thead tr{
        background: linear-gradient(to right, #9C27B0, #E040FB);

        color: #ffffff;
        text-align: left;
    }

    td, th {
        padding: 12px 15px;
    }

    tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    tr:nth-child(even) {
        background-color: lightgray;
    }

`
