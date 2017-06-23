import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './../scene/header'
import Footer from './../scene/footer'
import Login from './../scene/login'
import Favoritos from './../scene/favorite'
import Home from './../scene/index'

const App = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Route exact path="/" component={Login}/>
                <Route path="/favoritos" component={Favoritos}/>
                <Route path="/inicio" component={Home} />
            <Footer />
        </div>
    </BrowserRouter>
)

export default App;