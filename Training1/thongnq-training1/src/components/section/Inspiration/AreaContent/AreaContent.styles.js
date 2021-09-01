import styled from "styled-components";

export const Wrapper = styled.div`
    width: 25%;
    padding: 16px 8px;
`

export const Content = styled.a`
    text-decoration: none;
    font-size: 14px;
    line-height: 20px;
    color: rgb(34, 34, 34);
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .container{
        overflow-x: hidden;

        div{
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            font-size: 14px;
            line-height: 18px;
        }

        .city{
            color: rgb(113, 113, 113);
        padding-top: 2px;


        }
    }
`