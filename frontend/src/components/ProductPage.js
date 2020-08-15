import React from 'react'
import data from '../data'


const ProductPage = (props) => {
    console.log(props.match.params.id)
    const product = data.products.find(x=> x._id === props.match.params.id)
    return(
        <div>
            <h1>{product.title}</h1>
            <h1>{product.price}</h1>
        </div>
    )
} 

export default ProductPage