import React from 'react'

const Card = props => (
    <div className="card">
        <figure>
            <img src={props.data.poster} alt=""/>
        </figure>
        <div className="card_content">
            <h2>{props.data.show_title}</h2>

            <span className="descr">Elenco</span>
            <p>{props.data.show_cast}</p>

            <span className="descr">Diretor</span>
            <p>{props.data.director}</p>

            <span className="descr">Sinopse</span>
            <p>{props.data.summary}</p>
            <a className="btn btn-theme btn-icon" onClick={() => this.props.addFavorite([e])} href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
        </div>
    </div>
)

export default Card;