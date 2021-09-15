import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #F3EBF6;
    font-family: 'Ubuntu', sans-serif;
    position: relative;
`

export const Content = styled.div`
    display: flex;
    height: calc(100vh - 120px);

`

export const TopNav = styled.div`
    height: 100px;
    background-color: black;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 60px;

    img{
        max-width: 100%;
        object-fit: contain;
        vertical-align: middle;
        object-position: center;
    }
`

export const Footer = styled.div`
box-sizing: border-box;
    width: 100%;
    height: 100px;
    background-color: black;
    color: white;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 60px;
`

export const SideBar = styled.div`
    box-sizing: border-box;
    width: 250px;
    background-color: gainsboro;
    padding: 30px;

    ul{
        list-style: none;
        li{
            margin: 15px 0;
            a{
                text-decoration: none;
                color: black;
                font-size: 18px;
            }
        }
    }
`

export const UserButton = styled.button`
    width: 60px;
    height: 60px;
    background-color: palevioletred;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 20px;
    cursor: pointer;
`

export const UserInfoBar = styled.div`
    display: ${props => props.show ? "block" : "none"};
    background-color: darkgray;
    position: absolute;
    bottom: -60px;
    left: 0;
    width: 100px;
    div{
        display: block;
        margin-bottom: 10px;
    }

    button{
        width: 100%;
        cursor: pointer;
    }
`