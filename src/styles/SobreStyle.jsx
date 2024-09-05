import styled from 'styled-components';
import Colors from '../constant/Colors';

export const SobreStyle = styled.section`
  .container {
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    background-color: ${props => props.theme.background};

    .conteudo {
      max-width: 700px;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      padding: 1.5rem;

      .h1-sobre {
        font-size: 3rem;
        text-transform: uppercase;
        border-bottom: solid 1px ${props => props.theme.borderColor};
        color: ${props => props.theme.color};
      }

      .p-sobre {
        font-size: 1.1rem;
        text-align: justify;
        color: ${props => props.theme.color};
      }
    }

    .img-sobre{
      border: solid 4px ${props => props.theme.color};
      padding: 10px;
      img{
        width: 100%;
        height: 70vh;
        border: solid 4px ${props => props.theme.color};
      }
    }
  }
`;
