import React, {useState} from 'react'

import { Wrapper, Content, Form } from './Auth.styles';

import {Redirect, useHistory} from 'react-router-dom';

import {useDispatch, useSelector} from "react-redux";
import {login} from "../../state/actions/auth";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    console.log(auth);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password))
        .then(() => {
            if(auth.user){
                history.push('/app');
                window.location.reload();
            }
        })
        .catch(() => {
            console.log("error");
        })
    }

    if(auth.isLoggedIn){
        return <Redirect to="/app" />
    }

    return (
        <Wrapper>
            <Content>
                <p className="sign" align="center">Sign in</p>
                <p>{auth.error ? auth.error : null}</p>
                <Form>
                    <input 
                    className="mail" 
                    type="email" 
                    align="center" 
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
                    <input className="pass" 
                    type="password" 
                    align="center" 
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <button className="submit" align="center" onClick={handleSubmit}>Sign in</button>
                </Form>
            </Content>
        </Wrapper>
    )
}

export default Auth;
