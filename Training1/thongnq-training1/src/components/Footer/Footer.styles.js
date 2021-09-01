import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #F7F7F7;
    border-top: 1px solid #DDDDDD;
`;

export const Content = styled.div`
    padding: 0 80px;
`;

export const TopBar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 48px 0;
    margin: 0 -12px;

    section{
        flex: 1 0 0%0px;
        padding: 0 12px;

        div{

            color: #222222;
            text-transform: uppercase;
            font-size: 12px;
            font-weight: bold;
        }

        ul{
            list-style: none;
            margin: 0px;
            padding: 0px;

            li{
                margin-top: 16px;

                a{
                    font-family: inherit;
                    font-weight: inherit;
                    font-style: inherit;

                    text-decoration: none;
                    color: #222222;
                    font-size: 14px;
                    line-height: 18px;
                }
            }
        }
    }

`

export const BottomBar = styled.div`
    padding: 24px 0px;
    border-top: 1px solid #DDDDDD;

    section{
        display: flex;
        justify-content: space-between;

        .airbnb{
            font-size: 14px;
            line-height: 18px;
            color: #222222;
            display: inline-block;
            margin-right: 19px;
        }

        a{
            text-decoration: none;
            color: #222222;
            font-size: 14px;
            line-height: 18px;
        }
    }
`