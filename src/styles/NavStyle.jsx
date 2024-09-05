import styled from 'styled-components'

export const NavStyle = styled.header`
    .nav{
        grid-area: nav;
        background-color: ${props => props.theme.background};
    }

    .nav .container{
        display: flex;
        padding: 30px 40px;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 10vh;
    }

    .nav .logo{
        font-size: 2rem;
        font-weight: 800;
        color:${props => props.theme.color};
    }

    .nav ul{
        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
    }

    .nav ul .link{
        font-size: 1.2rem;
        text-transform: uppercase;
        text-decoration: none;
        color:${props => props.theme.color};;
        font-weight: 800;
    }

    /* Estilo do botão */
    .botaoTema button {
        background-color: ${props => props.theme.background};
        color:${props => props.theme.color};
        padding: 8px 16px;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 20px;
        cursor: pointer;
    }

    .botaoTema button:hover {
        background-color: ${props => props.theme.background};
    }
`;
