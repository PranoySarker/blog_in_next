import Image from "next/image";
import Link from "next/link";
import Author from "./Author";

const Related = () => {
    return (
        <section>
            <h1 className="text-2xl font-bold py-12">Related</h1>
            {post()}
            {post()}
            {post()}
            {post()}
        </section>
    );
}

const post = () => {
    return (
        <div className="flex gap-5 items-center">
            <Link href={"/"}>
                <Image src={"/images/img1.jpg"} className="rounded" width={300} height={200} />
            </Link>
            <div className="title">
                <Link href={"/"}>
                    <h1 className="text-xl font-semibold text-gray-800 hover:text-gray-600">Your most unhappy customers are your greatest source of learning</h1>
                </Link>
                <Author></Author>
            </div>
        </div>
    )
}

export default Related;