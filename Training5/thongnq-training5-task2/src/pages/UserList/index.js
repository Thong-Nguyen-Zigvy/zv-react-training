import React, {useEffect} from 'react'

import { Wrapper, Content, List } from './UserList.styles'

import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"
import {useParams} from "react-router"
import {getUsers} from "../../state/actions/user"

import UserDetail from '../../components/UserDetail'

import {Redirect} from "react-router-dom"


const UserList = () => {
    const dispatch = useDispatch();
    
    const {users, error} = useSelector(state => state.users);

    useEffect(() => {
        dispatch(getUsers());
    }, []);
    
    let user = null;


    const {userId} = useParams();

    if(userId){
        [user] = users.filter(user => user.id === userId);

        if(!user){
            alert("user not found");
            return <Redirect to="/app/users" />
        }
    }



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
                {userId ? 
                        <UserDetail user={user}/>
                        : "Please choose user to view user detail"
                }
            </Content>
        </Wrapper>
    )
}

export default UserList
