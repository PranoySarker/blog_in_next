import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import featcher from '../lib/Fetcher';
import Author from './_child/Author';

const Section3 = () => {
    const { data, isLoading, isError } = featcher('api/popular');
    // console.log(data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <div className="container mx-auto md:px-20 py-10">
            <h1 className="text-4xl font-bold py-12 text-center">Most Popular</h1>

            {/* Swiper */}
            <Swiper
                slidesPerView={2}
            >
                {
                    data.map((value, index) => (
                        <SwiperSlide key={index}>
                            <Post data={value}></Post>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

const Post = ({ data }) => {
    const { id, title, category, img, published, description, author } = data;
    return (
        <div className="item p-4">
            <div className="images">
                <Image src={img} width={500} height={400} />
            </div>
            <div className="info flex flex-col justify-center py-4">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category}</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-{published}</Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <h1 className="text-xl md:text-3xl font-semibold text-gray-800 hover:text-gray-600">{title}</h1>
                    </Link>
                </div>
                <p className="py-4 text-gray-500">
                    {description}
                </p>
                {author ? <Author></Author> : <></>}
            </div>
        </div>
    )
}

export default Section3;