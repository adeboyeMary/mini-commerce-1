import Link from 'next/link';
import Image from 'next/image';

import { DUMMY_PRODUCTS } from '../component/Catalogue';


export default function Home() {
  return (
    <div className=" p-2 bg-white text-[#8a2b06] text-sm top-0 mt-20  " >
      <div className="list-none grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 m-auto w-[92%] gap-4 ">
        {DUMMY_PRODUCTS.map((product) => 
          <div key={product.id} className=' p-2 rounded-lg shadow-md hover:shadow-[0_0_20px_rgba(138,43,6,0.4)]
 '>
            <Link href={`/products/${product.slug}`}>
            <Image src={product.image} alt={product.name} width={250} height={250} className='m-auto' />
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
