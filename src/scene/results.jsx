import React, { Component } from 'react'
import _ from 'lodash'
import Card from './../shared/card'

export default class Results extends Component {
    constructor(props) {
        super(props)
    }

    renderMovies(itens) {
        if(itens.length > 0) {
            return _.map(itens, (e, index) => (
                <div className="" key={index}>
                    <Card data={e} />
                </div>)
            )
        } else {
             return () => <p>oi</p>
        }
    }

    render() {
        const item = this.props.data;
        return (
            <section className="space-default results-section">
                <div className="container">
                    <div className="grid">
                        {this.renderMovies(item)}
                    </div>
                </div>
            </section>
        )
    }
}