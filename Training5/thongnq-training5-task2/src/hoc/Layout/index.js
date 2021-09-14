import React from 'react'

import { Wrapper, Content, TopNav, Footer, SideBar } from './Layout.styles'

const Layout = ({children}) => {
    return (
        <Wrapper>
            
                <TopNav>
                    <a href="#">
                        <img src="https://zigvy.com/wp-content/uploads/2017/12/zigvy-logo.svg" alt="Corporation" />
                    </a>
                    <div>
                        User
                    </div>
                </TopNav>
                <Content>
                    <SideBar>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">User</a></li>
                            <li><a href="#">My Info</a></li>
                        </ul>
                    </SideBar>
                    <div className="mainContent">{children}</div>
                </Content>
                <Footer>
                    <h3>Zigvy corp</h3>
                </Footer>
            
        </Wrapper>
    )
}

export default Layout
