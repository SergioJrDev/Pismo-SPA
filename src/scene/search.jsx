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
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDirectorChange = this.handleDirectorChange.bind(this);
        this.handleActorChange = this.handleActorChange.bind(this);

         this.clearValues = this.clearValues.bind(this);
        
    }

    clearValues() {
        this.setState({...this.state, title: ''})
        this.setState({...this.state, director: ''})
        this.setState({...this.state, actor: ''})
    }

    handleSubmit(e) {
        SearchAPI(this.state, this.props.up);
        this.clearValues();
        e.preventDefault();
    }

    handleTitleChange(e) {
        this.setState({...this.state, title: e.target.value})
    }

    handleDirectorChange(e) {
         this.setState({...this.state, director: e.target.value})
    }

    handleActorChange(e) {
         this.setState({...this.state, actor: e.target.value})
    }

    render() {
        return (
            <section className="space-default search-section">
                <div className="container">
                    {/*<h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. perspiciatis rem itaque voluptatibus assumenda.</h2>*/}
                    <form onSubmit={this.handleSubmit}>
                        <div className="input-group">
                            <label className="label" htmlFor="title">Título do filme</label>
                            <input
                                onChange={this.handleTitleChange} 
                                value={this.state.title} 
                                id="title" 
                                name="title" 
                                className="input" 
                                type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="director">Director</label>
                            <input 
                                onChange={this.handleDirectorChange} 
                                value={this.state.director} 
                                id="director" 
                                name="director" 
                                className="input" 
                                type="text"/>
                        </div>
                        <div className="input-group">
                            <label className="label" htmlFor="actor">Ator</label>
                            <input 
                                onChange={this.handleActorChange} 
                                value={this.state.actor} 
                                id="actor" 
                                name="actor" 
                                className="input" 
                                type="text"/>
                        </div>
                        <button className="btn btn-theme btn-uppercase" type="submit">Pesquisar</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Search;