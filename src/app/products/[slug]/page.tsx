'use client'
import { DUMMY_PRODUCTS } from "@/component/Catalogue";
import { notFound, useParams } from "next/navigation";
import { ProductDetails } from "@/component/ProductDetails";

// type PageProps = {
//     params: {
//     //   slug: string;
//     params: { slug: string } 
//     };
//   };


export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const product = DUMMY_PRODUCTS.find((p) => p.slug === slug);
  if (!product) return notFound();

    return (
        <div className="flex flex-col p-4  ">
            <ProductDetails product={product} />
        </div>
    )
};