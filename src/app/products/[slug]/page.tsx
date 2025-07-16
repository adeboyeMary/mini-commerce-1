'use client'
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/component/Catalogue";
import { Product } from "@/store/cartStore";
import { notFound, useParams } from "next/navigation";
import { ProductDetails } from "@/component/ProductDetails";

export default function ProductDetailsPage() {
    const {data, isLoading, error} = useQuery<Product[]>({
        queryKey: ['Products'],
    queryFn: fetchProducts,
    });

  const params = useParams();
  const slug = params?.slug as string;

  const product = data?.find((p) => p.slug === slug);
  if (!product) return notFound();

    return (
        <div className=" flex flex-col p-4  ">
            {isLoading && <p className="mt-16 text-center">Loading...</p>}
            {error && <p className="mt-16 text-center">Error! Something went wrong.</p>}

  if (isLoading) return ;
            <ProductDetails product={product} />
        </div>
    )
};