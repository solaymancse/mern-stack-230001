import { SaleCard } from "./SaleCard"

export const FlashSale = () => {
    return (
        <div className=" max-w-7xl mx-auto mt-[100px]">
            <h1 className=" text-2xl text-[#777]">FlashSale</h1>
            <div className=" px-6 py-4 h-[400px] w-full bg-white">
                <div className="flex justify-between border-b pb-6">
                    <div className="flex gap-[80px]">
                            <h1 className=" text-orange-600">On Sale Now</h1>
                            <h1>Ending In: </h1>                     
                    </div>     
                       <div className=" border py-2 px-6 border-orange-600">
                       <button className=" text-orange-600">Shop more</button>           
                       </div>
                </div>
                <div>
                    <SaleCard />
                </div>

            </div>
        </div>
    )
}
