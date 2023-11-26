import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from './Card'

export const Katar = () => {
  return (
    <>
      <div className='flex flex-col gap-4'>
        <Link className='border' to="/alu">Alu</Link>
        <Link className='border' to="/begun">Begun</Link>
        <Link className='border' to="/rosun">Rosun</Link>
      </div>
   
    </>
  )
}
