import React, { Component } from 'react'
import Card from './../shared/card'

export default class Favorites extends Component {
    constructor(props) {
        super(props)
    }

    renderFavorites(itens) {
        return _.map(itens, (e, index) => (
            <div className="" key={index}>
                <Card favorite={this.props.removeFavorite} data={e} />
            </div>)
        )
    }

    render() {
        const item = this.props.favorite;
        return (
        <section className="space-default search-section">
            <div className="container">
                <p>Favoritos</p>
                {this.renderFavorites(item)}
            </div>
        </section>
        )
    }
}