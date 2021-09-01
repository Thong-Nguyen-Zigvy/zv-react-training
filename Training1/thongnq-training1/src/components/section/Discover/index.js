import React from "react";

import { Wrapper, Content } from "./Discover.styles";

import SectionWrapper from "../SectionWrapper";

import Item from "../Item";

const Discover = () => (
    <Wrapper>
        <SectionWrapper header="Discover things to do">
            <Content>
                <ul>
                    <li><Item url="https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=320"
                                headline="Outdoor getaways" text="Find unforgettable activities near you."/></li>
                    <li><Item url="https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=320"
                                headline="Outdoor getaways" text="Find unforgettable activities near you."/></li>
                    <li><Item url="https://a0.muscache.com/im/pictures/f51f70fb-93b7-4974-86e8-1195b64f1353.jpg?im_w=320"
                                headline="Outdoor getaways" text="Find unforgettable activities near you."/></li>
                </ul>
            </Content>
        </SectionWrapper>
    </Wrapper>
);

export default Discover;