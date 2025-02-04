import React from 'react';
import Product from './Product';


export default function ProductList() {
  return (
    <div className="product-list">
        <Product name="apple" price="5"></Product>
        <Product name="banana" price="10"></Product>
        <Product name="orange" price="15"></Product>  
    </div>
  )
}
