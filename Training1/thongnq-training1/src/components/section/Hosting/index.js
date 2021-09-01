import React from "react";

import { Wrapper, Content} from "./Hosting.styles";

import Button from "../../Button";

const Hosting = () => (
    <Wrapper>
        <Content>
            <div className="picture">
                <img alt src="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440" />
            </div>

            <div className="text">
                <h2>Try hosting</h2>
                <div className="para">
                    <span>Earn extra income and unlock new opportunities by sharing your space.</span>
                </div>
                <div style={{marginTop:"40px"}}>
                    <Button>
                        <span style={{color: "rgb(34, 34, 34)"}}>Learn more</span>
                    </Button>
                </div>
            </div>
        </Content>
    </Wrapper>
);

export default Hosting;