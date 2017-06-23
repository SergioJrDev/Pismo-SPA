import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { getFavorites, removeFavorites } from './../services/index'

export default class Favorites extends Component {
    constructor(props) {
        super(props)
        this.state = {
            favorite: getFavorites(),
        }
        this.updateFavorites = this.updateFavorites.bind(this);
    }

    updateFavorites(self, e) {
        removeFavorites(e);
        this.setState({...this.state, favorite: getFavorites()})
        self.preventDefault();
    }

    renderFavorites(itens) {
        return _.map(itens, (e, index) => (
            <div className="" key={index}>
                <div className="card">
                    <figure>
                        <img src={e.poster} alt=""/>
                    </figure>
                    <div className="card_content">
                        <h2>{e.show_title}</h2>
                        <a 
                            className="btn btn-theme btn-icon" 
                            onClick={self => this.updateFavorites(self, e)} 
                            href="#">
                            <i className="fa fa-heart" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>)
        )
    }

    render() {
        const item = this.state.favorite;
        return (
        <section className="space-default search-section">
            <div className="container">
                <Link className="btn btn-dark btn-small" to="/inicio">Voltar</Link>
                <a href="#" className="btn btn-theme btn-small float-right">Limpar Lista</a>
                {this.renderFavorites(item)}
            </div>
        </section>
        )
    }
}