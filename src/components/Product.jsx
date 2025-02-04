import React from 'react'

export default function Product({name,price}) {

    const styles= {
        width: "200px",
        height: "200px",
        backgroundColor: "lightblue",
        color:"white"
        
    }
  return (
    <div style={styles}>
        <h3>Product name: {name}</h3>
        <h3>Product price: {price}</h3>
      
    </div>
  )
}
