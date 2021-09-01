import styled from "styled-components";

export const Wrapper = styled.div`
position: relative;
    min-height: 400px;
    width: 100%;
    height: 90vh;

    img{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0px;
        right: 0px;
        object-fit: cover;
        object-position: center bottom;
        vertical-align: bottom;
    }
`

export const Content = styled.div`
    position: relative;
    width: 100%;
    max-width: 1760px;
    padding: 350px 80px 40px;

    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        div{
            display: block;

            .heading{
                max-width: 500px;
                text-align: center;

                span{
                    white-space: pre-line;
                    max-width: 100%;
                    font-size: 18px;
                    font-weight: 600;
                    letter-spacing: 0em;
                    line-height: 22px;
                    color: #222222;
                }
            }

            .cta-button{
                max-width: 500px;
                display: flex;
                justify-content: center;
                margin-top: 16px;

                a{
                    display: inline-block;
                    padding: 22px 56px;
                    text-decoration:none;
                    cursor: pointer;
                    width: auto;
                    background-color: #FFFFFF;
                    font-size: 18px;
                    line-height: 20px;
                    font-weight: 600;
                    border: initial;
                    border-radius: 54px;
                    outline: none;
                    box-shadow: 0px 6px 16px rgb(0 0 0 / 12%);

                    span{
                        -webkit-text-fill-color: transparent;
                        background: linear-gradient(90deg, #6F019C 0%, #C6017E 135.12%);
                        -webkit-background-clip: text;

                        font-weight: 800;
                        color: #222222;
                        line-height: 20px;
                        max-height: 120px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
        }
    }
`