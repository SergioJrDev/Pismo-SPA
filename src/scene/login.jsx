import React, { Component } from 'react'
import { checkAuth } from './../services/localStorage'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pass: ''    
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        checkAuth(this.state)
        e.preventDefault();
    }

    handleChange(e) {
        switch (e.target.name) {
            case 'email':
                this.setState({...this.state, email: e.target.value})
                break;
            case 'pass':
                this.setState({...this.state, pass: e.target.value})
                break;
            default:
                this.setState({...this.state})
            break;
        }
    }

    render() {
        return (
            <section className="fix-header">
                <div className="space-default search-section">
                    <div className="container">
                        <h2 className="page-title">Faça seu login</h2>
                    </div>
                </div>
                <div className="space-default">
                    <div className="container">
                        <form onSubmit={this.handleSubmit}>
                            <div className="input-group">
                                <label className="label" htmlFor="email">E-mail</label>
                                <input
                                    id="email" 
                                    name="email" 
                                    onChange={this.handleChange}
                                    className="input" 
                                    type="text"/>
                            </div>
                            <div className="input-group">
                                <label className="label" htmlFor="senha">Senha</label>
                                <input
                                    id="pass" 
                                    name="pass" 
                                    onChange={this.handleChange}
                                    className="input" 
                                    type="password"/>
                            </div>
                            <button className="btn btn-dark btn-uppercase" type="submit">Pesquisar</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}
export default Login;