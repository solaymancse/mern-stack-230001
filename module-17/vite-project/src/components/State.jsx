import React, { useState } from 'react'

export const State = () => {
    const [count, setCount] = useState(1)

    const handleIncrease = ()=> {
        setCount(count + 1);
    }
    const handleDecrease = ()=> {
        if(count > 0){
            setCount(count - 1);
        }
        
    }
    return (
        <div>
            <h1 className='text-center'>Num = {count}</h1>
            <div className='flex flex-col text-white gap-6'>
                <button onClick={handleIncrease} className=' bg-blue-600 w-[80px]'>Increase</button>
                <button onClick={handleDecrease}  className=' bg-red-700 w-[80px]'>Decrease</button>
            </div>
        </div>
    )
}
