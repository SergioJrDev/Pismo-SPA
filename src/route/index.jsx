import React, { Component } from 'react'
import { BrowserRouter, Route, Link, Redirect, withRouter } from 'react-router-dom'
const logged = localStorage.getItem("loggin");

import Header from './../scene/header'
import Footer from './../scene/footer'
import Login from './../scene/login'
import Favoritos from './../scene/favorite'
import Home from './../scene/index'
import Register from './../scene/register'

const loggout = () => <p>Home</p>


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: localStorage.getItem("loggin"),
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                        <Route exact path="/" component={Home} />
                        <Route path="/login" render={() => (
                            this.state.login ?
                            <Redirect to="/procurar-filmes" /> :
                            <Login />
                        )}/>
                        <Route path="/cadastro" render={() => (
                            this.state.login ?
                            <Redirect to="/favoritos" /> :
                            <Register />
                        )}/>
                        <Route path="/favoritos" render={() => (
                            !this.state.login ?
                            <Redirect to="/login" /> :
                            <Favoritos />
                        )}/>

                        <Route path="/procurar-filmes" render={() => (
                            !this.state.login ?
                            <Redirect to="/login" /> :
                            <Home />
                        )}/>

                    <Footer />
                </div>
            </BrowserRouter>    
        )
    }
}
export default App;