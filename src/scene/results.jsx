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
                    <Card favorite={this.props.addFavorite} data={e} />
                </div>)
            )
        };
        if(!_.isEmpty(itens)) {
            return (
                <Card favorite={this.props.addFavorite} data={itens} />
            )
        }
    }

    render() {
        const item = this.props.data;
        return (
            <section className="space-default results-section">
                <div className="container">
                    {item.error ? 
                        <p style={{color: '#fff', textAlign: 'center'}}>Nenhum filme encontrado :(</p> : 
                        <div className="grid">
                            {this.renderMovies(item)}
                        </div>
                    }

                </div>
            </section>
        )
    }
}