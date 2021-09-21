import React, {useEffect} from 'react'

import { Wrapper, Content, List } from './UserList.styles'

import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import {getUsers} from "../../state/actions/user"

import UserDetail from '../../commons/UserDetail'

import {Redirect} from "react-router-dom"


const UserList = ({children}) => {
    const dispatch = useDispatch();
    
    const {users, error} = useSelector(state => state.users);

    console.log(users);

    useEffect(() => {
        if(!users || users.length === 0){
            dispatch(getUsers());
        }
    }, []);

    if(error){
        alert(error);
        return <Redirect to="/app" />
    }


    return (
        <Wrapper>
            <List>
                {users.map(user => <li key={user.id}><Link to={`/app/users/${user.id}`}>{user.fullName} </Link></li>)}
            </List>
            <Content>
                {children ? 
                        children
                        : "Please choose user to view user detail"
                }
            </Content>
        </Wrapper>
    )
}

export default UserList
