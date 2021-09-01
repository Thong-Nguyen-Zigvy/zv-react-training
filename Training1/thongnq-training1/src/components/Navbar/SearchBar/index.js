import React from "react";
import { Wrapper, Content, TopSearch, BottomSearch, Location, Check, Guest, Separator, SearchButton, Label, Des, SearchContainer } from "./SearchBar.styles";


const SearchBar = () => (
    <Wrapper>
        <Content>
            <TopSearch>
                <div>
                    <div>
                        <span>Places to stay</span>
                    </div>
                    <div>
                        <span>Experiences</span>
                    </div>
                </div>

                <div>
                    <a>
                        <span>Online Experiences</span>
                    </a>
                </div>
            </TopSearch>

            <BottomSearch>
                <Location>
                    <label>
                        <div>
                            <Label>Location</Label>

                            <input placeholder="Where are you going?"></input>
                        </div>
                    </label>
                </Location>
                    
                <Separator />

                <Check>
                    <SearchContainer>
                        <div>
                            <Label>
                                Check in
                            </Label>

                            <Des>
                                Add dates
                            </Des>
                        </div>
                    </SearchContainer>    
                        <Separator />    
                    <SearchContainer>
                        <div>
                            <Label>
                                Check out
                            </Label>

                            <Des>
                                Add dates
                            </Des>
                        </div>
                    </SearchContainer>  
                </Check>

                <Separator />

                <Guest>
                    <SearchContainer>
                        <div>
                            <Label>
                                Guests
                            </Label>

                            <Des>
                                Add guests
                            </Des>
                        </div>
                    </SearchContainer>

                    <div className="search__icon">
                        <SearchButton>
                            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: "block", fill: "none", height: "16px", width: "16px", stroke: "currentcolor", strokeWidth: "4", overflow: "visible"}}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
                        </SearchButton>
                    </div>
                </Guest>
            </BottomSearch>
        </Content>
    </Wrapper>
)


export default SearchBar;