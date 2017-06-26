import React, { Component } from 'react'
import { checkAuth } from './../services/localStorage'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: '',
            error: false,    
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        const bool = checkAuth(this.state)
        if(bool === false) {
            this.setState({...this.state, error: true})
        }
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    render() {
        return (
            <section className="fix-header">
                <div className="space-default search-section">
                    <div className="container">
                        <h2 className="page-title mg-bottom">Faça seu login</h2>

                        <form onSubmit={this.handleSubmit}>
                            <fieldset className="input-group">
                                <legend className="hidden">E-mail</legend>
                                <label className="label" htmlFor="email">E-mail</label>
                                <input
                                    id="email" 
                                    name="email" 
                                    required
                                    onChange={this.handleChange}
                                    className="input" 
                                    type="email"/>
                            </fieldset>
                            <fieldset className="input-group">
                                <legend className="hidden">Senha</legend>
                                <label className="label" htmlFor="senha">Senha</label>
                                <input
                                    id="pass" 
                                    name="pass" 
                                    required
                                    onChange={this.handleChange}
                                    className="input" 
                                    type="password"/>
                            </fieldset>
                            <button className="btn btn-dark btn-uppercase" type="submit">Entrar</button>
                            <p className="alert">Ou <Link to="/cadastro">crie sua conta</Link></p>
                            {this.state.error &&
                                <p className="alert alert-danger">Usuário ou senha não encontrados.</p>
                            }
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default Login;