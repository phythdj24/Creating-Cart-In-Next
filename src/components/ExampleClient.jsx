'use client'

import Exampleserver from "./Exampleserver"

const ExampleClient = () => {
    console.log("I am Client Components")
  return (
    <div>

        <h3>this is client componengts</h3>
        <Exampleserver />
    </div>
  )
}

export default ExampleClient