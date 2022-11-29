import Link from "next/link";
import { ImFacebook, ImTwitter, ImInstagram } from "react-icons/im";

const Footer = () => {
    return (
        <div className="bg-gray-200">
            <div className="container mx-auto flex justify-center py-5">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Link href={'/'} passHref>
                            <ImFacebook color="#888888"></ImFacebook></Link>
                        <Link href={'/'} passHref>
                            <ImInstagram color="#888888"></ImInstagram></Link>
                        <Link href={'/'} passHref>
                            <ImTwitter color="#888888"></ImTwitter>
                        </Link>
                    </div>
                    <p className="pt-5 text-gray-400">Copyright @ 2022 </p>

                </div>
            </div>
        </div>
    );
}

export default Footer;