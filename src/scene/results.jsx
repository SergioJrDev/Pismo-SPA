import React, { Component } from 'react'

export default class Results extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const item = this.props.data.result;
        return (
            <div className="container">
                <p>{item.show_title}</p>
                <a onClick={() => this.props.addFavorite([item])} href="#">Add Favorito</a>
            </div>
        )

    }
}