import { featureData } from "../data"

export const Feature = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className=" bg-white rounded-lg px-4 py-2 grid grid-cols-10">
                {featureData.map((item,index) => (
                    <div key={index} className="flex flex-col items-center text-center gap-2" >
                        <div className=" h-[80px] w-[80px]">
                            <img src={item.img} alt="" className="h-full w-full" />
                        </div>
                        <h1 className=" font-md">{item.title} </h1>
                    </div>
                ))}

            </div>
        </div>
    )
}
