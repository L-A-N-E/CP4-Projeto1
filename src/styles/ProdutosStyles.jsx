import styled from 'styled-components';


export const ProdutosStyle = styled.section`
    .products{
        background-color:${props=>props.theme.background}
    }

    .cards-tenis {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px;
}

    .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background-color: ${props=>props.theme.color};
    border-radius: 10px;
    max-width: 100%;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

    .cards-tenis:hover .card {
        transform: scale(0.9);
        opacity: 0.8;
    }

    .cards-tenis .card:hover{
        transform: scale(1.1);
        opacity:1;
    }
    .image_container img {
    max-width: 100%;
    height: 120px;
    width:auto;
    object-fit: cover;
    transition: transform 0.3s ease;
    }

    .produto {
        overflow-y:visible;
        overflow-x:visible;
        width: 210px;
        height: auto;
        transition: transform 0.3s ease;
    }

    .produto:hover {
        transform: scale(1.2)
    }


    .title {
        width: 100%;
        font-size: 1rem;
        font-weight: 600;
        color: ${props => props.theme.background};
    }

    .action {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    .price {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.background};
    }

    .cart-button {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        padding: 0.5rem;
        width: 100%;
        background-color: ${props => props.theme.background};
        font-size: 0.75rem;
        font-weight: 500;
        color: ${props => props.theme.color};
        border: 2px solid ${props => props.theme.background};
        border-radius: 0.5rem;
    }
    .cart-button:hover{
        background-color: ${props => props.theme.color};
        color: ${props => props.theme.background};
    }

    .cart-button .cart-icon {
    width: 1rem;
    }

    .swiper {
        width: 100%;
        height:425px;
        cursor:grab;
        margin-top:50px;
        margin-bottom:50px;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: ${props=>props.theme.background};

    /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 1650px) {
    .cards-tenis {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        width: 100%;
        margin: 0 auto;
    }

    .cards-tenis:hover .card {
        transform: scale(0.9);
        opacity: 0.8;
    }

    .cards-tenis .card:hover{
        transform: scale(1.1);
        opacity:1;
    }

    .image_container img {
    height:150px;
    width:200px;
    }
    }

    @media (max-width: 770px) {
    .cards-tenis {
        grid-template-columns: 1fr;
    }

    .card{
        height:400px;
        margin-left:30px;
        margin-right:30px;
    }

    .image_container img {
    height:300px;
    width:250px;
    }

    .title{
        font-size:25px;
    }

    .cart-button {
        font-size: 0.9rem;
        padding: 10px;
    }

    .price span {
        font-size: 1.2rem;
    }

    .swiper{
        height:300px;
    }

    
    }

`;


