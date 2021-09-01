import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 40px 0;

    padding: 0 80px;
`

export const Content = styled.a`
    cursor: pointer;
    text-decoration: none;
    display: block;
    position: relative;
    border-radius: 0px;
    height: 100%;
    width: 100%;

    .picture{
        height: 400px;
        background: rgb(72, 72, 72);

        border: none;
        display: block;
        position: relative;
        text-align: left;
        width: 100%;
        border-radius: 16px;
        overflow: clip;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .text{
        position: absolute;
        top: 0px;
        left: 0px;
        display: flex;
        flex-flow: column;
        padding-left: 80px;
        padding-right: 80px;
        align-items: flex-start;
        width: 544px;
        height: 100%;
        justify-content: center;
        text-align: left;

        h2{
            margin: 0px;
            font-size: 48px;
            line-height: 52px;
            white-space: pre-wrap;
            font-weight: 600;
            color: rgb(255,255,255);
        }

        .para{
            font-size: 18px;
            line-height: 24px;
            padding-top: 12px;

            white-space: pre-wrap;

            span{
                color: rgb(255,255,255);
            }
        }

    }

`
