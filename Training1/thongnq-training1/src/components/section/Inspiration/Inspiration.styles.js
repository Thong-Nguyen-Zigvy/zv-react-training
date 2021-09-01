import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px 0px;
`

export const Content = styled.div``

export const Category = styled.div`
    overflow-y: auto ;
    padding-left: 12px;
    padding-right: 12px;
    margin-left: -12px;
    margin-right: -12px;

    div{
        display: flex;
        white-space: nowrap;
        overflow: visible;
    }
`

export const Area = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: flex-start;
    flex-wrap: wrap;
`