import React from "react";
import { Wrapper, Content } from "./SectionWrapper.styles";

const SectionWrapper = ({header, children}) => (
    <Wrapper>
        <h2>{header}</h2>
        <Content>{children}</Content>
    </Wrapper>
)

export default SectionWrapper;