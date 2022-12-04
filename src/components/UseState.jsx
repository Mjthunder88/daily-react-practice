import React, {useState} from 'react'

const UseState = () => {

    const [userInput, setuserInput] = useState('')

    const inputHandler = (event) => {
        setuserInput(event.target.value)
    }

    return <div className='card'>
        <input type="text" onChange={inputHandler} />
        <h1>useState: {userInput}</h1>
    </div>
}

export default UseState