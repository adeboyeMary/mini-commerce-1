'use client'
import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../component/Catalogue';
import { Product } from '@/store/cartStore';
import Link from 'next/link';

import Image from 'next/image';
import CategoryButtons from '@/component/Buttons';

export default function Home() {
  const {data, isLoading, error} = useQuery<Product[]>({
    queryKey: ['Products'],
    queryFn: fetchProducts,
  });

  return (
    <div className="bg-white p-2  text-[#8a2b06] text-sm top-0 mt-20  " >
      <CategoryButtons />
      {isLoading && <p className='text-center font-bold mt-7 '>Loading...</p>}
      {error && <p className='text-center font-bold mt-7 '>Something went wrong.</p>}
      <div className="list-none grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 m-auto w-[92%] gap-4 ">
        {data?.map((product) => 
          <div key={product.id} className=' p-2 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(138,43,6,0.4)] '>
            <Link href={`/products/${product.slug}`}>
            <Image src={product.image} alt={product.name} width={250} height={250} className='w-[95%] object-cover m-auto rounded-lg' />
            <div className='flex flex-row justify-between p-1'>
              <h3 className='font-bold'>{product.name}</h3>
              <p>#{product.price}</p>
            </div>
            </Link>
          </div> )}
      </div>
      <footer></footer>
    </div>
  );
}
