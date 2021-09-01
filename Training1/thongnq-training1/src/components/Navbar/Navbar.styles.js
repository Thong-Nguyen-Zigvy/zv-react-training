import styled from "styled-components";

export const Wrapper = styled.div`
    height: 80px;
    left: 0px;
    width: 100%;
    z-index: 100;
    position: absolute;
    color: #FFFFFF;       
`

export const Content = styled.div`
    padding-left: 80px;
    padding-right: 80px;

    -webkit-box-align: center;

    justify-content: space-between;

    align-items: center;

    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 1;
    margin: 0 auto;
`

export const Logo = styled.div`
    flex: 1 0 140px;

    a{
        display: inline;
        height: 80px;
        position: relative;
        vertical-align: center;
        color: #ffffff;
    }
`