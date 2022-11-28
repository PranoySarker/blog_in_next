import Link from "next/link";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

export default function Header() {
    return (
        <header className="bg-gray-100 shadow-lg sticky top-0 z-10">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">

                <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input type="text" placeholder="Search..." className="mt-1 block w-60 px-3 py-2 bg-white p-1 border border-slate-300" />
                </div>

                <div className="shrink w-80 sm:order-2">
                    <Link href={'/'} passHref>
                        <p className="text-3xl uppercase font-bold text-blue-500">Design</p>
                    </Link>
                </div>

                <div className="w-96 order-3 ">
                    <div className="flex gap-6 justify-center">
                        <Link href={'/'} passHref>
                            <ImFacebook color="#888888"></ImFacebook></Link>
                        <Link href={'/'} passHref>
                            <ImInstagram color="#888888"></ImInstagram></Link>
                        <Link href={'/'} passHref>
                            <ImTwitter color="#888888"></ImTwitter>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}