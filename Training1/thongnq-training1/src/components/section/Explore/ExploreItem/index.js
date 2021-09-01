import React from "react";

import { Wrapper, Content } from "./ExploreItem.styles";

const ExploreItem = ({url, heading, time}) => (
    <Wrapper>
        <Content>
            <span>
                <img alt src={url}/>
            </span>
            <span>
                <p><b>{heading}</b></p>
                <p>{time} drive</p>
            </span>
        </Content>
    </Wrapper>
);

export default ExploreItem;