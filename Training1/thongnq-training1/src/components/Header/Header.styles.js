import styled from "styled-components";

import img from "../../images/hero-img.jpg"

export const Wrapper = styled.div`
    min-height: 400px;
    max-width: 1760px;
    width: 100%;

    img{
        position: absolute;
        width: 100%;
        left: 0px;
        right: 0px;
        object-fit: cover;
        object-position: center bottom;
        vertical-align: bottom;
    }
`

export const Content = styled.div`
`