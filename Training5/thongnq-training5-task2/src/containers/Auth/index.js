import React from 'react'

import { Wrapper, Content, Form } from './Auth.styles'

const Auth = () => {
    return (
        <Wrapper>
            <Content>
                <p className="sign" align="center">Sign in</p>
                <Form>
                    <input className="mail" type="email" align="center" placeholder="Email"/>
                    <input className="pass" type="password" align="center" placeholder="Password"/>
                    <button className="submit" align="center">Sign in</button>
                </Form>
            </Content>
        </Wrapper>
    )
}

export default Auth;
