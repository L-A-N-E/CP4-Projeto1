import styled from 'styled-components';


export const ProdutosStyle = styled.section`
.products{
    background-color:${props=>props.theme.background}
}

.cards-tenis{
display:flex;
justify-content:center;
align-items:center;
height:45vh;
gap:2rem;
flex-wrap:wrap;
}

.card {
    cursor:pointer;
    position: relative;
    display: flex;
    align-items:center;
    flex-direction: column;
    gap: 0.75rem;
    padding: 2rem;
    width: 14rem;
    background-color: ${props => props.theme.color};
    border-radius: 5px;
    box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, opacity 0.3s ease;
}

.cards-tenis:hover .card {
    transform: scale(0.9);
    opacity: 0.8;
}

.cards-tenis .card:hover{
    transform: scale(1.2);
    opacity:1;
}
.image_container {
display:flex;
align-items:center;
justify-content:center;
position: relative;
width: 100%;
height: 8rem;
border-radius: 0.5rem;
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
text-wrap: nowrap;
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


`;


