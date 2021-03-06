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
            <div className="xs-6-12 sm-4-12 md-3-12" key={index}>
                <div className="card_favorite">
                    <figure>
                        <img src={e.poster} alt=""/>
                    </figure>
                    <div className="card_content">
                        <h2>{e.show_title}</h2>
                        <a 
                            className="btn btn-theme btn-small" 
                            onClick={self => this.updateFavorites(self, e)} 
                            href="#">
                            Remover dos favoritos</a>
                    </div>
                </div>
            </div>)
        )
    }

    render() {
        const item = this.state.favorite;
        return (

        <section className="fix-header">
            <div className="search-section space-default">
                <div className="container">
                    <h2 className="page-title">Meus Filmes Favoritos</h2>
                </div>
            </div>
            <div className="space-default">
                <div className="container">
                    <div className="grid">
                        {this.renderFavorites(item)}
                    </div>
                </div>
            </div>
        </section>
        )
    }
}