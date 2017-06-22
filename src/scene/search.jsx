import React, { Component } from 'react';
import { SearchAPI } from './../services/index'

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            term: {
                title: 's',
                director: '',
                actor: ''
            }
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDirectorChange = this.handleDirectorChange.bind(this);
        this.handleActorChange = this.handleActorChange.bind(this);
        
    }

    handleSubmit(e) {
        var [title, director, actor] = [...this.state];
        console.log(actor);

        // SearchAPI(this.state.value, this.props.up);
        e.preventDefault();
    }

    handleTitleChange(e) {
        this.setState({term: {title: e.target.value}})
    }

    handleDirectorChange(e) {
        this.setState({term: {director: e.target.value}})
    }

    handleActorChange(e) {
        this.setState({term: {actor: e.target.value}})
    }

    render() {
        return (
        <div className="container">
            <form onSubmit={this.handleSubmit}>
                <div className="input-group">
                    <label className="label" htmlFor="title">Título do filme</label>
                    <input
                        onChange={this.handleTitleChange} 
                        value={this.state.term.title} 
                        id="title" 
                        name="title" 
                        className="input" 
                        type="text"/>
                </div>
                <div className="input-group">
                    <label className="label" htmlFor="director">Director</label>
                    <input onChange={this.handleDirectorChange} value={this.state.term.director} id="director" name="director" className="input" type="text"/>
                </div>
                <div className="input-group">
                    <label className="label" htmlFor="actor">Ator</label>
                    <input onChange={this.handleActorChange} value={this.state.term.actor} id="actor" name="actor" className="input" type="text"/>
                </div>
                <button type="submit">Pesquisar</button>
            </form>
        </div>
        )
    }
}

export default Search;