import Header from './components/Header'
import './index.css'
import Portfolio from './Pages/Portfolio'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import { Foteer } from './components/Foteer'
import { ScrollTop } from './components/ScrollTop'



function App() {
  const [ismode ,setIsmode]=useState(false);
 


  const getData=(data)=>{
    setIsmode(!data)
    
  }

  return (
    <div >
      
      <BrowserRouter>
      <Header GetDataValue={getData} />
      <Routes>
        <Route path='/' element={<Portfolio ismode={ismode} />}  />
      </Routes>
      </BrowserRouter>
      <Foteer />
      <ScrollTop />
      
   
      
    
    </div> 

  )
}
export default App