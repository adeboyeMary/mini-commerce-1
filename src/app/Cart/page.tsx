'use client'
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Modal from "@/component/Modal";



const Cart = ()  => {
    const [showBackdrop, setShoeBackdrop] = useState<boolean>(false);
    const cartProducts = useCartStore((state) => state.cart);
    console.log(cartProducts, '...products...');
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const reduceQuantity = useCartStore((state) => state.decreaseQuantity);
    const clearCart = useCartStore((state) => state.clearCart);
    const total = useCartStore((state) => state.total);

    const id = Math.random().toString(36).substring(2, 10);

    const handleShowBackdrop = () => {
        setShoeBackdrop(true);
        clearCart();
        // window.location.href = '/';
        console.log('button clicked......');

    }
    const closeBackdrop = () => {
        clearCart();
        setShoeBackdrop(false);
        console.log('button clicked...2...');
    }

    return (
        <div className=" mt-20 md:w-[45%] lg:w-[30%] m-auto p-4 text-base h-[100%] ">
            {cartProducts.length === 0 ? (
                <div className="text-center text-[#8a2b06]  mt-12 ">
                    <p className="mb-4 text-sm ">Your Cart is empty! Add item to view cart.</p>
                    <Link href="/" className="bg-[#8a2b06] hover:bg-[#4d1601] text-white px-5 
                        py-2 rounded-2xl text-sm ">Home</Link>
                </div>
            ) : (
                <ul className="flex flex-col gap-4  ">
                {cartProducts.map(product => (
                    <li key={product.id} id={product.id} className="flex flex-row gap-2 border-b-[1p] border-[#8a2b06] pb-4
                        shadow-[0_0_20px_rgba(138,43,6,0.4)] p-4 rounded-lg ">
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
                <hr className="border-[#8a2b06]" />
                <div className="m-auto "><p>Total: #{total} </p></div>
                <div className=" m-auto flex text-sm gap-7 ">
                    <button onClick={() => clearCart()} className='bg-[#8a2b06] hover:bg-[#4d1601] text-white px-4 
                        py-1 rounded-2xl  '>Clear Cart</button>
                    <button onClick={handleShowBackdrop} className="border border-[#8a2b06] text-[#8a2b06] rounded-2xl py-1 px-3.5 hover:bg-[#4d1601]
                        hover:text-white ">Place Order</button>
                </div>
            </ul>
            )}   
            
             {showBackdrop && (
                <Modal onHideOverlay={closeBackdrop}>
                    <div className="bg-white p-5 text-[#8a2b06] m-auto text-center flex flex-col ">
                        <div>
                        <h1 className="text-base font-bold">Successful!</h1>
                        <span className="text-xs ">Order ID: {id} </span>
                        </div>
                        
                        <Link href='/' className="bg-[#8a2b06] hover:bg-[#4d1601] text-white w-[47%] lg:w-[30%] xl:w-[25%] m-auto
                        py-1.5 rounded-2xl text-sm mt-5 ">Home</Link>
                    </div>
                </Modal>
            )}         
        </div>
    )
                
};

export default Cart;