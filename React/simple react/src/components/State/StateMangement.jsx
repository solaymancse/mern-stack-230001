import React, { useState } from 'react'
import { Card } from '../Props/Card'
import { Katar } from '../Props/Katar';
import { Slicer } from './Slicer';

export const StateMangement = () => {
  const [slice,setSlice] = useState([]);
  console.log(slice);

  return (
    <div>
        <button onClick={()=> (setSlice('alu'))} className='border'>Alu</button>
        <button onClick={()=> (setSlice('Begun'))} className='border' >Begun</button>
        <button onClick={()=> (setSlice('Rosun'))} className='border' >Rosun</button>
        <Slicer title={slice}/>
    </div>
  )
}
