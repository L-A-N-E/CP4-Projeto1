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

            h1 {
                width: auto;
                text-transform: uppercase;
                color: ${Colors.black};
                font-size: 4rem;
            }

            p {
                text-align: center;
                color: ${Colors.black};
            }
        }
    }

`

// export const SectionBanner = styled.section