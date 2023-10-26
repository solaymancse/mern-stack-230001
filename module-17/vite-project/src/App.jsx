import './App.css'
import { cardTitle } from './data'

function App() {


  return (
    <>
      {cardTitle.map((title,index) => (
        <div className='card'>
          <img src="https://img.freepik.com/premium-photo/medium-shot-smiley-women-with-tasty-food_23-2149453040.jpg?w=1060" alt="" />
          <h1>{title.title}</h1>
          <button>Order Now</button>
        </div>

      ))}



    </>
  )
}

export default App
