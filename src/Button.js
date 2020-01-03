import React from 'react'

export default function Button(props) {
    const incrementValueHandler = () => props.incrementHandler(props.incrementValue);
    return (
        <div>
           <button onClick={incrementValueHandler}>{props.buttonText}</button>
        </div>
    )
}
