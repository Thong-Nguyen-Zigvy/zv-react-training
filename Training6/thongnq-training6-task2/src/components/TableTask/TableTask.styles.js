import styled from "styled-components";

export const Table = styled.table`
    margin: 30px auto;
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 90%;
    border-radius: 20px;
    padding: 20px;

    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    overflow: hidden;

    thead tr{
        background: linear-gradient(to right, #9C27B0, #E040FB);

        color: #ffffff;
        text-align: left;
    }

    td, th {
        padding: 12px 15px;
    }

    tbody tr {
        border-bottom: 1px solid #dddddd;
    }

    tr:nth-child(even) {
        background-color: lightgray;
    }
`