import React from "react";

import { Wrapper, Content } from "./Header.styles";
import Navbar from "../Navbar";

const Header = () => (
    <Wrapper>
        <Navbar />
        <img alt="" src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg?im_w=2560" />
    </Wrapper>
);

export default Header;