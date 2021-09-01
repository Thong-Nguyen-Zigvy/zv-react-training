import React from "react";
import { Wrapper, Content, TopSearch, BottomSearch, Location, Check, Guest, Separator, SearchButton } from "./SearchBar.styles";


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
                            <div>Location</div>

                            <input placeholder="Where are you going?"></input>
                        </div>
                    </label>
                </Location>
                    
                <Separator />

                <Check>
                    <div className="check">
                        <div>
                            <div>
                                Check in
                            </div>

                            <div>
                                Add dates
                            </div>
                        </div>
                    </div>    
                        <Separator />    
                    <div className="check">
                        <div>
                            <div>
                                Check out
                            </div>

                            <div>
                                Add dates
                            </div>
                        </div>
                    </div>  
                </Check>

                <Separator />

                <Guest>
                    <div className="guest">
                        <div>
                            <div>
                                Guests
                            </div>

                            <div>
                                Add guests
                            </div>
                        </div>
                    </div>

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