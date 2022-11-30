import Image from "next/image";
import Author from "../../components/_child/Author";
import Related from "../../components/_child/Related";
import Format from "../../layout/format";

const Page = () => {
    return (
        <Format>
            <section className="container mx-auto md:px-2 py-16 w-1/2">
                <div className="flex justify-center">
                    <Author></Author>
                </div>

                <div className="post py-10">
                    <h1 className="font-bold text-4xl ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio blanditiis,
                    </h1>
                    <p className="text-gray-500 text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eveniet nisi nihil quis dicta deserunt sapiente. Dignissimos exercitationem libero hic eligendi iusto suscipit esse quo officia! Sint ipsam doloremque deleniti!
                    </p>
                    <div className="py-10">
                        <Image src={"/images/img1.jpg"} width={900} height={600}></Image>
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

export default Page;