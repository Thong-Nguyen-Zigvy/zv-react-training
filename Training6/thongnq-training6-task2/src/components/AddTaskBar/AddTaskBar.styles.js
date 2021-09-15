import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        width: 300px;
        color: rgb(38, 50, 56);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        padding: 10px 20px;
        background: rgba(136, 126, 126, 0.04);
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
        text-align: center;
        font-family: inherit;
    }

    input:focus {
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
        
    }

    .submit{
        cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background: linear-gradient(to right, #9C27B0, #E040FB);
        border: 0;
        padding: 10px 40px;
        font-family: inherit;
        font-size: 13px;
        box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
        margin-left: 20px;
    }
`