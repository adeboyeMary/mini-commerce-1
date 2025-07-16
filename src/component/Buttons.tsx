// export type SidebarProps = {
//     onCategoryClick: (category: keyof Recipe) => void;
//     onReset: () => void;
//   }


export default function CategoryButtons (){
    return (
        <div className="m-auto w-[90%] lg:w-[30%] flex justify-between mb-2 p-5 ">
            <button className="border border-[#8a2b06] py-1 px-4 rounded-2xl ">Oral Care</button>
            <button className="border border-[#8a2b06] py-1 px-4 rounded-2xl ">Body Care</button>
            <button className="border border-[#8a2b06] py-1 px-4 rounded-2xl ">Face Care</button>
        </div>
    )
};