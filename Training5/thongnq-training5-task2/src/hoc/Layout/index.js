import React, {useState} from 'react'

import {Link} from 'react-router-dom';

import { Wrapper, Content, TopNav, Footer, SideBar, UserButton, UserInfoBar } from './Layout.styles'

import {useDispatch, useSelector} from "react-redux";

import {logout} from "../../state/actions/auth"

import {clearUsers} from "../../state/actions/user"

import {useHistory} from "react-router-dom"

import jwt_decode from "jwt-decode";


const Layout = ({children}) => {
    const [showUserBar, setShowUserBar] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const user = jwt_decode(useSelector(state => state.auth.user.token));
    const userShort = user.fullName.split(" ").reduce((short, name) => short + name[0], "");

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
                    <div style={{"position": "relative"}}>
                        <UserButton onClick={() => setShowUserBar(!showUserBar)}>{userShort}</UserButton>
                        <UserInfoBar show={showUserBar}>
                            <div>{user.fullName}</div>
                            <button onClick={handleLogout}>logout</button>
                        </UserInfoBar>
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
