import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`

export const Content = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 40px;
`

export const List = styled.ul`
    box-sizing: border-box;
    width: 200px;
    height: 100%;
    background-color: darkgray;
    margin: 0;

    list-style: none;

    padding-top: 40px;
    li{
        margin: 10px 0;
    }
    a{
        text-decoration: none;
        color: black;

    }
`