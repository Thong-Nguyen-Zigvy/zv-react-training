import styled from "styled-components";

export const Wrapper = styled.div`
    scroll-snap-align: start;
    min-width: 0;
    height: 100%;
`

export const Content = styled.a`
    display: flex;
    text-decoration: none;
    align-items: center;
    border-radius: 8px;

    font-size: 16px;
    line-height: 20px;
    color: rgb(34, 34, 34);

    span:nth-child(1){
        flex: 0 0 64px;
        height: 64px;
        border-radius: 8px;
        margin-right: 16px;
        position: relative;
        overflow: hidden;
        background-color: rgb(221, 221, 221);


        img{
            width: 100%;
            height: 100%;
            background-size: cover;
        }
    }

    span:nth-child(2){
        display: flex;
        flex-grow: 1;
        flex-wrap: wrap;
        overflow-x: hidden;
        p{
            margin: 0;
            flex: 0 1 100%;
            text-overflow: ellipsis;
            padding-bottom: 2px;
            font-weight: 300;
        }
        p:nth-child(n) > b{
            font-weight: 600;
        }

        p:last-child{
            padding-bottom: 0px;

        }
    }
`