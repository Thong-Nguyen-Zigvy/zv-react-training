import React from "react";

import { Wrapper, Content } from "./LiveAnywhere.styles";

import SectionWrapper from "../SectionWrapper";

import Item from "../Item";

const LiveAnywhere = () => (
    <Wrapper>
        <SectionWrapper header="Live anywhere">
            <Content>
                <ul>
                    <li><Item url="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                                headline="Outdoor getaways" /></li>
                    <li><Item url="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                                headline="Outdoor getaways" /></li>
                    <li><Item url="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                                headline="Outdoor getaways" /></li>
                    <li><Item url="https://a0.muscache.com/im/pictures/2f13349d-879d-43c6-83e3-8e5679291d53.jpg?im_w=320"
                                headline="Outdoor getaways" /></li>

                </ul>
            </Content>
        </SectionWrapper>
    </Wrapper>
);


export default LiveAnywhere;
