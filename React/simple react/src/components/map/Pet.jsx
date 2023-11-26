import React from 'react'

export const Pet = () => {
    
    const petNames = ['cat','dog','rabbit','bird','human']
  return (
    <div>
        {petNames.map((item,index)=> (
            <ol key={index}>
                <li>{item}</li>
            </ol>
        ))}

    </div>
  )
}
