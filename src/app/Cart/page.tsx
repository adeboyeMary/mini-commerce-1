'use client'
import { useCartStore } from "@/store/cartStore";
import Image from "next/image";
import Link from "next/link";


const Cart = ()  => {
    const cartProducts = useCartStore((state) => state.cart);
    console.log(cartProducts, '...products...');
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const reduceQuantity = useCartStore((state) => state.decreaseQuantity);
    const clearCart = useCartStore((state) => state.clearCart);
    const total = useCartStore((state) => state.total);

    return (
        <div className="mt-20 md:w-[45%] lg:w-[30%] m-auto shadow-lg p-4 text-base ">
            {cartProducts.length === 0 ? (
                <div className="text-center text-[#8a2b06] ">
                    <p className="mb-4 text-sm ">Cart is empty! Add item to view cart.</p>
                    <Link href="/" className="bg-[#8a2b06] hover:bg-[#4d1601] text-white px-4 
                        py-1 rounded-2xl text-sm ">Home</Link>
                </div>
            ) : (
                <ul className="flex flex-col gap-4 ">
                {cartProducts.map(product => (
                    <li key={product.id} id={product.id} className="flex flex-row gap-2 border-b-[1px] border-[#8a2b06] pb-2 ">
                        <div className="flex flex-row gap-3 ">
                            <div>
                                <Image src={product.image} alt={product.name} width={100} height={100} />
                            </div>

                            <div>
                                <div>
                                    <p className="text-[#8a2b06] ">{product.name}</p>
                                    <p className="text-sm text-[#737373] ">#{product.price}</p>                                                                                                                                              
                                </div>
                                <div className="flex flex-row text-sm gap-3 mt-2 ">
                                    <button onClick={() => increaseQuantity(product.id)} className="border border-[#8a2b06] 
                                    px-2  ">+</button>
                                    <p className="mt-0.5">{product.quantity}</p>
                                    <button onClick={() => reduceQuantity(product.id)} className="border border-[#8a2b06] 
                                    px-2.5   ">-</button>
                                </div>
                            </div>
                        </div>

                    </li>
                ))}
                <div className="m-auto "><p>Total: #{total} </p></div>
                <div className=" m-auto flex text-sm gap-7 ">
                    <button onClick={() => clearCart()} className='bg-[#8a2b06] hover:bg-[#4d1601] text-white px-4 
                        py-1 rounded-2xl  '>Clear Cart</button>
                    <button className="border border-[#8a2b06] text-[#8a2b06] rounded-2xl py-1 px-3.5 hover:bg-[#4d1601]
                        hover:text-white ">Place Order</button>
                </div>
                
            </ul>


            )}            
        </div>
    )
                
};

export default Cart;