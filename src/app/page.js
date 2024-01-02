'use client'

import { useEffect, useState } from 'react'
import './style.css'


export default function Home() {

  const [product, setProduct]= useState([])

  useEffect(()=>{
      const FetchData = async ()=>{
           const res = await fetch("https://dummyjson.com/products?limits=10")
           const data = await res.json()
           setProduct(data.products)
           console.log(data);
           

      }
      


      FetchData()
  },[])

  
  return (
   <div>

   {
    product.map((item)=>{
      return( 
      <div key={item.id}>
      <h1> {item.title} </h1>
      <img src={item.thumbnail} alt="" />
      </div>
      
      )
    })
   }
   </div>
  )
}
