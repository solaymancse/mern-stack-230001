import React, { useState } from 'react'

export const Ternary = () => {
    const [isLogged, setLogged] = useState(true)
  return (
    <div>
        {isLogged === true ? 'logged':'not logged'}
      

    </div>
  )
}
