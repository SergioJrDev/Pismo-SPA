import React from 'react'
import { Link } from 'react-router-dom'
import { loggout } from './../services/localStorage'

const logged = localStorage.getItem("loggin");

const header = () => (
    <header>
        <div className="container">
            <h1>MyFlix</h1>
        
            {logged ? (
            
                <nav>
                    <Link to="/procurar-filmes">Procurar Filmes</Link>
                    <Link to="/favoritos">Favoritos</Link>
                    <Link to="/" onClick={() => loggout()}>Sair</Link>
                </nav>
           
            ) : (
                <nav>
                    <Link to="/login">Login</Link>
                    <Link to="/cadastro">Cadastro</Link>
                </nav>
            )}                
        </div>
    </header>
)

export default header;