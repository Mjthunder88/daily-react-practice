import React, { useRef } from 'react'
import LoginDisplay from './LoginDisplay'



const LoginForm = props => {
    const usernameInput = useRef('')
    const emailInput = useRef('')
    const passwordInput = useRef('')


    const submitHandler = (event) => {
        event.preventDefault()
        console.log(usernameInput.current.value)
        console.log(emailInput.current.value)
        console.log(passwordInput.current.value)
    }

    return (
        <>
        <form >
            <label htmlFor="username">Username</label>
            <input type="text" ref={usernameInput} />
            <label htmlFor="email">Email</label>
            <input type="text" ref={emailInput}  />
            <label htmlFor="password">Password</label>
            <input type="text" ref={passwordInput}  />
            <button onClick={submitHandler}>Login</button>
        </form>
        <LoginDisplay 
        usernameInput={usernameInput.current.value}
        emailInput={emailInput.current.value}
        passwordInput={passwordInput.current.value}
        />
        </>
    )
}

export default LoginForm