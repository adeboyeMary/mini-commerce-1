'use client'
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from '@/store/cartStore';

type ProductType = {
    id: string
    slug: string
    image: string
    name: string
    price: string
    description: string
}

export const ProductDetails = ({product}: { product: ProductType }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="flex flex-col p-4 mt-16  ">
            <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-4">
                <Image src={product.image} alt={product.name} width={500} height={500} className='w-[100] h-auto ' />
                <div className=" mt-5">
                    <h1 className="text-3xl font-bold text-[#8a2b06] ">{product.name} </h1>
                    <div className="flex flex-row mt-3.5 text-sm gap-1 ">
                        <span className="font-bold ">Price: </span>
                        <span> #{product.price} </span>
                    </div>
                    <div className="flex flex-row mb-3.5 text-sm gap-1 ">
                        <span className="font-bold ">Category:</span>
                        <span>Body Hygiene</span>
                    </div>
                    <div></div>
                    <div className="mb-3.5">
                        <span className="font-bold text-base">Description.</span>
                        <p className="text-sm">{product.description}</p>
                    </div>
                    <div className="flex gap-5 text-sm">
                        <button onClick={() => addToCart(product)} className='bg-[#8a2b06] hover:bg-[#4d1601] text-white px-4 
                            py-2 rounded-2xl  '>
                            Add to cart
                        </button>
                        <Link href="/" className="border border-[#8a2b06] text-[#8a2b06] rounded-2xl py-2 px-3 hover:bg-[#4d1601]
                        hover:text-white ">Back to Products</Link>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    )
};