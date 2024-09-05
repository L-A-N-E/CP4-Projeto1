{/* Criar cards com os produtos*/}
import React from "react";
import { ProdutosStyle } from '../styles/ProdutosStyles'
import image1 from '../assets/tenisdecorrida.png'
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Card = () => {
return (
<>
<ProdutosStyle>
<section className="products">
    <div className="cards-tenis">
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
    <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
    </Swiper>
    <div className="cards-tenis">
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
        <div className="card">
            <div className="image_container">
                <img src={image1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Tênis de Corrida</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$500</span>
                </div>
                <button className="cart-button">
                <svg
                    className="cart-icon"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    />
                </svg>
                <span>Add to cart</span>
                </button>
            </div>
        </div>
    </div>
</section>
</ProdutosStyle>
</>
);
};
export default Card;
