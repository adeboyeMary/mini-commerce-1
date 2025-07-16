import { DUMMY_PRODUCTS } from "@/component/Catalogue";
import { notFound } from "next/navigation";
import { ProductDetails } from "@/component/ProductDetails";

export async function generateStaticParams() {
    return DUMMY_PRODUCTS.map((product) => ({
        slug: product.slug,
    }))
}

export default async function Page({ params }: { params: { slug: string } }) {
    
    const product = DUMMY_PRODUCTS.find((p) => p.slug === params.slug )
    if (!product) return notFound()

    return (
        <div className="flex flex-col p-4  ">
            <ProductDetails product={product} />
        </div>
    )
};