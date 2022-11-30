import Image from "next/image";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";
import Author from "../../components/_child/Author";
import Related from "../../components/_child/Related";
import Format from "../../layout/format";
import featcher from "../../lib/Fetcher";
import getPost from "../../lib/helper";


const Page = ({ fallback }) => {
    const router = useRouter();
    const { postId } = router.query;

    const { data, isLoading, isError } = featcher(`/api/posts/${postId}`);

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error</div>

    return (
        <SWRConfig value={{ fallback }}>
            <Article {...data}></Article>
        </SWRConfig>
    )
}



const Article = ({ title, subTitle, category, img, published, description, author }) => {


    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    {author ? <Author></Author> : <></>}
                </div>

                <div className="post py-10">
                    <h1 className="font-bold text-4xl ">
                        {title}
                    </h1>
                    <p className="text-gray-500 text-xl">
                        {subTitle}
                    </p>
                    <div className="py-10">
                        <Image src={img} width={900} height={600}></Image>
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ullam tempore nemo explicabo sint. Accusantium maxime veniam quaerat nobis, iste tempora officia repellendus aliquid. Voluptatum obcaecati a labore fuga pariatur?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ullam tempore nemo explicabo sint. Accusantium maxime veniam quaerat nobis, iste tempora officia repellendus aliquid. Voluptatum obcaecati a labore fuga pariatur?</p>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ullam tempore nemo explicabo sint. Accusantium maxime veniam quaerat nobis, iste tempora officia repellendus aliquid. Voluptatum obcaecati a labore fuga pariatur?</p>
                    </div>
                </div>

                <Related></Related>
            </section>
        </Format>
    );
}


export async function getStaticProps({ params }) {
    const posts = await getPost(params.postId);
    return {
        props: {
            fallback: {
                'api/posts': posts
            }
        }
    }
}

export async function getStaticPaths() {
    const posts = await getPost();

    const paths = posts.map(value => {
        return {
            params: {
                postId: value.id.toString()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export default Page;