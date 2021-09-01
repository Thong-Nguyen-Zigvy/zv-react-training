import React from "react";

import { Wrapper, Content } from "./AreaContent.styles";

const AreaContent = ({location, city}) => (
    <Wrapper>
        <Content>
            <div className="container">
                <div className="location">{location}</div>
                <div className="city">{city}</div>
            </div>
        </Content>
    </Wrapper>
)

export default AreaContent;