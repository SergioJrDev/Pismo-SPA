import React, { Component } from 'react'
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
        switch (e.target.name) {
            case 'name':
                this.setState({...this.state, name: e.target.value})
                break;
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
                                type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="pass">Senha</label>
                            <input
                                id="pass" 
                                name="pass" 
                                onChange={this.handleChange}
                                value={this.state.pass}
                                className="input" 
                                type="password"/>
                        </div>
                        <button className="btn btn-dark btn-uppercase" type="submit">Criar conta</button>
                    </form>
                </div>
            </section>
        )
    }
}
export default Register;