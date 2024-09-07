import React, { useState } from 'react';
import { NavStyle } from '../styles/NavStyle';
import { Link } from 'react-router-dom';

export const Nav = ({ toggleTheme }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <NavStyle>
                <header className="nav">
                    <div className="container">
                        <Link to="/"><h1 className="logo">Esportes</h1></Link>

                        {/* Ícone do menu hambúrguer */}
                        <div className="hamburger" onClick={toggleMenu}>
                            &#9776; {/* Símbolo das três barrinhas */}
                        </div>

                        <ul className={menuOpen ? 'active' : ''}>
                            <Link to="/" className="link">Home</Link>
                            <Link to="/produtos" className="link">Produtos</Link>
                            <Link to="/sobre" className="link">Sobre</Link>
                            <Link to="/contato" className="link">Contato</Link>
                            <div className="botaoTema">
                                <button onClick={toggleTheme}>Mudar Tema</button>
                            </div>
                        </ul>
                    </div>
                </header>
            </NavStyle>
        </>
    );
};
