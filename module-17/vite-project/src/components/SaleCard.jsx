import { flashdata } from "../data"


export const SaleCard = () => {
  return (
    <div className=" grid md:grid-cols-6">
      {flashdata.map((item,index) => (
        <div key={index} className=" hover:shadow-lg hover:border cursor-pointer p-2 my-4 bg w-[190px] h-auto">
          <div className="w-full h-[200px] ">
            <img src={item.img} alt="" />
          </div>
          <div>
            <h1 className="h-[45px] text-sm">{item.title}</h1>
            <span className=" text-[#F85606] text-xl font-semibold">{item.price}</span>
            <div>
              <strike className=" text-[#777]">{item.oldPrice}</strike>
              - {item.discount}
            </div>
          </div>
        </div>
      ))}


    </div>
  )
}
