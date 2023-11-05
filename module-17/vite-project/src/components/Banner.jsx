import { PiTelevisionSimpleBold } from 'react-icons/pi'
import { items } from '../data'

export const Banner = () => {
  return (
    <div className='flex max-w-7xl mx-auto'>
      <div className=" rounded-lg bg-white mt-6 py-4 border w-[250px] h-[300px]   px-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-4 mb-4"> <PiTelevisionSimpleBold />{item.title}</li>
        ))}

      </div>
      <div className=' bg-neutral-900 w-full h-[600px]'>

      </div>
    </div>
  )
}
