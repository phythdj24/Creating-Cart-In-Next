'use client'


import { useState } from "react"

export default function Counter (){

    const [count, setCount] = useState(0)

    const PlusCount = ()=>{
        setCount(count + 1)
    }
    return(
        <div>
        <h1>{count}</h1>
        <button onClick={PlusCount} >+</button>
        </div>
    )
}