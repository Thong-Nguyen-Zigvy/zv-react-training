import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    min-width: 100%;
    display: flex;
`;

export const Content = styled.div`
    width: 100%;

    margin: 4px 8px 8px 8px;

    a{
        cursor: pointer;
        position: relative;
        background: transparent;
        width: 100%;
        height: 100%;
        
        div:nth-child(1){
            position: relative;
            display: flex;
            width: 100%;
            background: rgb(221, 221, 221);
            border-radius: 8px;
            overflow: clip;

            img{
                width: 100%;
                height: 100%;
                object-fit:cover;
            }
        }

        div:nth-child(2){
            padding-top: 8px;

            span{
                color: rgb(34, 34, 34);
                font-size: 18px;
                line-height: 22px;
                font-weight: 600;
                white-space: pre-line;
            }
        }

        .textContent{
            overflow: clip;
            margin-top: 4px;
            font-size: 14px;
            line-height: 18px;
            max-height: 54px;
            text-overflow: ellipsis;
            color: rgb(113,113,113);
            font-weight: 400;
        }
    }
`;