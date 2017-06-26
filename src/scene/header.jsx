import React from 'react'
import { Link } from 'react-router-dom'
import { loggout } from './../services/localStorage'

const logged = localStorage.getItem("loggin");

const header = () => (
    <header>
        <div className="container">
            <Link to="/"><h1>MyNetflix</h1></Link>
        
            {logged ? (
            
                <nav>
                    <Link to="/procurar-filmes">Procurar Filmes</Link>
                    <Link to="/favoritos">Favoritos</Link>
                    <Link to="/login" onClick={() => loggout()}>Sair</Link>
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