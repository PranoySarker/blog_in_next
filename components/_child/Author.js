import Image from "next/image";
import Link from "next/link";

const Author = () => {
    return (
        <div className="author flex py-5">
            <Image src={"/images/author/author1.jpg"} width={50} height={50} className="rounded-full" />
            <div className="flex flex-col justify-center px-2">
                <Link href={"/"}>
                    <p className="text-md font-bold text-gray-800 hover:text-gray-600 ">Pranoy Sarker</p>
                    <span className="text-sm text-gray-500">CEO</span>
                </Link>
            </div>
        </div>
    );
}

export default Author;