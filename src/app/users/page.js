import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>

        <Link href='users/1'>
        <h1>user 1</h1>
        </Link>
        

        <Link href='users/2'>
        <h1>user 2</h1>
        </Link>
        

        <Link href='users/3'>
        <h1>user 3</h1>
        </Link>
        

        <Link href='users/4'>
        <h1>user 4</h1>
        </Link>
        
       
        

    </div>
  )
}

export default page