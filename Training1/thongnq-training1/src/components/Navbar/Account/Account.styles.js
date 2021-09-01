import styled from "styled-components";

export const Wrapper = styled.div`
    flex: 1 0 140px;
`

export const Content = styled.nav`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 80px;

`

export const Host = styled.div`
    display: inline;
    margin-right: 8px;
    a{
        appearance: none;
        outline: none;
        background: transparent;
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        line-height: 18px;
        padding: 12px;
        text-decoration: none;
        color: inherit;
        text-align: inherit;
    }
`

export const Language = styled.div`
    position: relative;
    display: inline;

    div{
        display: inline-block;
        padding: 12px;
        height: 100%;
        svg{
            margin-bottom: -3px;
        }
    }
`

export const User = styled.div`
    appearance: none;
    background-color: #FFFFFF;
    border-radius: 21px;
    height: 42px;
    position: relative;
    vertical-align: center;
    border: 1px solid #dddddd;
    color: #222222;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 5px 5px 5px 12px;
    text-align: inherit;


    div:nth-child(2){
        color: #717171;
        flex: 0 0 30px;
        height: 30px;
        width: 30px;
        margin-left: 12px;
        overflow: hidden;
    }

`