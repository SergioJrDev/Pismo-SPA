import React, { Component } from 'react'

export default class Favorites extends Component {
    constructor(props) {
        super(props)
    }

    renderFavorites() {
       
    }

    render() {
        return (
            <p>
             {console.log('Fav', this.props.favorite.length)}
            </p>
        )
    }
}