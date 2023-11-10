import { AiFillSafetyCertificate } from 'react-icons/ai'
import { serviceData } from '../data'
import { Feature } from './Feature'

export const Advertisement = () => {
    return (
        <div className=' relative max-w-7xl mx-auto'>
            <img className='' src="https://icms-image.slatic.net/images/ims-web/51281b82-9de7-4df4-a0da-569d1226ba3f.gif" alt="" />
            <div className=' rounded-lg flex items-cente justify-between px-6 absolute top-[150px] bg-[#FFE8DE] w-full h-[45px]'>
                {serviceData.map((item,index) => (
                    <div key={index} className='flex gap-4 items-center'>
                        <AiFillSafetyCertificate size={24} color='#F85606' />
                        <h1>{item.title}</h1>
                    </div>
                ))}

            </div>
            <div  className=" absolute top-[210px]">
            <Feature/>
            </div>
        </div>
    )
}
