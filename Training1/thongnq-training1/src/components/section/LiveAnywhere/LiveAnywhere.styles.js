import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px 0;
`

export const Content = styled.div`
    margin: 8px 0;

    ul{
        display: flex;
        height: 100%;
        list-style: none;
        overflow: auto hidden;
        min-width: 100%;
        margin-block-start: 0px;
    margin-block-end:0px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 0px;

        scroll-snap-type: x mandatory;

        li{
            max-width: 25%;
            flex: 0 0 25%;        
        }
    }
`