import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const countPlusHandler = (event) => {
        setCounter( (prevState) => {
            return prevState + 1
        })
    }

    const countMinusHandler = (event) => {
        if (counter !== 0) {
            setCounter((prevState) => {
                return prevState - 1
            })
        }
        }

        const countMultiply = (event) => {
            setCounter((prevState) => {
                return prevState * 5
            })
        }

        const countReset = (event) => {
            setCounter((prevState) => {
                return 0
            })
        }

        const countDivide = (event) => {
            setCounter((prevState) => {
                return prevState / 5
            })
        }


    return (
        <div className='card'>
            <h1>Count: {counter} </h1>
            <button onClick={countPlusHandler}>Add</button>
            <button onClick={countMinusHandler}>Minus</button>
            <button onClick={countMultiply}>Multiply by: 5</button>
            <button onClick={countDivide}>Divide by: 5</button>
            <button onClick={countReset}>Reset</button>
        </div>
    )
}

export default Counter