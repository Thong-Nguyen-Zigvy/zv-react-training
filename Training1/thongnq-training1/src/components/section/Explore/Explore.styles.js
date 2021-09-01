import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px 0;
`

export const Content = styled.div`
    display: grid;
    overflow-x:auto;

    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(4, 1fr);
    grid-auto-flow: row;
    padding: 8px;
    gap: 16px;
`