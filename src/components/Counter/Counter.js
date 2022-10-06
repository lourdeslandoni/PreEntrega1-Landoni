import { useState } from 'react'
import './Counter.css'

const Counter = () => {
    const initial = 1
    let [count, setCount] = useState(initial)

    const decrement = () => {
        // accu = accu - 1
        if(count > 1) {
            setCount(count - 1)
        }
    }

    const increment = () => {
        // accu = accu + 1
        if(count <10)
        setCount(count + 1)
    }

    return (
        <div className='counter'>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button className='addToCart'>Agregar al Carrito</button>
        </div>
    )
}

export default Counter