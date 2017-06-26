import React, { Component } from 'react';
import { SearchAPI } from './../services/index'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            title: '',
            director: '',
            actor: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.clearValues = this.clearValues.bind(this);
        
    }

    clearValues() {
        this.setState({...this.state, title: '', director: '',  actor: ''})
        SearchAPI(null, this.props.up);
    }

    handleSubmit(e) {
        SearchAPI(this.state, this.props.up);
        e.preventDefault();
    }

    handleChange(e) {
        this.setState({...this.state, [e.target.name]: e.target.value})
    }

    render() {
        return (
            <section className="space-default fix-header search-section">
                <div className="container">
                    <h2 className="page-title mg-bottom">Pesquisar filmes</h2>
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <label className="label" htmlFor="title">Título do filme</label>
                            <input
                                onChange={this.handleChange} 
                                value={this.state.title} 
                                id="title" 
                                name="title" 
                                className="input" 
                                type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="director">Director</label>
                            <input 
                                onChange={this.handleChange} 
                                value={this.state.director} 
                                id="director" 
                                name="director" 
                                className="input" 
                                type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="actor">Ator</label>
                            <input 
                                onChange={this.handleChange} 
                                value={this.state.actor} 
                                id="actor" 
                                name="actor" 
                                className="input" 
                                type="text"/>
                        </div>
                        <button className="btn btn-dark btn-uppercase" type="submit">Pesquisar</button>
                        <button onClick={this.clearValues} className="btn float-right btn-danger btn-uppercase" type="reset">Nova Pesquisa</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Search;