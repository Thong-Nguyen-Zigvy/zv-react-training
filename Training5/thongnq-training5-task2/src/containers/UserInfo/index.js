import React, {useEffect} from 'react';
import {Wrapper} from "./UserInfo.styles";

import {useDispatch, useSelector} from "react-redux";
import {getUserInfo} from "../../state/actions/user"

const UserInfo = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    
    useEffect(() => {
        dispatch(getUserInfo());
    }, []);

    console.log(user);

    return (
        <Wrapper>
            {Object.keys(user).map((key, index) => {
                if(key === "token"){
                    return null;
                }
                return <h2>{key} : {user[key]},</h2>
            })}
        </Wrapper>
    )
}

export default UserInfo;
