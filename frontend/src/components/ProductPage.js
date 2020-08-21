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
                            <li className='list-group-item'><h1 className='font-weight-light text-left'>&#8377;{product.price}</h1>
                            <small className='text-muted float-left'>*Inclusive of taxes</small></li>
                            {/* button for add to cart and other things */}
                            <li className='list-group-item  mt-3 '>
                                <Link className='btn btn-success float-left' to='#'><i className='fa fa-cart-arrow-down'></i> Add to Bag</Link>
                                <Link className='btn btn-info ml-3' to='#'><i className='fa fa-bookmark mr-2'></i> Bookmark</Link>
                            </li>
                            <li className='list-group-item'>
                                <h5 className='font-weight-light text-left mt-3'>Select Size </h5>
                                <div class="btn-group btn-group-toggle mt-1 float-left" data-toggle="buttons">
                                    <label class="btn btn-secondary active">
                                        <input type="radio" name="options" id="option1" autocomplete="off" checked /> S
                                    </label>
                                    <label class="btn btn-secondary active">
                                        <input type="radio" name="options" id="option2" autocomplete="off" /> M
                                    </label>
                                    <label class="btn btn-secondary active">
                                        <input type="radio" name="options" id="option3" autocomplete="off" /> L
                                    </label>
                                </div>
                                
                            </li>  
                        </ul>   
                   </div>
                </div>
               
            </div>
            <div className='container p-5'>
                <span><h1 className='font-weight-light'>Product Details</h1></span>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item bg-secondary text-white w-50'>
                        <h5 className='font-weight-light'>{product.description.Fabric}</h5>
                    </li>
                    <li className='list-group-item bg-secondary text-white mt-2 w-50'>
                        <h5 className='font-weight-light'>{product.description.fit}</h5>
                    </li>
                    <li className='list-group-item bg-secondary text-white mt-2 w-50'>
                        <h5 className='font-weight-light'>{product.description.wash}</h5>
                    </li>
                </ul>
            </div>
        </div>
    )
} 

export default ProductPage