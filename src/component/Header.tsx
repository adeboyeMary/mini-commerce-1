'use client'
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";


const Header = () => {
    const cart = useCartStore((state) => state.cart);
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <header className="bg-[#8a2b06] flex flex-row text-white p-4 w-[100%] justify-between text-sm fixed z-0 top-0 ">
            <h1 className="font-bold text-xl ">NextMed</h1>
            
                <Link href='/Cart' className="flex bg-[#4d1601] py-2 px-6 rounded-4xl font-bold hover:bg-[#2c0d00] gap-2 ">
                <div >
                    <span >Your Cart</span>
                </div>
                <span className="rounded-[25px] bg-[#b94517] py-0.5 px-2 ">{totalQuantity}</span>
            </Link>
            
        </header>
    )
}

export default Header;