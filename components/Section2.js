import Image from "next/image";
import Link from "next/link";
import featcher from "../lib/Fetcher";
import Author from "./_child/Author";

const Section2 = () => {
    const { data, isLoading, isError } = featcher('api/posts');
    // console.log(data);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>


    return (
        <div className="container mx-auto md:px-20 py-10">
            <h1 className="text-4xl font-bold py-12 text-center">Latest Posts</h1>


            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
                {
                    data.map((value, index) => (
                        <Post data={value} key={index}></Post>
                    )
                    )
                }
            </div>
        </div>
    );
}

const Post = ({ data }) => {
    const { id, title, category, img, published, author } = data;
    return (
        <div className="item ">
            <div className="images">
                <Image src={img || "/"} width={500} height={350} />
            </div>
            <div className="info flex flex-col justify-center py-4">
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">{category}</Link>
                    <Link href={"/"} className="text-gray-800 hover:text-gray-600">-{published}</Link>
                </div>
                <div>
                    <Link href={"/"}>
                        <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600">{title}</h1>
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

export default Section2;