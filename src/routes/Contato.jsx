import React from "react"
import { ContatoStyle } from "../styles/ContatoStyle"
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Contato = () =>{
    return(
        <>
            <ContatoStyle>
            <h2>Entre em contato conosco</h2>
            <form>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Digite seu nome" required />

                <label htmlFor="email">E-mail:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu email" required />

                <label htmlFor="assunto">Assunto:</label>
                <input type="text" id="assunto" name="assunto" placeholder="Descreva o assunto brevemente" required />

                <label htmlFor="message">Mensagem:</label>
                <textarea id="message" name="message" rows="4" placeholder="(Opcional)"></textarea>

                <button type="submit">ENVIAR</button>
            </form>

            <div className="contact-info">
                <p>Ou entre em contato diretamente:</p>
                <p>Email: contato@esporte.com</p>
                <p>Telefone: (DDD) xxxxx-xxxx</p>
            </div>

            <div className="social-links">
                {/* Ícones com links para as redes sociais */}
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <FaFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <FaInstagram />
                </a>
            </div>
            </ContatoStyle>
        </>
    )
}
export default Contato