import React from 'react'

import {Link} from 'react-router-dom';

import { Wrapper, Content, TopNav, Footer, SideBar } from './Layout.styles'

import {useDispatch} from "react-redux";

import {logout} from "../../state/actions/auth"

import {clearUsers} from "../../state/actions/user"

import {useHistory} from "react-router-dom"


const Layout = ({children}) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleLogout = () => {
        dispatch(logout());
        dispatch(clearUsers());
        history.push("/login");
        
    }

    return (
        <Wrapper>
            
                <TopNav>
                    <Link to="/app">
                        <img src="https://zigvy.com/wp-content/uploads/2017/12/zigvy-logo.svg" alt="Corporation" />
                    </Link>
                    <div>
                        User
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                </TopNav>
                <Content>
                    <SideBar>
                        <ul>
                            <li><Link to="/app">Home</Link></li>
                            <li><Link to="/app/users">Users</Link></li>
                            <li><Link to="/app/my-info">My Info</Link></li>
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
