import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/Header";

const Format = ({ children }) => {
    return (
        <>
            {/* titel for the app */}
            <Head>
                <title>Blog</title>
            </Head>

            {/*  Layout  */}
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}

export default Format;