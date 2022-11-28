import Image from "next/image";
import Link from "next/link";
import Author from "./_child/Author";

const Section2 = () => {
    return (
        <div className="container mx-auto md:px-20 py-10">
            <h1 className="text-4xl font-bold py-12 text-center">Latest Posts</h1>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {post()}
                {post()}
                {post()}
                {post()}
                {post()}
                {post()}
            </div>
        </div>
    );
}

const post = () => {
    return (
        <div className="item ">
            <div className="images">
                <Image src={"/images/img1.jpg"} width={500} height={350} />
            </div>
            <div className="info flex flex-col justify-center py-4">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Bussiness,Travel</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-Dec 28</Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</h1>
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

export default Section2;