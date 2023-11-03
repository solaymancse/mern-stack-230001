import { cardTitle } from "../data"

export const Card = () => {
    return (
        <>
        <div className="mx-auto max-w-7xl px-6 flex gap-4">
        {cardTitle.map((item, index) => (
                <div className=' w-[250px] h-[350px] border' key={index}>
                    <div className="w-full h-[200px]">
                        <img src={item.img} alt="" className="h-full w-full object-cover"/>
                    </div>
                    <div className=" px-4 text-center">
                        <p className=" text-xs text-orange-600 font-semibold mb-2">subscribe now</p>
                        <h1 className=" text-xl font-semibold mb-2">{item.title}</h1>
                        <p className=" text-xs font-semibold text-gray-500 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit.  </p>

                        <button className="  bg-orange-400 py-2 px-6 text-white font-semibold rounded-md">Order Now</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    )
}
