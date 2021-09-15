import React, {useEffect, useCallback} from 'react'

import { Wrapper, Content, List } from './UserList.styles'

import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import {getUsers} from "../../state/actions/user"


const UserList = () => {
    const dispatch = useDispatch();

    const users = useSelector(state => state.users);
    let user = null;


    const {userId} = useParams();

    if(userId){
        [user] = users.filter(user => user.id === userId);
    }


    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <Wrapper>
            <List>
                {users.map(user => <li key={user.id}><Link to={`/app/users/${user.id}`}>{user.fullName} </Link></li>)}
            </List>
            <Content>
                {userId ? 
                     Object.keys(user).map((key, index) => {
                        return <h2 key={user[key].id}>{key} : {user[key]},</h2>
                    })
                : "Please choose user to view user detail"
                }
            </Content>
        </Wrapper>
    )
}

export default UserList
