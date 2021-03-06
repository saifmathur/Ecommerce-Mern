import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import ProductPage from './components/ProductPage'

const App = ()=> (
    <BrowserRouter>
    {/* create header here so that its common in all pages */}
    <Header />
    <main>
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/product/:id' component={ ProductPage } />
        </Switch>
    </main>
    </BrowserRouter>
)

export default App;
