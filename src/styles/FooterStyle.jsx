import styled from 'styled-components';
import Colors from '../constant/Colors';

export const FooterStyle = styled.footer `

    footer {
        width: 100%;
        height: 10vh;
        display: grid;
        align-items:center;
        justify-content: center;
        background-color: ${props=> props.theme.background};
        color: ${props=> props.theme.color}
    }

`