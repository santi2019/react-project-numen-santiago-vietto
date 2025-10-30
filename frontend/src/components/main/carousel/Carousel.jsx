import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';     
import { Navigation, Pagination, Autoplay } from 'swiper/modules';


const Carousel = () => {
    
     const images = [
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/02a21b28b7234015a4b5e291854926bf_9366/TOUR_JACQUARD_JERSEY_Blue_KT3436_21_model.jpg",
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/85804a9247144d6480f31180551883cb_9366/TOUR_ADIDAS_ORIGINALS_OVERSIZED_CREW_Sweatshirt_Blue_KT3453_21_model.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3b2f4d09cbcc4d3591d2cce80ab6bbdb_9366/TOUR_3-STRIPES_T-Shirt_White_KT3446_21_model.jpg",
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/63cf34a38597458f85290b38fca65e74_9366/TOUR_3-STRIPES_LONGSLEEVE_TEE_Black_KT3428_000_plp_model.jpg",
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d09f48c97a71492f8c271e6899caf4b1_9366/TOUR_COACH_JACKET_Beige_HZ0878_23_hover_model.jpg",
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/593624771d5a4043a5ea2e99fc75ba66_9366/TOUR_3-STRIPES_LONGSLEEVE_TEE_Blue_KT3427_25_model.jpg",
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/f2f67e1bf47a4e62bde856740de167a6_9366/TOUR_BUCKET_HAT_Brown_KK9154_28_model_hover.jpg",
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/ee46a3e223c14020a3c919ccb4fd8872_9366/TOUR_3-STRIPES_T-Shirt_Black_KT3445_25_model_hover.jpg",
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/28a143dd881e4d50bfdc989848f77c49_9366/TOUR_JACQUARD_JERSEY_Black_KT3437_000_plp_model.jpg",
        "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/e7df7d95146d49e394787ddf7346bce9_9366/TOUR_BUCKET_HAT_Blue_KQ7990_28_model_hover.jpg"
    ]

  return (
    <>
        <div className="carouselContainer">
            <div className="carouselTitleContainer">
                <h2>Stay Young</h2>
            </div>
            <div className="carousel">
                <div className="swiperContainer">
                    <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={4}
                    spaceBetween={20}
                    pagination={{ el: ".pagination", clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    observer={true}
                    observeParents={true}
                    observeSlideChildren={true}
                    resizeObserver={true}
                    onInit={(sw) => sw.update()}
                    breakpoints={{
                        "@0.00": { slidesPerView: 1, spaceBetween: 25 },
                        "@0.50": { slidesPerView: 1, spaceBetween: 25 },
                        "@1.00": { slidesPerView: 2, spaceBetween: 25 },
                        "@1.25": { slidesPerView: 2, spaceBetween: 20 },
                        "@1.50": { slidesPerView: 3, spaceBetween: 30 },
                        "@1.75": { slidesPerView: 4, spaceBetween: 20 },
                    }}>
                        {images.map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`carousel-item-${index}`}/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="pagination"/>
            </div>
        </div>
      
    </>
  )
}

export default Carousel
