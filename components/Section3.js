import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import Author from './_child/Author';

const Section3 = () => {
    return (
        <div className="container mx-auto md:px-20 py-10">
            <h1 className="text-4xl font-bold py-12 text-center">Most Popular</h1>

            {/* Swiper */}
            <Swiper
                slidesPerView={2}
            >
                <SwiperSlide>{post()}</SwiperSlide>
                <SwiperSlide>{post()}</SwiperSlide>
                <SwiperSlide>{post()}</SwiperSlide>
                <SwiperSlide>{post()}</SwiperSlide>
            </Swiper>
        </div>
    );
}

const post = () => {
    return (
        <div className="item p-4">
            <div className="images">
                <Image src={"/images/img1.jpg"} width={500} height={400} />
            </div>
            <div className="info flex flex-col justify-center py-4">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness,Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-Dec 28</Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <h1 className="text-xl md:text-3xl font-semibold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</h1>
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

export default Section3;