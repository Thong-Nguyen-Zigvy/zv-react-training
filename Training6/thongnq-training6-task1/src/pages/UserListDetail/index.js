import React from 'react';

import {Redirect} from "react-router-dom"
import {useParams} from "react-router"
import {useSelector} from "react-redux"

import UserDetail from '../../commons/UserDetail';
import UserList from '../UserList';

const UserListDetail = () => {
    const {users} = useSelector(state => state.users);
    const {userId} = useParams();

    const [user] = users.filter(user => user.id === userId);

    if(!user){
        alert("user not found");
        return <Redirect to="/app/users" />
    }

    return (
        <UserList>
            <UserDetail user={user}/>
        </UserList>
    )
}

export default UserListDetail
