import React from 'react'

const LoginDisplay = ({usernameInput, emailInput, passwordInput}) => {
    // console.log(emailInput)

    return (
        <div>
            <h1>Username: {usernameInput}</h1>
            <h2>Email: {emailInput}</h2>
            <h3>Password: {passwordInput}</h3>
        </div>
    )
}

export default LoginDisplay