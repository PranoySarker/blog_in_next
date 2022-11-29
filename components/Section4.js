import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

const Section4 = () => {
    return (
        <section className="container mx-auto md:px-20 py-10">
            <div className="grid lg:grid-cols-2 gap-5">
                <div className="item">
                    <h1 className="text-3xl font-bold py-12">Business</h1>
                    <div className="flex flex-col gap-6">
                        {post()}
                        {post()}
                        {post()}
                    </div>
                </div>

                <div className="item">
                    <h1 className="text-3xl font-bold py-12">Travel</h1>
                    <div className="flex flex-col gap-6">
                        {post()}
                        {post()}
                        {post()}
                    </div>
                </div>
            </div>
        </section >
    );
}

const post = () => {
    return (
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
                <Image src={"/images/img1.jpg"} className="rounded" width={300} height={250} />
            </div>
            <div className="info flex flex-col justify-center">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness,Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-Dec 28</Link>
                </div>
                <div className="title">
                    <Link href={"/"}>
                        <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</h1>
                    </Link>
                </div>
                <Author></Author>
            </div>
        </div>
    )
}

export default Section4;