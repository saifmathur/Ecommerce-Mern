import React, { Fragment } from 'react'
import data from '../data'
import { Link } from 'react-router-dom'

const ProductPage = (props) => {
    console.log(props.match.params.id)
    const product = data.products.find(x=> x._id === props.match.params.id)
    return(
        <div> 
            <div>
                <Fragment>
                    
                    <Link to='/' className='ml-3 mt-3 mb-4 btn btn-secondary border '><i className='fa fa-arrow-left  ml-3' aria-hidden='true'></i>  Back to results</Link>
                </Fragment>
            </div>
            <div className='container'>
                
                <div className='mt-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    <h1 className='display-4'>{product.brand}</h1>
                    <span><small className='lead ml-1'> {product.title}</small></span>                     
                    <div className='text-center lead row'>
                        <img src={product.image} alt="100x100"/>
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'><h1 className='font-weight-light'>&#8377;{product.price}</h1>
                            <small className='text-muted ml-5'>*Inclusive of all taxes</small></li>
                            {/* button for add to cart and other things */}
                            
                        </ul>   
                   </div>
                </div>
               
            </div>
            {/* <h1>{product.title}</h1>
            <h1>{product.price}</h1> */}
        </div>
    )
} 

export default ProductPage