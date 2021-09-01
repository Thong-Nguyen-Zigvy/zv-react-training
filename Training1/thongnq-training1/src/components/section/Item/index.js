import React from "react";

import { Wrapper, Content } from "./Item.styles";

const Item = ({url, headline, text}) => (
    <Wrapper>
        <Content>
            <a>
                <div>
                    <img alt src={url}></img>
                </div>

                <div>
                    <span>{headline}</span>
                </div>

                {text ? 
                <div className="textContent">
                    <span>{text}</span>
                </div>
                : null}
            </a>
        </Content>
    </Wrapper>
);

export default Item;

