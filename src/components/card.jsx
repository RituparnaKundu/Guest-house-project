import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Card = ({ images, title, description, price }) => {
    return (
        <div className="room-card">
            <Swiper navigation={true} modules={[Navigation]} className="room-slider" 
            style={{ width: "100%", height: "400px" }} 
             >
                {images?.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image} alt={`${title} ${index}`} className="room-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="room-content">
                <h3 className="room-title">{title}</h3>
                <p className="room-description">{description}</p>
                <div className="content-bottom">
                <p className="room-price">
                    Starting from <b>Rs. {price}/night</b>
                </p>
                <a href="#book-now" className="btn">
                    Book Now
                </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
