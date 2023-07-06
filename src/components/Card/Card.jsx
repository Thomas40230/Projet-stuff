import "./Card.css";
import Maps from "../../Maps.json";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";


function Card(props) {

    const [ maps ] = useState(Maps);
    
    if (props.actif) {

        return (
            <section className="gallery">
            <>
                <Swiper
                    centeredSlides={false}
                    grabCursor={true}
                    spaceBetween={0}
                    keyboard={{
                    enabled: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                    breakpoints={{

                        567: {
                            width: 567,
                            slidesPerView: 1,
                        },
                        768: {
                            width: 768,
                            slidesPerView: 1,
                            
                        },
                        893: {
                            width: 893,
                            slidesPerView: 3,
                        },
                        1219: {
                            width: 1219,
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1455: {
                            width: 1455,
                            slidesPerView: 5,
                        },
                        // when window width is >= 1690px
                        1690: {
                            width: 1690,
                            slidesPerView: 6,
                        },
                      }}

                    className="mySwiper"
                >
                    {maps.filter(Maps => Maps.Pool === 'Active').map((Map) => (
                        <SwiperSlide>
                            <div className="card_container">   
                                <Link to={`/Map/${Map.id}` } key={Map.id} className="card_link">
                                    <div className="card_figure">
                                        <img 
                                            className="card_img" 
                                            src={process.env.PUBLIC_URL + Map.picture} 
                                            alt="Illustration de la map"
                                        />
                                    <div className="container_icon">
                                        <img 
                                        className="icon_map"
                                        src={Map.logo}
                                        alt="Logo de la map"
                                        />
                                    </div>    
                                    <div className="card_title">
                                        {Map.name}
                                    </div>
                                    </div>
                                </Link>
                            </div>    
                        </SwiperSlide>
                    ),   

                    )}
                </Swiper>
            </>
            </section>      
        ) 
    
        } else {
            return (
                <section className="gallery">
                <>
                    <Swiper
                    centeredSlides={false}
                    grabCursor={true}
                    keyboard={{
                    enabled: true,
                    }}
                    navigation={true}
                    modules={[Keyboard, Scrollbar, Navigation, Pagination]}

                    className="mySwiper"
                    >
                    {maps.filter(Maps => Maps.Pool === 'Reserve').map((Map) => (
                            <SwiperSlide>
                                <div className="card_container">   
                                    <Link to={`/Map/${Map.id}` } key={Map.id} className="card_link">
                                        <div className="card_figure">
                                            <img 
                                                className="card_img" 
                                                src={process.env.PUBLIC_URL + Map.picture} 
                                                alt="Illustration de la map"
                                            />
                                        <div className="container_icon">
                                            <img 
                                            className="icon_map"
                                            src={Map.logo}
                                            alt="Logo de la map"
                                            />
                                        </div>    
                                        <div className="card_title">
                                            {Map.name}
                                        </div>
                                        </div>
                                    </Link>
                                </div>    
                            </SwiperSlide>
                    ),   

                    )}
                    </Swiper>
                </>    
                </section>
            )      
            }
}

export default Card;