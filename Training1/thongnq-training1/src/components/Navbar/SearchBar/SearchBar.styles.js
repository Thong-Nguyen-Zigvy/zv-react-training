import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    left: 0%;
    top: 0%;
    text-align: left;
    width: 100%;
    padding-left: 80px;
    padding-right: 80px;
`;

export const Content = styled.div`
    margin: 0 auto;
    max-width: 850px;
    padding-bottom: 16px;
`;

export const TopSearch = styled.div`
    display: flex;
    align-items: center;
    height: 80px;
    justify-content: center;

    div:nth-child(1){
        display: flex;
        flex-direction: row;
        color: #ffffff;
        outline: none;
        align-items: center;
        justify-content: center;

        div{
            display: inline-block;
            position: relative;

            span{
                font-size: 16px;
                line-height: 20px;
                font-weight: 400;
                padding: 10px 16px;
            }
        }

        div:nth-child(1)::before{
            content: "";
            background-color: currentColor;
            border-radius: 1px;
            bottom: -9px;
            height: 2px;
            left: 50%;
            margin-left: -9px;
            position: absolute;
            width: 18px;
            transform: scaleX(1);
        }

    }

    div:nth-child(2){
        display: inline-block;

        a{
            text-decoration: none;
            text-align: inherit;
            color: #ffffff;

            span{
                font-size: 16px;
                line-height: 20px;
                font-weight: 400;
                padding: 10px 16px;
            }
        }
    }
`


export const BottomSearch = styled.div`
    display: flex;
    border: 1px solid #DDDDDD;
    border-radius: 32px;
    color: #222222;
    height: 66px;
    position: relative;
    width: 100%;
    box-shadow: 0px 16px 32px rgb(0 0 0 / 15%), 0px 3px 8px rgb(0 0 0 / 10%);
    background-color: #FFFFFF;
`

export const Separator = styled.div`
    align-self: center;
    border-right: 1px solid #DDDDDD;
    flex: 0 0 0px;
    height: 32px;
`

export const Location = styled.div`
    position: relative;
    display: flex;
    position: relative;
    align-items: center;
    margin: -1px;

    label{
        cursor: pointer;
        display: block;
        background-clip: padding-box;
        border: 1px solid transparent;
        border-radius: 32px;
        padding: 14px 32px;

        div{
            position: relative;

            div{
                font-size: 12px;
                line-height: 16px;
                font-weight: 800;
                letter-spacing: 0.04em;
                padding-bottom: 2px;
            }

            input{
                display: block;
                border: none;
                margin: 0px;
                padding: 0px;
                width: 100%;
                background: none;
                font-family: Arial, Helvetica, sans-serif;
                font-size: 13.3333px;
                line-height: 18px;
                font-weight: 400;
                color: #222222;
                text-overflow: ellipsis;
                outline: none;
            }
        }
    }
`

export const Check = styled.div`
    display: flex;
    flex: 2 0 0%;

    .check{
        display: flex;
        flex: 1 0 0%;
        align-items:center;
        margin: -1px;
        padding: 14px 24px;

        div{
            display: inline-block;
            position: relative;

            div:nth-child(1){
                font-size: 12px;
                line-height: 16px;
                font-weight: 800;
                letter-spacing: 0.04em;            
                padding-bottom: 2px;
            }

            div:nth-child(2){
                font-size: 13.3333px;
                line-height: 18px;
                color: #717171;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
            }
        }
    }
`

export const Guest = styled.div`
    display: flex;
    align-items: center;
    margin: -1px;
    flex: 0.95 0 0%;

    .guest{
        display: flex;
        flex: 1 0 0%;
        align-items:center;
        margin: -1px;
        padding: 14px 24px;

        div{
            display: inline-block;
            position: relative;

            div:nth-child(1){
                font-size: 12px;
                line-height: 16px;
                font-weight: 800;
                letter-spacing: 0.04em;            
                padding-bottom: 2px;
            }

            div:nth-child(2){
                font-size: 13.3333px;
                line-height: 18px;
                color: #717171;
                font-weight: 400;
                overflow: hidden;
                text-overflow: ellipsis;
                width: 100%;
            }
        }
    }

    .search__icon{
        position: relative;
        flex: 0 0 auto;
        margin-left: -6px;
        padding-right: 9px;
    }
`

export const SearchButton = styled.button`
    display: inline-block;
    position: relative;
    background-color: #FF385C;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    height: 48px;
    max-width: 48px;
    width: 48px;
    border-radius: 24px;
    vertical-align: middle;
    appearance: none;
    border: 0px;
    cursor: pointer;
    color: #FFFFFF;

    svg{
        transform: translateX(9px);
    }

`