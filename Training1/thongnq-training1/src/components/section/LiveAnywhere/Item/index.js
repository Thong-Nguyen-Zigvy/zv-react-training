import React from "react";

import { Wrapper, Content } from "./Item.styles";

const Item = ({url, text}) => (
    <Wrapper>
        <Content>
            <a>
                <div>
                    <img alt src={url}></img>
                </div>

                <div>
                    <span>{text}</span>
                </div>
            </a>
        </Content>
    </Wrapper>
);

export default Item;

