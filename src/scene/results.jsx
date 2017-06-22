import React, { Component } from 'react'
import _ from 'lodash'

export default class Results extends Component {
    constructor(props) {
        super(props)
    }

    renderMovies(itens) {
        return _.map(itens, (e, index) => (
            <div className="sm-6-12 md-4-12" key={index}>
                <div className="card">
                    <figure>
                        <img src={e.poster} alt=""/>
                    </figure>
                    <h2>{e.show_title}</h2>

                    <span className="descr">Elenco</span>
                    <p>{e.show_cast}</p>

                    <span className="descr">Diretor</span>
                    <p>{e.director}</p>

                    <span className="descr">Sinopse</span>
                    <p>{e.summary}</p>
                    <a className="btn btn-theme btn-icon" onClick={() => this.props.addFavorite([e])} href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
                </div>
            </div>)
        )
    }

    render() {
        const item = this.props.data;
        console.log(item);
        if(item.length > 0 ){
            return (
            <section className="space-default results-section">
                <div className="container">
                    <div className="grid">
                        {this.renderMovies(item)}
                    </div>
                </div>
            </section>
            )
        } else {
            return (
            <section className="space-default results-section">
                <div className="container">
                    <p>{item.show_title}</p>
                    <a onClick={() => this.props.addFavorite([item])} href="#">Add Favorito</a>
                </div>
             </section>
            )
        }

    }
}