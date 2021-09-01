import React from "react";

import { Wrapper, Content, Category, Area } from "./Inspiration.styles";

import SectionWrapper from "../SectionWrapper";

import CategoryButton from "./CategoryButton";

import AreaContent from "./AreaContent";

const Inspiration = () => (
    <Wrapper>
        <SectionWrapper header="Inspiration for future getaways">
        <Content>
            <Category>
                <div>
                    <CategoryButton>Lake Destinations</CategoryButton>
                    <CategoryButton>Lake Destinations</CategoryButton>
                    <CategoryButton>Lake Destinations</CategoryButton>
                    <CategoryButton>Lake Destinations</CategoryButton>
                    <CategoryButton>Lake Destinations</CategoryButton>
                    <CategoryButton>Lake Destinations</CategoryButton>
                </div>
            </Category>
            
            <Area>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
                <AreaContent location="Adirondack" city="New York"/>
            </Area>
        </Content>
    </SectionWrapper>
    </Wrapper>
)

export default Inspiration;