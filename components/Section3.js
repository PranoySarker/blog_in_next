import { Swiper, SwiperSlide } from 'swiper/react';

const Section3 = () => {
    return (
        <div className="container mx-auto md:px-20 py-10">
            <h1 className="text-4xl font-bold py-12 text-center">Most Popular</h1>

            {/* Swiper */}
            <Swiper>
                <SwiperSlide></SwiperSlide>
            </Swiper>
        </div>
    );
}

export default Section3;