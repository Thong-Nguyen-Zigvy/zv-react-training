import React, {useEffect} from 'react';
import {Wrapper} from "./UserInfo.styles";

import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../../state/actions/user";

import UserDetail from '../../commons/UserDetail';

const UserInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    
    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    return (
        <Wrapper>
            <UserDetail user={user}/>
        </Wrapper>
    )
}

export default UserInfo;
