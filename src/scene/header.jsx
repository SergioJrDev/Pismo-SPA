import React from 'react'
import { Link } from 'react-router-dom'

const header = () => (
    <header>
        <div className="container">
            <h1>SearchFlix</h1>
            <nav>
                <Link to="/inicio">Início</Link>
                <Link to="/favoritos">Favoritos</Link>
                <Link to="/">Sair</Link>
            </nav>
        </div>
    </header>
)

export default header;