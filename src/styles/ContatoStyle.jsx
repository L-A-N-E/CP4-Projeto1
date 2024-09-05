import styled from 'styled-components';
import Colors from '../constant/Colors';

export const ContatoStyle = styled.section`
    section{
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${props => props.theme.background};

        .container-contato{
            width: 70%;
            height: 60vh;
            border-radius: 4px;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            justify-content: center;
            align-items: center;
            background-color: ${props => props.theme.color};

            h1{
                font-size: 2rem;
                text-transform: uppercase;
                color: ${props => props.theme.background};
            }

            form{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1.2rem;
                width: 50%;
                .input{
                    display: flex;
                    width: 80%;
                    flex-direction: column;
                    gap: 0.5rem;

                    .label-contato{
                        color: ${props => props.theme.background};
                        text-transform: uppercase;
                        font-weight: 700;
                    }
                    .input-contato{
                        padding: 10px 5px;
                        border-radius: 4px;
                        border: solid 3px ${props => props.theme.background};
                        background-color: ${props => props.theme.color};
                        color: ${props => props.theme.background};
                    }
                    .input-contato::placeholder{
                        color: ${props => props.theme.background};
                    }
                    .input-contato:focus{
                        background-color: ${props => props.theme.background};
                        color: ${props => props.theme.color};
                    }
                    
                }
                .btn-contato{
                        button{
                            padding: 10px 30px;
                            background-color: ${props => props.theme.background};
                            color: ${props => props.theme.color};
                            font-size: 1.2rem;
                            font-weight: 700;
                            border-radius: 4px;
                            text-transform: uppercase;
                            border: none;
                            transition: ease 1s;
                        }
                        button:hover{
                            background-color: ${props => props.theme.color};
                            color: ${props => props.theme.background};
                            border: solid 2px ${props => props.theme.background};
                            transform: scale(1.1);
                            transition: ease 1s;
                        }
                }
            }
        }
    }
`