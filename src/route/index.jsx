import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import Header from './../scene/header'
import Footer from './../scene/footer'
import Login from './../scene/login'
import Favoritos from './../scene/favorite'
import Home from './../scene/index'
import Register from './../scene/register'

const App = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Route exact path="/" component={Login}/>
                <Route path="/cadastro" component={Register} />
                <Route path="/favoritos" component={Favoritos}/>
                <Route path="/inicio" component={Home} />
            <Footer />
        </div>
    </BrowserRouter>
)

export default App;