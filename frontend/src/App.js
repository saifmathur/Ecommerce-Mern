import React from 'react';
import './App.css';
import './static/css/carousel.css'
import './static/css/logo.css'
import logo from './static/hanger.jpg'
import { Link } from 'react-router-dom'

function App() {
  return ( 
    <div className='bg-light vh-100'>
        <div className="w-100" style={{ width: "100%" }}>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100 scrolling-navbar">
            <Link to="index.html" className="navbar-brand" >
                <img src={logo} className="logo-class rounded-circle z-depth-2 bg-dark" alt="100x100"/>
                <span className="lead ml-1"> WhatToWear</span>
            </Link>
            <button className="navbar-toggler mt-1" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    <li className="nav-link">
                        <Link className="nav-link mr-2" to="index.html">
                            <i class = 'fas fa-shopping-cart'></i> Cart
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link mr-2" to="index.html">
                            <i class = 'fas fa-home'></i> Home
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link className="nav-link mr-2" to="signup.html">
                            <i className='fas fa-edit'></i> Sign Up
                        </Link>
                    </li>
                    <li className="nav-link waves-effect">
                        <Link className="nav-link" to="signin.html">
                            <i className='fas fa-sign-in-alt'></i> Sign In
                        </Link>
                    </li>
                   
                </ul>
            </div>
        </nav>
        
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
                   
                        <div className="col-lg-3 col-md-6 mb-4">
                   
                            <div className="card">
                   
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg" className="card-img-top" alt="" />
                                    <Link>
                                    <div className="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                   

                   
                                <div className="card-body text-center">
                   
                                    <Link to="" className="grey-text">
                                    <small className="text-muted nav-link text-dark">Shirt</small>
                                    </Link>
                                    <h5>
                                    <strong>
                                        <Link to="" className="card-title nav-link text-primary">Denim shirt
                                        <span className="badge badge-secondary lead ml-2">New!</span>
                                        </Link>
                                    </strong>
                                    </h5>

                                    <h4 className="font-weight-bold blue-text lead">
                                        &#8377; 2400
                                        </h4>

                                </div>
                            </div>
                   

                        </div>
                   

                   
                        <div className="col-lg-3 col-md-6 mb-4">
                   
                            <div className="card">
                   
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg" className="card-img-top" alt="" />
                                    <Link>
                                        <div className="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                   

                   
                                <div className="card-body text-center">
                   
                                    <Link to="" className="grey-text">
                                        <small className="text-muted nav-link text-dark">Sports wear</small>
                                    </Link>
                                    <h5>
                                        <strong>
                                            <Link to="" className="card-title nav-link text-primary">Red Sweatshirt</Link>
                                        </strong>
                                    </h5>

                                    <h4 className="font-weight-bold blue-text lead">
                                        &#8377; 1999
                                        </h4>

                                </div>
                   

                            </div>
                   

                        </div>
                   

                   
                        <div className="col-lg-3 col-md-6 mb-4">
                   
                            <div className="card">
                   
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg" className="card-img-top" alt="" />
                                    <Link>
                                    <div className="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                   

                   
                                <div className="card-body text-center">
                   
                                    <Link to="" className="grey-text">
                                        <small className="text-muted nav-link text-dark">Sport wear</small>
                                    </Link>
                                    <span className="badge badge-warning lead">Bestseller!</span>
                                    <h5>
                                    <strong>
                                        <Link to="" className="card-title nav-link text-primary">Grey Sweatshirt
                                        </Link>
                                    </strong>
                                    </h5>

                                    <h4 className="font-weight-bold blue-text lead">
                                        &#8377; 4199
                                        </h4>

                                </div>
                   

                            </div>
                   

                        </div>
                   

                   
                        <div className="col-lg-3 col-md-6 mb-4">
                   
                   
                            <div className="card">

                   
                                <div className="view overlay">
                                    <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg" className="card-img-top" alt="" />
                                    <Link>
                                    <div className="mask rgba-white-slight"></div>
                                    </Link>
                                </div>
                   

                   
                                <div className="card-body text-center">
                   
                                    <Link to="" className="grey-text">
                                        <small className="text-muted nav-link text-dark">Outwear</small>
                                    </Link>
                                    <h5>
                                    <strong>
                                        <Link to="" className="card-title nav-link text-primary">Black Denim jacket</Link>
                                    </strong>
                                    </h5>

                                    <h4 className="font-weight-bold blue-text lead">
                                        &#8377; 999
                                        </h4>

                                </div>
                   

                            </div>
                   

                        </div>
                   

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
  );
}

export default App;
