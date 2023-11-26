import React from 'react'

export const Destructing = () => {
    const vehicles = ['mustang', 'f-150', 'expedition'];
    const [car,truck,suv] = vehicles;
  return (
    <div className='flex flex-col gap-6'>
       <h1> {car}</h1>
        <h1>{truck} </h1>
        <h1>{suv} </h1>
    </div>
  )
}
