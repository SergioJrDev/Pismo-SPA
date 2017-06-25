import React from 'react'
import { Link } from 'react-router-dom'
const logged = localStorage.getItem("loggin");

const header = () => (
    <header>
        <div className="container">
            <h1>SearchFlix</h1>
            <nav>
                {logged ? <Link to="/inicio">Início</Link> : ''}
                {logged ? <Link to="/favoritos">Favoritos</Link> : ''}
                {logged ? <Link to="/favoritos">Sair</Link> : ''}
                {logged ? '' : <Link to="/">Login</Link>}
                {logged ? '' : <Link to="/cadastro">Cadastro</Link>}
                
                
            </nav>
        </div>
    </header>
)

export default header;