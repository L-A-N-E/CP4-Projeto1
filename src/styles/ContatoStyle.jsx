import styled from 'styled-components';

export const ContatoStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 40px;
    background-color: ${props => props.theme.background};

    h2 {
        font-size: 2.5rem;
        color: ${props => props.theme.color};
        margin-bottom: 20px;
        text-transform:uppercase;
        text-align: center;
    }

    form {
        width: 100%;
        max-width: 600px;
        display: flex;
        flex-direction: column;
    }

    label {
        font-size: 1.2rem;
        margin-bottom: 8px;
        color: ${props => props.theme.color};
    }

    input, textarea {
        width: 100%;
        padding: 10px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 1rem;
    }

    button {
        padding: 12px;
        font-size: 1.2rem;
        font-weight: bold;
        background-color:${props => props.theme.background};
        color: ${props => props.theme.color};
        border: none;
        border-radius: 5px;
        cursor: pointer;
    }

    .contact-info {
        margin-top: 40px;
        text-align: center;
    }

    .contact-info p {
        font-size: 1.2rem;
        color: ${props => props.theme.color};
    }

    .social-links {
        display: flex;
        justify-content: center;
        margin-top: 20px;
    }

    .social-links a {
        margin: 0 15px;
        font-size: 2rem;
        color: #333;
        text-decoration: none;
    }

    .social-links a:hover {
        color: ${props => props.theme.color};
    }
`;
