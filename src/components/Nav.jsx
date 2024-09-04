import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = ({toggleTheme}) => {
    return (
    <>
    <header>
        <div>
            <Link to={'/'}>Home</Link>
            <Link to={'/produtos'}>Produtos</Link>
            <Link to={'/sobre'}>Sobre</Link>
            <Link to={'/contato'}>Contato</Link>       
        </div>
        <div>  
            <button onClick={toggleTheme}>Mudar Tema</button>
        </div>
    </header>
    

    </>
    )
}
