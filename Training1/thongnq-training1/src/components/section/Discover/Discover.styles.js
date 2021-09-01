import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px auto;
`;

export const Content = styled.div`
    margin: 8px 0;

    ul{
        display: flex;
        height: 100%;
        min-width: 100%;
        list-style: none;
        overflow: auto hidden;

        li{
            border-width: 0px 5px;
            max-width: 33.3333%;
            flex: 0 0 33.3333%;

            border-style: solid;
            border-color: transparent;
            scroll-snap-align: start;
            scroll-snap-stop: always;
            display: flex;
        }
    }
`;

