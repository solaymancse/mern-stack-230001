import {useState, useEffect } from "react"


export const Hooks = () => {

    const [count, setCount] = useState(0);

    useEffect(()=> {

        setTimeout(() => {
            setCount((count) => count + 1);
          }, 1000);

    }, [])
  return (
    <div>
        <h1>I've rendered {count} times!</h1>
    </div>
  )
}
