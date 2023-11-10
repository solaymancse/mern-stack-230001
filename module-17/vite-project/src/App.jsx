import './App.css'
import { Advertisement } from './components/Advertisement'
import { Banner } from './components/Banner'
import { Card } from './components/Card'
import { FlashSale } from './components/FlashSale'

import { Navbar } from './components/Navbar'


function App() {


  return (
    <>
    <Navbar/>
    <Banner/>
    <Advertisement/>
    <FlashSale/>
    <Card />
    </>
  )
}

export default App
