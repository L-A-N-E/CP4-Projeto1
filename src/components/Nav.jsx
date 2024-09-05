import React from 'react'
import { NavStyle } from '../styles/NavStyle'
import { Link } from 'react-router-dom'

export const Nav = ({toggleTheme}) => {
    return (
    <>
    <NavStyle>
    <header className="nav">
        <div className="container">
            <Link to="/"><h1 className="logo">Centauro</h1></Link>
            <ul>
                <Link to={'/'} className='link'>Home</Link>
                <Link to={'/produtos'} className='link'>Produtos</Link>
                <Link to={'/sobre'} className='link'>Sobre</Link>
                <Link to={'/contato'} className='link'>Contato</Link>
            </ul>     
            <div className="botaoTema">
                <button onClick={toggleTheme}>Mudar Tema</button>
            </div>
        </div>
    </header>
</NavStyle>



    </>
    )
}
