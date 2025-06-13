import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home1 from './Components/Home1'
import Login from './Components/Login'
import NavBar from './Components/NavBar'
import { Route,Routes } from 'react-router-dom'
import ItemImages from './Components/ItemImages'
import ItemPurchase from './Components/ItemPurchase'
import Address from './Components/Address'
import Payment from './Components/Payment'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
     <Routes>
      <Route path='/' element={<Home1></Home1>}></Route>
      <Route path='/c' element={<Login></Login>}></Route>
      <Route path='/d' element={<ItemImages></ItemImages>}></Route>
        <Route path='/s' element={<ItemPurchase></ItemPurchase>}></Route>
          <Route path='/f' element={<Address></Address>}></Route>
           <Route path='/e' element={<Payment></Payment>}></Route>
     </Routes>
    </>
  )
}

export default App
