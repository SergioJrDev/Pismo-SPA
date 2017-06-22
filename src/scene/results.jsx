import React, { Component } from 'react'
import _ from 'lodash'

export default class Results extends Component {
    constructor(props) {
        super(props)
        console.log(props);
    }

    renderMovies(itens) {
        return _.map(itens, (e, index) => (
            <div key={index}>
            <p>{e.show_title}</p>
            <a onClick={() => this.props.addFavorite([e])} href="#">Add Favorito</a>
            </div>)
        )
    }

    render() {
        const item = this.props.data;
        if(item.length > 0 ){
            return (
                <div className="container">
                    {this.renderMovies(item)}

                </div>
            )
        } else {
            return (
                <div className="container">
                    <p>{item.show_title}</p>
                    <a onClick={() => this.props.addFavorite([item])} href="#">Add Favorito</a>
                </div>
            )
        }

    }
}