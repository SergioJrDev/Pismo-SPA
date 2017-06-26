import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getUsers, updateUsers, createUser} from './../services/localStorage'

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '', 
            email: '',
            pass: ''  
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        createUser(this.state);        
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    render() {
        return (
            <section className="space-default fix-header search-section">
                <div className="container">
                     <h2 className="page-title mg-bottom">Faça seu cadastro</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <label className="label" htmlFor="name">Nome</label>
                            <input
                                id="name" 
                                name="name" 
                                onChange={this.handleChange}
                                value={this.state.name}
                                className="input" 
                                required
                                type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="email">E-mail</label>
                            <input
                                id="email" 
                                name="email"
                                onChange={this.handleChange} 
                                value={this.state.email}
                                className="input" 
                                required
                                type="email"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="pass">Senha</label>
                            <input
                                id="pass" 
                                name="pass" 
                                required
                                onChange={this.handleChange}
                                value={this.state.pass}
                                className="input" 
                                type="password"/>
                        </div>
                        <button className="btn btn-dark btn-uppercase" type="submit">Criar conta</button>
                        <p className="alert">Ou <Link to="/login">Faça login</Link></p>
                    </form>
                </div>
            </section>
        )
    }
}
export default Register;