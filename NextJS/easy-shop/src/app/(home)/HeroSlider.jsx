/** @format */
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import mainSlider from "@/data/mainSlider";
import SingleHeroSlider from "./SingleHeroSlider";
const HeroSlider = () => {
    return (
        <div className='main-slider'>
            <Swiper
                slidesPerView={1}
                loop
                navigation
                effect='fade'
                autoplay
                modules={[Navigation, EffectFade, Autoplay]}>
                {mainSlider.map((slider) => (
                    <SwiperSlide key={slider.id}>
                        <SingleHeroSlider slider={slider} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
