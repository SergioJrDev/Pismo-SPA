import React from 'react'

function handleClick(self, itens) {
    itens.favorite([itens.data])
    self.preventDefault();
};

const Card = props => (
    <div className="card">
        <figure>
            <img src={props.data.poster} alt=""/>
        </figure>
        <div className="card_content">
            <h2>{props.data.show_title}</h2>
            <a className="btn btn-theme btn-icon" onClick={self => handleClick(self, props)} href="#"><i className="fa fa-heart" aria-hidden="true"></i></a>
        </div>
    </div>
)

export default Card;