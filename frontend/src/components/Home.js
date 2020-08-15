import React from 'react'
import '../App.css';
import '../static/css/carousel.css'
import '../static/css/logo.css'
import data from '../data'

import { Link } from 'react-router-dom'

const Home = (props)=>{
    return(
        <div className='bg-light vh-100'>
        <div className="w-100" style={{ width: "100%" }}>
        
        
        <div className='carousel slide bg-dark carousel-fade' id="carousel-example-1z" data-ride="carousel">
            
            <ol className="carousel-indicators">
                <li data-target="#carousel-example-1z" data-slide-to="0" className="active"></li>
                <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                <li data-target="#carousel-example-1z" data-slide-to="2"></li>
            </ol>
            {/* carousel start */}
            <div className="carousel-inner" role="listbox">
            
                <div className="carousel-item active">
                    <div className="view pt-5 carousel-div">
            
                        <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
            
                         <div className="text-center text-black mx-5 mt-3 wow fadeIn">
                            <h1 className="mb-4 display-4">
                                <strong>Shop your favourite trendy styles</strong>
                            </h1>
        
                            <p className="lead mt-2">
                                <strong>Some content here</strong>
                            </p>
        
                            <p className="mb-5 pb-5 mt-4 lead d-none d-md-block">
                                <strong>Clothing something something</strong>
                            </p>
        
    
                        </div>
            
                        </div>
            
                    </div>
                </div>
            
        
            
                <div className="carousel-item">
                    <div className="view pt-5 carousel-grey">
        
            
                        <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
        
            
                         <div className="text-center text-light mx-5 mt-3 wow fadeIn">
                            <h1 className="mb-4 display-4">
                                <strong>Shop your favourite trendy styles</strong>
                            </h1>
        
                            <p className="lead mt-2">
                                <strong>Some content here</strong>
                            </p>
        
                            <p className="mb-5 pb-5 mt-4 lead d-none d-md-block">
                                <strong>Clothing something something</strong>
                            </p>
        
    
                        </div>
            
        
                        </div>
            
        
                    </div>
                </div>
            
        
            
                <div className="carousel-item">
                    <div className="view pt-5 carousel-hanger">
        
            
                        <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
        
            
                            <div className="text-center text-white mx-5 mt-3 wow fadeIn">
                                <h1 className="mb-4 display-4">
                                    <strong>Shop your favourite trendy styles</strong>
                                </h1>
            
                                <p className="lead mt-2">
                                    <strong>Some content here</strong>
                                </p>
            
                                <p className="mb-5 pb-5 mt-4 lead d-none d-md-block">
                                    <strong>Clothing something something</strong>
                                </p>
            
        
                            </div>
            
        
                        </div>
            
        
                    </div>
                </div>
            
            </div>
            
            <Link className="carousel-control-prev" to="#carousel-example-1z" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </Link>
            <Link className="carousel-control-next" to="#carousel-example-1z" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </Link>
            
        </div>
        <main>
            <div className="container">
            
                <nav className="navbar navbar-expand-lg navbar-light mdb-color lighten-3 mt-3 mb-5">

            
                    <span className="navbar-brand">Categories</span>

            
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

            
                    <div className="collapse navbar-collapse" id="basicExampleNav">

                
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="#">All
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Shirts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Sports wear</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Outwears</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Shoes</Link>
                            </li>
                        </ul>
                

                        <form className="form-inline">
                            <div className="md-form my-0">
                                <i className="fa fa-search"><input className="form-control mr-sm-2 ml-2" type="text" placeholder="Search" aria-label="Search" /></i>
                            </div>
                        </form>
                     </div>
                

                </nav>
                
                <section className="text-center mb-4 lead ">
                
                    <div className="row wow fadeIn">
                    {
                        data.products.map(product=> 
                        
                        <div className="col-lg-3 col-md-6 mb-3">
                        
                            <div className="card">
                                    {/* "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" */}
                                    <div className="view overlay">
                                        <Link to={'/product/' + product._id} >
                                            <img src={product.image} className="card-img-top" alt="" />
                                        
                                            <div className="mask rgba-white-slight"></div>
                                        </Link>
                                    </div>
                                    <div className="card-body text-center">
                    
                                        <Link to="" className="grey-text">
                                            <small className="text-muted nav-link text-dark">{product.category}</small>
                                        </Link>
                                        <Link className='text-dark nav-link '>
                                            <span className='nav-link'>{product.brand}</span>
                                        </Link>
                                        <h5>
                                        <strong>
                                            <Link to={ "/product/" + product._id } className="card-title nav-link text-primary">{product.title}
                                                {/* <span className="badge badge-secondary lead ml-2">New!</span> */}
                                            </Link>
                                            
                                        </strong>
                                        </h5>

                                        <h4 className="font-weight-bold blue-text lead">
                                            &#8377; {product.price}
                                            </h4>

                                    </div>
                                
                                
                            </div>
                        
                        

                        </div>
                        
                        )} 
                    </div>
                 
                  
                </section>
                   
            </div>
        </main>
 
 
 
        <footer className="page-footer text-center font-small mt-4 wow fadeIn">
            <div className="footer-copyright py-3">
                <Link className="lead nav-link text-dark" to='index.html'><b>&copy; 2020 WhatToWear</b></Link>
            </div>
        </footer>
    </div>
    </div>
    )
}

export default Home