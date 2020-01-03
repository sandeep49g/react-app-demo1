import React, {useState} from 'react'
import Button from './Button.js';

export default function Counter() {
    let [counter, setCounter] = useState(5);
    const increment = (incrementValue) => setCounter(counter + incrementValue);
    return (
        <div className='buttons-group'>
            <h5>Counter : <span>{counter}</span></h5>
            <Button buttonText='Increment ++10' incrementHandler = {increment} incrementValue={10} />
            <Button buttonText='Increment ++20' incrementHandler = {increment} incrementValue={20} />
            <Button buttonText='Increment ++30' incrementHandler = {increment} incrementValue={30} />
        </div>
    )
}
