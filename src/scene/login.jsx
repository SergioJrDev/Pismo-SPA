import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        console.log('submit');
    }

    render() {
        return (
            <section className="space-default search-section">
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <label className="label" htmlFor="email">E-mail</label>
                            <input
                                id="email" 
                                name="email" 
                                className="input" 
                                type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="senha">Senha</label>
                            <input
                                id="senha" 
                                name="senha" 
                                className="input" 
                                type="password"/>
                        </div>
                        <button className="btn btn-dark btn-uppercase" type="submit">Pesquisar</button>
                    </form>
                </div>
            </section>
        )
    }
}
export default Login;