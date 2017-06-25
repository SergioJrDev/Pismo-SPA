import React from 'react'
import { getFavorites } from './../services/index'

function handleClick(self, itens) {
    itens.favorite([itens.data])
    self.target.innerHTML = 'Já adicionado aos favoritos <i class="fa fa-check" aria-hidden="true"></i>';
    self.target.classList.add('btn-disabled')
    self.preventDefault();
};

function isFav(e) {
    let favId = getFavorites().map(fav => fav.unit)
    return favId.includes(e);
}


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
            <a 
                className={isFav(props.data.unit) ? 'btn btn-theme btn-disabled btn-small' : 'btn btn-theme btn-small'}
                onClick={self => handleClick(self, props)} 
                href="#">
                {isFav(props.data.unit) ? 
                'Já adicionado aos favoritos' :
                'Adicionar aos favoritos' }
            </a>
        </div>
    </div>
)

export default Card;