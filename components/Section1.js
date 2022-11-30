import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import SwiperCore, { Autoplay } from 'swiper';
import featcher from "../lib/Fetcher";

const Section1 = () => {
    const { data, isLoading, isError } = featcher('api/posts');
    // console.log(data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

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
                    {
                        data.map((value, index) => (
                            <SwiperSlide key={index}>
                                <Slide data={value}></Slide>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </section >
    );
}


const Slide = ({ data }) => {
    const { id, title, category, img, published, author } = data;
    return (
        <div className="grid md:grid-cols-2">
            <div className="image">
                <Link href={"/"}>
                    <Image src={img} width={600} height={600} />
                </Link>
            </div>
            <div className="info flex flex-col justify-center p-4">

                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category}</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-{published}</Link>
                </div>

                <div>
                    <Link href={"/"}>
                        <h1 className="text-3xl md:text-6xl font-semibold text-gray-800 hover:text-gray-600">{title}</h1>
                    </Link>
                </div>
                <p className="py-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consectetur vitae earum quasi blanditiis non ad quam placeat expedita voluptatum et commodi animi necessitatibus asperiores, reiciendis quae doloremque veritatis nostrum.
                </p>
                {author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}

export default Section1;