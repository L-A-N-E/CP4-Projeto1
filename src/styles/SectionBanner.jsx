import styled from 'styled-components';
import BackgroundImagemBanner from '../assets/banner.png';
import Colors from '../constant/Colors';

export const SectionBanner = styled.section `
    
    section {
        width: 100%;
        height: 100dvh;
        background-image: url(${BackgroundImagemBanner});
        background-position: center;
        background-size: cover;
        display: flex;
        align-items: center;
        justify-content: center;

        div {
            width: 50%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(4px) saturate(200%);
            -webkit-backdrop-filter: blur(15px) saturate(200%);
            background-color: rgba(0, 0, 0, 0.49);
            border-radius: 12px;
            padding: 2rem 1rem;
            box-shadow: 1px 1px 100px ${Colors.white};

            h1 {
                width: auto;
                text-transform: uppercase;
                text-align: center;
                color: ${props => props.theme.color_home};
                font-size: 4rem;
            }

            p {
                text-align: center;
                color:  ${props => props.theme.color_home};;
            }
        }
    }
    @media (max-width: 800px) {
        section{
            div{
                width: 80%;
            }
        }
}

`