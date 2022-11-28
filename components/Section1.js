import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';

const Section1 = () => {

    SwiperCore.use([Autoplay])

    const bg = {
        background: "url('/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }
    return (
        <section className="py-16" style={bg}>
            <div className="container mx-auto md:px-20">
                <h1 className="text-4xl font-bold pb-12 text-center">Trending</h1>

                <Swiper
                    loop={true}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2000
                    }}
                >
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>
                    <SwiperSlide>{slide()}</SwiperSlide>

                </Swiper>
            </div>
        </section >
    );
}


const slide = () => {
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src={"/images/img1.jpg"} width={600} height={600} />
                </Link>
            </div>
            <div className="info flex flex-col justify-center p-4">

                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness,Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-Dec 28</Link>
                </div>

                <div>
                    <Link href={"/"}>
                        <h1 className="text-3xl md:text-6xl font-semibold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</h1>
                    </Link>
                </div>
                <p className="py-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur vitae earum quasi blanditiis non ad quam placeat expedita voluptatum et commodi animi necessitatibus asperiores, reiciendis quae doloremque veritatis nostrum.
                </p>
                <Author></Author>
            </div>
        </div>
    )
}

export default Section1;