{/* Criar cards com os produtos*/}
import React from "react";
import { ProdutosStyle } from '../styles/ProdutosStyles';
import { Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import image1 from '../assets/tenisdecorrida.png';
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import banner5 from '../assets/banner5.jpg'
import produto1 from '../assets/produto1.png'
import produto2 from '../assets/produto2.png'
import produto3 from '../assets/produto3.png'
import produto4 from '../assets/produto4.png'
import produto5 from '../assets/produto5.png'
import produto6 from '../assets/produto6.png'
import produto7 from '../assets/produto7.png'
import produto8 from '../assets/produto8.png'
import produto9 from '../assets/produto9.png'
import produto10 from '../assets/produto10.png'

const Card = () => {
return (
<>
<ProdutosStyle>
<section className="products">
    <div className="cards-tenis">
        <div className="card">
            <div className="image_container">
                <img className="produto" id="produto1" src={produto1} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira CR7</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$999</span>
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
                <img className="produto" id="produto2" src={produto2} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$600</span>
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
                <img className="produto" src={produto3} alt="Produto1" />
            </div>
            <div className="title">
                <span>Mercurial NIKE</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$800</span>
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
                <img className="produto" src={produto4} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
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
                <img className="produto" src={produto5} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
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
                    delay: 5500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={banner5} alt="" /></SwiperSlide>
    </Swiper>
    <div className="cards-tenis">
        <div className="card">
            <div className="image_container">
                <img className="produto" src={produto6} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$700</span>
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
                <img className="produto" src={produto7} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$900</span>
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
                <img className="produto" src={produto8} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
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
                <img className="produto" src={produto9} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
            </div>
            <div className="action">
                <div className="price">
                <span>R$400</span>
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
                <img className="produto" src={produto10} alt="Produto1" />
            </div>
            <div className="title">
                <span>Chuteira NIKE</span>
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
