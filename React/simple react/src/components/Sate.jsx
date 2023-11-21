import { useState } from "react"


export const Sate = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            Number = {count}

            <div className="text-white mt-4">
                <button onClick={()=> setCount(count + 1)} className=" bg-blue-600 mr-4">Increase</button>
                <button onClick={()=> count > 0 ? setCount(count - 1):''} className=" bg-orange-700">Decrease</button>
            </div>
        </div>
    )
}
