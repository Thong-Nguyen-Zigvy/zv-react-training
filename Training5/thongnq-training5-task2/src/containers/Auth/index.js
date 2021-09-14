import React, {useState} from 'react'

import { Wrapper, Content, Form } from './Auth.styles';

import {useDispatch, useSelector} from "react-redux";
import {login} from "../../state/actions/auth";

const Auth = () => {
    const [email, setEmail] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(state => {
        // console.log(state);
        return state.user});

        // console.log(user);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login("john@smith.com", 'zigvy123'))
    }

    return (
        <Wrapper>
            <Content>
                <p className="sign" align="center">Sign in</p>
                <Form>
                    <input className="mail" type="email" align="center" placeholder="Email"/>
                    <input className="pass" type="password" align="center" placeholder="Password"/>
                    <button className="submit" align="center" onClick={handleSubmit}>Sign in</button>
                </Form>
            </Content>
        </Wrapper>
    )
}

export default Auth;
